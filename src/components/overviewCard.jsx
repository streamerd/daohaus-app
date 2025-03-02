import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Flex, Box, Skeleton, Button, Avatar, Spinner } from '@chakra-ui/react';
import makeBlockie from 'ethereum-blockies-base64';
import { utils } from 'ethers';

import { useMetaData } from '../contexts/MetaDataContext';
import ContentBox from './ContentBox';
import TextBox from './TextBox';
import VaultTotal from './vaultTotal';
import { getActiveMembers } from '../utils/dao';
import { getTerm, getTitle, themeImagePath } from '../utils/metadata';

const OverviewCard = ({ daoOverview, members, daoVaults }) => {
  const { daochain, daoid } = useParams();
  const { daoMetaData, customTerms } = useMetaData();
  const [activeMembers, setActiveMembers] = useState(null);
  const totalShares = utils.commify(daoOverview?.totalShares || 0);
  const totalLoot = utils.commify(daoOverview?.totalLoot || 0);
  const history = useHistory();

  useEffect(() => {
    if (members?.length) {
      setActiveMembers(getActiveMembers(members));
    }
  }, [members]);

  return (
    <Box>
      <TextBox size='sm' color='whiteAlpha.900'>
        Details
      </TextBox>
      <ContentBox mt={2} w='100%'>
        <Flex direction='row' align='center'>
          <Skeleton isLoaded={daoMetaData?.name} ml={6}>
            <Flex align='center'>
              <Avatar
                src={
                  daoMetaData?.avatarImg
                    ? themeImagePath(daoMetaData.avatarImg)
                    : makeBlockie(daoid || '0x0')
                }
                mr={6}
              />
              <Box fontSize='2xl' fontWeight={700} fontFamily='heading'>
                {daoMetaData?.name || '--'}
              </Box>
            </Flex>
          </Skeleton>
        </Flex>
        <Skeleton isLoaded={daoMetaData?.description}>
          <Box mt={6}>
            {daoMetaData?.description ? daoMetaData.description : '--'}
          </Box>
        </Skeleton>

        <Flex direction='row' w='100%' justify='space-between' mt={6}>
          <Box>
            <TextBox size='xs' title={getTitle(customTerms, 'Members')}>
              {`Active ${getTerm(customTerms, 'members')}`}
            </TextBox>
            {/* <Skeleton isLoaded={members}> */}
            <TextBox size='lg' variant='value'>
              {activeMembers ? activeMembers.length : <Spinner size='sm' />}
            </TextBox>
            {/* </Skeleton> */}
          </Box>
          <Box>
            <TextBox size='xs'>Shares</TextBox>
            <Skeleton isLoaded={totalShares}>
              <TextBox size='lg' variant='value'>
                {totalShares || '--'}
              </TextBox>
            </Skeleton>
          </Box>
          <Box>
            <TextBox size='xs'>Loot</TextBox>
            <Skeleton isLoaded={totalLoot}>
              <TextBox size='lg' variant='value'>
                {totalLoot || '--'}
              </TextBox>
            </Skeleton>
          </Box>
        </Flex>
        <Box mt={6}>
          {daoVaults && (
            <>
              <TextBox size='sm' title={getTitle(customTerms, 'Bank')}>
                {getTerm(customTerms, 'vault total')}
              </TextBox>
              <VaultTotal vaults={daoVaults} />
            </>
          )}
        </Box>
        <Flex mt={6}>
          <Button
            variant='outline'
            mr={6}
            onClick={() => history.push(`/dao/${daochain}/${daoid}/vaults`)}
            value='bank'
            title={getTitle(customTerms, 'Bank')}
          >
            {`View ${getTerm(customTerms, 'bank')}`}
          </Button>
          <Button
            onClick={() => history.push(`/dao/${daochain}/${daoid}/proposals`)}
            value='proposals'
            title={getTitle(customTerms, 'Proposals')}
          >
            {`View ${getTerm(customTerms, 'proposals')}`}
          </Button>
        </Flex>
      </ContentBox>
    </Box>
  );
};

export default OverviewCard;
