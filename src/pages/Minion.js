import React, { useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Flex,
  Box,
  Heading,
  Icon,
  useToast,
  Button,
  Avatar,
  List,
  ListItem,
  Link,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { RiArrowLeftLine } from 'react-icons/ri';

import { useDao } from '../contexts/DaoContext';
import { useToken } from '../contexts/TokenContext';
import ContentBox from '../components/ContentBox';
import TextBox from '../components/TextBox';
import { truncateAddr } from '../utils/general';
import { FaCopy } from 'react-icons/fa';
import { useEffect } from 'react/cjs/react.development';
// import { TokenService } from '../../utils/token-service';
// import ProposalFormModal from '../Modal/ProposalFormModal';
// import GenericModal from '../Modal/GenericModal';
import makeBlockie from 'ethereum-blockies-base64';
// import { TokenService } from '../services/tokenService';

const MinionDetails = () => {
  const { daoOverview } = useDao();
  // const [members] = useMembers();
  // const [web3Connect] = useWeb3Connect();
  // const { modals, openModal } = useModals();
  const { currentDaoTokens } = useToken();
  const { daochain, daoid, minion } = useParams();
  const toast = useToast();
  const [minionData, setMinionData] = useState();
  const [tokenBalances] = useState();
  // const [proposalType, setProposalType] = useState();
  // const [proposalPresets, setProposalPresets] = useState();
  // const [withdrawSetup, setWithdrawSetup] = useState();

  // const formPresets = () => {
  //   return {
  //     deposit: {
  //       heading: `New Deposit to Minion`,
  //       subline: `A proposal to deposit funds into a minion`,
  //       title: `Deposit funds to Minion (${minionData?.details})`,
  //       applicant: minionData?.minionAddress,
  //     },
  //     minion: {
  //       minionContract: minionData?.minionAddress,
  //     },
  //   };
  // };

  useEffect(() => {
    if (!daoOverview?.minions.length) {
      return;
    }
    const _minionData = daoOverview?.minions.find((m) => {
      return m.minionAddress === minion;
    });
    setMinionData(_minionData);
  }, [daoOverview, minion]);

  console.log(currentDaoTokens);

  useEffect(() => {
    if (!currentDaoTokens) {
    }
    // const getMinionBalances = async () => {
    //   const _tokenBalances = {};
    //   const promises = [];
    //   const tokens = currentDaoTokens.map(async (b) => {
    //     const tokenService = TokenService({
    //       tokenAddress: b.tokenAddress,
    //       chainID: daochain,
    //     });

    //     promises.push(tokenService('balanceOf')(minion));
    //     return b.tokenAddress;
    //   });
    //   const balances = await Promise.all(promises);

    //   tokens.forEach((token, idx) => {
    //     console.log(idx);
    //     console.log(tokens);
    //     _tokenBalances[tokens[idx]] =
    //       balances[idx] / 10 ** currentDaoTokens[idx].decimals;
    //   });
    //   setTokenBalances(_tokenBalances);
    // };

    // getMinionBalances();
  }, [currentDaoTokens, minion]);

  const handleDeposit = () => {
    // setProposalType('funding');
    // setProposalPresets(formPresets().deposit);
    // openModal('proposal');
  };

  const handleNewMinion = () => {
    // console.log('open minion');
    // setProposalType('minion');
    // setProposalPresets(formPresets().minion);
    // openModal('minion');
  };

  const handleMinionWithdraw = () => {
    // const minionMember = members.find(
    //   (member) => member.memberAddress === minion.minionAddress,
    // );
    // console.log(minionMember);
    // setWithdrawSetup(minionMember);
    // openModal('minionWithdraw');
  };
  console.log(tokenBalances);

  return (
    <Box>
      <Link as={RouterLink} to={`/dao/${daochain}/${daoid}/settings`}>
        <HStack spacing={3}>
          <Icon
            name='arrow-back'
            color='primary.50'
            as={RiArrowLeftLine}
            h='20px'
            w='20px'
          />
          <TextBox size='md' align='center'>
            {' '}
            Settings
          </TextBox>
        </HStack>
      </Link>
      <ContentBox d='flex' flexDirection='column' position='relative' mt={2}>
        {minionData ? (
          <>
            <Flex
              p={4}
              justify='space-between'
              align='center'
              key={minionData.minionAddress}
            >
              <Box>
                <Flex align='center'>
                  <Avatar
                    name={minionData.minionAddress}
                    src={makeBlockie(minionData.minionAddress)}
                    mr={3}
                  />
                  <Heading>{minionData.details}</Heading>
                </Flex>
              </Box>
              <Flex align='center'>
                <TextBox size='md' colorScheme='whiteAlpha.900'>
                  {minionData.minionType}:{' '}
                  <Box as='span' color='primary.100'>
                    {truncateAddr(minionData.minionAddress)}
                  </Box>
                </TextBox>
                <CopyToClipboard
                  text={minionData.minionAddress}
                  onCopy={() =>
                    toast({
                      title: 'Copied Minion Address',
                      position: 'top-right',
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    })
                  }
                >
                  <Icon
                    as={FaCopy}
                    color='secondary.300'
                    ml={2}
                    _hover={{ cursor: 'pointer' }}
                  />
                </CopyToClipboard>
              </Flex>
            </Flex>
            <Box>
              <Stack spacing={6}>
                <Stack spacing={2}>
                  <Heading fontSize='xl'>Get Balances</Heading>
                  {tokenBalances &&
                    Object.keys(tokenBalances).map((token) => {
                      console.log(token);
                      return (
                        <Text key={token}>
                          {token}: {tokenBalances[token]}
                        </Text>
                      );
                    })}
                  <Button w='15%'>Add Token</Button>
                </Stack>

                <Stack spacing={2}>
                  <Heading fontSize='xl'>Minion Internal Balance</Heading>
                  <HStack spacing={4}>
                    <Box>
                      <TextBox>Parent:</TextBox>
                      <TextBox variant='value' size='xl'>
                        0 weth
                      </TextBox>
                    </Box>
                    <Button w='15%'>Add Dao</Button>
                  </HStack>
                </Stack>

                <Stack spacing={2}>
                  <Heading fontSize='xl'>
                    Deposit, Withdraw, & Fetch From DAO
                  </Heading>
                  <HStack spacing={2}>
                    <Button onClick={handleDeposit} w='15%' fontSize='xs'>
                      Depost from DAO proposal
                    </Button>
                    <Button onClick={handleDeposit} w='15%' fontSize='xs'>
                      Transfer Minion Funds
                    </Button>
                    <Button
                      onClick={handleMinionWithdraw}
                      w='20%'
                      fontSize='xs'
                    >
                      Withdraw funds from DAO to Minion
                    </Button>
                    <Button
                      onClick={handleMinionWithdraw}
                      w='20%'
                      fontSize='xs'
                    >
                      Withdraw funds from another DAO to DAO
                    </Button>
                  </HStack>
                </Stack>

                <Stack spacing={2}>
                  <Heading fontSize='xl'>New Prop/ Forged Prop</Heading>
                  <HStack spacing={2}>
                    <Button onClick={handleNewMinion} w='15%' fontSize='xs'>
                      New Minion proposal
                    </Button>
                    <Button
                      onClick={handleNewMinion}
                      w='15%'
                      isDisabled={true}
                      fontSize='xs'
                    >
                      Proposal on another DAO
                    </Button>
                    <Button w='20%' isDisabled={true} fontSize='xs'>
                      Forged Tool airdrop funds to member/s
                    </Button>
                    <Button w='20%' isDisabled={true} fontSize='xs'>
                      Forged Tool stream funds to member/s
                    </Button>
                    <Button w='15%' isDisabled={true} fontSize='xs'>
                      Forged Tool mint NFT
                    </Button>
                  </HStack>
                </Stack>
                <Stack>
                  <Heading fontSize='xl'>Activity</Heading>
                  <List>
                    <ListItem>Proposal 1</ListItem>
                    <ListItem>Proposal 2</ListItem>
                    <ListItem>Proposal 3</ListItem>
                  </List>
                </Stack>
              </Stack>
            </Box>
          </>
        ) : (
          <Flex justify='center'>
            <Box fontFamily='heading'>No minion found</Box>
          </Flex>
        )}
        {/* <ProposalFormModal
        presets={proposalPresets}
        isOpen={modals.proposal}
        proposalType={proposalType}
      />
      <ProposalFormModal
        presets={proposalPresets}
        isOpen={modals.minion}
        proposalType={proposalType}
      /> */}
        {/* <GenericModal isOpen={modals.minionWithdraw}>
        <Flex align='center' direction='column'>
          <TextBox>Withdraw</TextBox>
          <TextBox>{withdrawSetup?.tokenBalances[0]}</TextBox>
          <ButtonGroup>
            <Button variant='outline'>Cancel</Button>
            <Button>Confirm</Button>
          </ButtonGroup>
        </Flex>
      </GenericModal> */}
      </ContentBox>
    </Box>
  );
};

export default MinionDetails;
