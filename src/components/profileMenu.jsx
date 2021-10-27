import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useParams } from 'react-router-dom';
import {
  Menu,
  MenuList,
  Icon,
  MenuButton,
  MenuItem,
  useToast,
} from '@chakra-ui/react';

import { useDaoMember } from '../contexts/DaoMemberContext';
import { useInjectedProvider } from '../contexts/InjectedProviderContext';
import { useOverlay } from '../contexts/OverlayContext';
import { useTX } from '../contexts/TXContext';
import { useAppModal } from '../hooks/useModals';
import { CORE_FORMS, FORM } from '../data/forms';
import { TX } from '../data/contractTX';
import { createContract } from '../utils/contract';
import { daoConnectedAndSameChain } from '../utils/general';
import { LOCAL_ABI } from '../utils/abi';
import { authenticateDid, getBasicProfile } from '../utils/3box';
import { FIELD } from '../data/fields';

const ProfileMenu = ({ member }) => {
  const toast = useToast();
  const { address, injectedChain, injectedProvider } = useInjectedProvider();
  const { formModal } = useAppModal();
  const { daochain, daoid } = useParams();
  const { daoMember } = useDaoMember();
  const { errorToast } = useOverlay();
  const { submitTransaction } = useTX();

  const [canRageQuit, setCanRageQuit] = useState(false);

  const handleGuildKickClick = () => {
    formModal({
      ...FORM.GUILDKICK,
      localValues: { memberAddress: member.memberAddress },
    });
  };

  const handleRageQuitClick = () => formModal(CORE_FORMS.RAGE_QUIT);

  const handleUpdateDelegateClick = () => formModal(CORE_FORMS.UPDATE_DELEGATE);

  const handleEditProfile = () =>
    formModal({
      ...FORM.PROFILE,
      fields: [FIELD.BLUR, ...FORM.PROFILE.fields],
      onSubmit: ({ values }) => {
        // How does the loader work with async
        const submit = async () => {
          const [client, did] = await authenticateDid(member.memberAddress);
          if (did.authenticated) {
            console.log('Pop');
            // onLoad hook
						// Add set value functionality in the profile
						const values = await getBasicProfile(did.id)
						console.log(values)
            formModal({
              ...FORM.PROFILE,
							defaultValues: {
								name: values.name || "",
								emoji: values.emoji || "",
							},
              onLoad: async () => {
                // fetch values
                // update field values
                // console.log('basicProfile');
								// const values = await getBasicProfile(client, did)
								// console.log(values)
              },
            });
          }
        };
        submit();

        // authenticate profile
        // open modal modal
        // then user can fill out
      },
    });

  const copiedToast = () => {
    toast({
      title: 'Copied Address',
      position: 'top-right',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const userRejectedToast = () => {
    errorToast({
      title: 'User rejected transaction signature.',
    });
  };

  const handleRageKick = async () => {
    try {
      await submitTransaction({
        tx: TX.RAGE_KICK,
        args: [member.memberAddress],
      });
    } catch (err) {
      console.log('error: ', err);
      userRejectedToast();
    }
  };

  const isMember =
    address &&
    member?.memberAddress &&
    address.toLowerCase() === member?.memberAddress.toLowerCase();

  const hasSharesOrLoot = +member.shares > 0 || +member.loot > 0;

  useEffect(() => {
    const getCanRageQuit = async () => {
      if (daoMember?.highestIndexYesVote?.proposalIndex) {
        const molochContract = createContract({
          address: daoid,
          abi: LOCAL_ABI.MOLOCH_V2,
          chainID: daochain,
          web3: injectedProvider,
        });

        const localCanRage = await molochContract.methods
          .canRagequit(daoMember?.highestIndexYesVote?.proposalIndex)
          .call();

        setCanRageQuit(localCanRage);
      } else {
        setCanRageQuit(true);
      }
    };
    getCanRageQuit();
  }, [daoMember]);

  return (
    <Menu>
      <MenuButton>
        <Icon
          as={BsThreeDotsVertical}
          color='secondary.400'
          h='30px'
          w='30px'
          _hover={{ cursor: 'pointer' }}
        />
      </MenuButton>
      <MenuList>
        <CopyToClipboard text={member?.memberAddress} onCopy={copiedToast}>
          <MenuItem>Copy Address</MenuItem>
        </CopyToClipboard>

        <MenuItem onClick={handleEditProfile}>Edit Profile</MenuItem>

        {daoConnectedAndSameChain(address, daochain, injectedChain?.chainId) ? (
          <>
            {isMember && hasSharesOrLoot && (
              <MenuItem onClick={handleRageQuitClick}>RageQuit</MenuItem>
            )}
            {isMember && hasSharesOrLoot && canRageQuit && (
              <MenuItem onClick={handleUpdateDelegateClick}>
                Add Delegate Key
              </MenuItem>
            )}
            {!isMember &&
              member.exists &&
              !member.jailed &&
              hasSharesOrLoot && (
                <MenuItem onClick={handleGuildKickClick}>GuildKick</MenuItem>
              )}
            {!isMember && member.jailed && hasSharesOrLoot && (
              <MenuItem onClick={handleRageKick}>RageKick</MenuItem>
            )}
          </>
        ) : null}
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
