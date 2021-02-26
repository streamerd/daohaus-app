import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  Box,
  Flex,
  Link,
  Progress,
  Button,
  Spinner,
  Text,
} from '@chakra-ui/react';
import MainViewLayout from '../components/mainViewLayout';
import ContentBox from '../components/ContentBox';
import TextBox from '../components/TextBox';
import {
  countDownText,
  isCcoProposalForAddress,
  isCcoProposal,
  contributionTotalValue,
  claimCountDownText,
} from '../utils/cco';
import { getEligibility } from '../utils/metadata';
import { timeToNow } from '../utils/general';

import { useInjectedProvider } from '../contexts/InjectedProviderContext';
import CcoLootGrabForm from '../forms/ccoLootGrab';

const CcoContribution = React.memo(function ccocontribution({
  daoMetaData,
  currentDaoTokens,
  daoProposals,
}) {
  const { daochain, daoid } = useParams();
  const { address, injectedChain } = useInjectedProvider();
  const [roundData, setRoundData] = useState(null);
  const [isEligible, setIsEligible] = useState('unchecked');
  const [checkingEligibility, setCheckingEligibility] = useState(false);
  const [currentContributionData, setCurrentContributionData] = useState(null);

  useEffect(() => {
    if (currentDaoTokens && daoMetaData?.boosts?.cco?.active) {
      const ccoToken = currentDaoTokens.find(
        (token) =>
          token.tokenAddress === daoMetaData.boosts.cco.metadata.tributeToken,
      );

      const now = new Date() / 1000;
      const round = daoMetaData.boosts.cco.metadata.rounds.find(
        // TODO: make this dynamic based on start times and now time
        // const now = new Date() / 1000;
        (round) => round.round === 1,
      );

      const currentRound = {
        ...round,
        endTime: `${+round.startTime + +round.duration}`,
        roundOpen:
          +round.startTime < now &&
          +`${+round.startTime + +round.duration}` > now,
      };

      setRoundData({
        ccoToken,
        currentRound,
        network: daoMetaData.boosts.cco.metadata.network,
        claimTokenValue: daoMetaData.boosts.cco.metadata.claimTokenValue,
        claimTokenSymbol: daoMetaData.boosts.cco.metadata.claimTokenSymbol,
        raiseStartTime: daoMetaData.boosts.cco.metadata.raiseStartTime,
        claimPeriodStartTime:
          daoMetaData.boosts.cco.metadata.claimPeriodStartTime,
        claimOpen: +daoMetaData.boosts.cco.metadata.claimPeriodStartTime < now,
      });
    }
  }, [currentDaoTokens, daoMetaData]);

  useEffect(() => {
    if (roundData && address && daoProposals.length) {
      const contributionProposals = daoProposals.filter((proposal) => {
        return isCcoProposal(proposal, roundData);
      });
      const addressProposals = contributionProposals.filter((proposal) => {
        return isCcoProposalForAddress(proposal, address, roundData);
      });

      console.log('roundData', roundData);
      console.log('contributionProposals', contributionProposals);
      console.log('addressProposals', addressProposals);

      const contributionTotal = contributionTotalValue(
        contributionProposals,
        roundData,
      );
      const addressTotal = contributionTotalValue(addressProposals, roundData);

      setCurrentContributionData({
        contributionProposals,
        addressProposals,
        contributionTotal,
        addressTotal,
        statusPercentage:
          (contributionTotal / +roundData.currentRound.maxTarget) * 100,
        remaining: +roundData.currentRound.maxTarget - contributionTotal,
        addressRemaining:
          +roundData.currentRound.maxContribution - addressTotal,
      });

      setIsEligible(addressTotal > 0 ? 'checked' : 'unchecked');
    }
  }, [address, roundData, daoProposals]);

  const checkEligibility = async () => {
    setCheckingEligibility(true);
    const eligibleRes = await getEligibility(address);
    setIsEligible(eligibleRes ? 'checked' : 'denied');
    setCheckingEligibility(false);
  };

  const networkMatch = () => {
    return injectedChain.network === roundData.network;
  };

  const eligibleBlock = isEligible === 'denied' || isEligible === 'unchecked';

  return (
    <MainViewLayout header='DAOhaus CCO' isDao={true}>
      <Box w='100%'>
        <Flex wrap='wrap'>
          {roundData ? (
            <>
              <Box
                w={['100%', null, null, null, '50%']}
                pr={[0, null, null, null, 6]}
                mb={6}
              >
                <ContentBox mt={2} w='100%'>
                  <TextBox size='sm' color='whiteAlpha.900' mb={7}>
                    1. Check eligibility
                  </TextBox>
                  {networkMatch() ? (
                    <>
                      {isEligible === 'unchecked' ? (
                        <Button
                          onClick={checkEligibility}
                          disabled={checkingEligibility}
                        >
                          {!checkingEligibility ? (
                            <>Check Eligibility</>
                          ) : (
                            <Spinner />
                          )}
                        </Button>
                      ) : null}
                      {isEligible === 'checked' ? (
                        <TextBox variant='value' size='md' my={2}>
                          You&apos;re eligible. Kudos for interacting with daos!
                        </TextBox>
                      ) : null}
                      {isEligible === 'denied' ? (
                        <TextBox variant='value' size='md' my={2}>
                          Address is not eligible
                        </TextBox>
                      ) : null}
                    </>
                  ) : (
                    <TextBox variant='value' size='md' my={2}>
                      Switch to the {roundData.network} network
                    </TextBox>
                  )}
                </ContentBox>

                {networkMatch() ? (
                  <>
                    <ContentBox mt={2} w='100%'>
                      <Flex justifyContent='space-between'>
                        <TextBox size='sm' color='whiteAlpha.900' mb={7}>
                          2. Contribute
                        </TextBox>
                        <Text fontSize='sm' color='whiteAlpha.700' as='i'>
                          {countDownText(roundData.currentRound)}
                        </Text>
                      </Flex>
                      {!eligibleBlock ? (
                        <>
                          <CcoLootGrabForm
                            roundData={roundData}
                            currentContributionData={currentContributionData}
                          />

                          {currentContributionData ? (
                            <Box borderTopWidth='1px' mt={5}>
                              {currentContributionData.addressProposals.map(
                                (prop) => {
                                  return (
                                    <Flex
                                      justifyContent='space-between'
                                      alignContent='center'
                                      key={prop.id}
                                      mt={5}
                                    >
                                      <Text
                                        fontSize='sm'
                                        color='whiteAlpha.700'
                                        as='i'
                                      >
                                        {`You contributed ${prop.tributeOffered /
                                          10 ** roundData.ccoToken.decimals} ${
                                          roundData.ccoToken.symbol
                                        } ${timeToNow(prop.createdAt)}`}
                                      </Text>
                                      <RouterLink
                                        to={`/dao/${daochain}/${daoid}/proposals/${prop.proposalId}`}
                                      >
                                        View contribution
                                      </RouterLink>
                                    </Flex>
                                  );
                                },
                              )}
                            </Box>
                          ) : null}
                        </>
                      ) : null}
                    </ContentBox>

                    <ContentBox mt={2} w='100%'>
                      <Flex
                        justifyContent='space-between'
                        alignItems='center'
                        mt={5}
                      >
                        <TextBox size='sm' color='whiteAlpha.900'>
                          3. Claim
                        </TextBox>
                        <Text fontSize='sm' color='whiteAlpha.700' as='i'>
                          {claimCountDownText(roundData.claimPeriodStartTime)}
                        </Text>
                      </Flex>
                      <Flex
                        justifyContent='space-between'
                        alignItems='center'
                        mt={5}
                      >
                        <Box>
                          <Text fontSize='sm' color='whiteAlpha.700' as='i'>
                            HAUS Available to Claim
                          </Text>
                          <TextBox variant='value' size='md' my={2}>
                            {`${roundData.claimTokenValue *
                              currentContributionData?.addressTotal} ${
                              roundData.claimTokenSymbol
                            }`}
                          </TextBox>
                        </Box>
                        <Button disabled={!roundData.claimOpen}>Claim</Button>
                      </Flex>
                    </ContentBox>
                  </>
                ) : null}
              </Box>
              <Box w={['100%', null, null, null, '50%']}>
                <ContentBox mt={2} w='100%'>
                  <Box
                    fontSize='xl'
                    fontWeight={700}
                    fontFamily='heading'
                    mb={7}
                  >
                    Status
                  </Box>
                  <Progress
                    colorScheme='secondary'
                    height='24px'
                    value={
                      currentContributionData
                        ? currentContributionData.statusPercentage
                        : 0
                    }
                    mb={7}
                  />
                  <Flex direction='row' justifyContent='space-between'>
                    <Box>
                      <TextBox size='sm' color='whiteAlpha.900'>
                        Min target
                      </TextBox>
                      <TextBox variant='value' size='xl' my={2}>
                        {`${roundData.currentRound.minTarget} ${roundData.ccoToken.symbol}`}
                      </TextBox>
                    </Box>
                    <Box>
                      <TextBox size='sm' color='whiteAlpha.900'>
                        Max target
                      </TextBox>
                      <TextBox variant='value' size='xl' my={2}>
                        {`${roundData.currentRound.maxTarget} ${roundData.ccoToken.symbol}`}
                      </TextBox>
                    </Box>
                  </Flex>
                  <Flex direction='row' justifyContent='space-between' mb={5}>
                    <Box>
                      <TextBox size='sm' color='whiteAlpha.900'>
                        Contributed
                      </TextBox>
                      <TextBox variant='value' size='xl' my={2}>
                        {`${
                          currentContributionData
                            ? currentContributionData.contributionTotal
                            : 0
                        } ${roundData.ccoToken.symbol}`}
                      </TextBox>
                    </Box>
                    <Box>
                      <TextBox size='sm' color='whiteAlpha.900'>
                        Room Left
                      </TextBox>
                      <TextBox variant='value' size='xl' my={2}>
                        {`${
                          currentContributionData
                            ? currentContributionData.remaining
                            : 0
                        } ${roundData.ccoToken.symbol}`}
                      </TextBox>
                    </Box>
                  </Flex>
                  <TextBox size='sm' color='whiteAlpha.900'>
                    {countDownText(roundData.currentRound)}
                  </TextBox>
                </ContentBox>
                <ContentBox mt={2} w='100%'>
                  <Box
                    fontSize='xl'
                    fontWeight={700}
                    fontFamily='heading'
                    mb={7}
                  >
                    Resources
                  </Box>

                  <Link
                    href='https://daohaus.club/ '
                    isExternal
                    display='flex'
                    alignItems='center'
                    mb={5}
                  >
                    <TextBox fontSize='sm' colorScheme='secondary.500'>
                      About DAOhaus
                    </TextBox>
                  </Link>

                  <Link
                    href='https://daohaus.club/ '
                    isExternal
                    display='flex'
                    alignItems='center'
                  >
                    <TextBox fontSize='sm' colorScheme='secondary.500'>
                      About CCOs
                    </TextBox>
                  </Link>
                </ContentBox>
              </Box>
            </>
          ) : (
            <Box>DAO does not have an active CCO</Box>
          )}
        </Flex>
      </Box>
    </MainViewLayout>
  );
});

export default CcoContribution;
