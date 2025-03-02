import { BOOST_PLAYLISTS } from './playlists';
import { MINION_TYPES } from '../utils/proposalUtils';
import { BOOST_FORMS, CORE_FORMS } from './forms';
import { MINIONS } from './minions';
import { PUBLISHERS } from './publishers';

export const CONTENT = {
  DEV_SUITE: {
    title: 'DEV Suite',
    description: 'Developer tools to prototype, build and test your own boosts',
    publisher: PUBLISHERS.DAOHAUS,
    version: '1.00',
    pars: [
      'The DEV Suite is an all-in-one developer toolset for advanced builders to prototype, build and test their own Minions and Boosts.',
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  OLD_DEV_SUITE: {
    title: 'Minion DEV Suite v1 (Vanilla Minion)',
    description:
      'Enable one-time interactions with other smart contracts via DAO proposals.',
    publisher: PUBLISHERS.DAOHAUS,
    version: '1.00',
    pars: [
      'Want a simple way to execute smart contract calls automatically based on the outcome of your proposals?',
      'Also known as a vanilla minion, it is a basic upgrade to your DAO proposals, enabling one-time interactions with other smart contracts once your proposals are passed. ',
      'This way, you can upgrade your DAO experience by seamlessly go from voting to execution without any coordination lags.',
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  NIFTY_DEV_SUITE: {
    title: 'Minion DEV Suite v2 (Nifty Minion)',
    description:
      'Enable one-time interactions with other smart contracts via DAO proposals with early execution capabilites.',
    publisher: PUBLISHERS.DAOHAUS,
    version: '1.00',
    pars: [
      'The V2 Minion is similar to the vanilla minion with the ability to set quorum levels, transactions can be executed earlier once quorum requirements are met',
      'Also know as a Nifty Minion',
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  SAFE_DEV_SUITE: {
    title: 'Minion DEV Suite v3 (Safe Minion)',
    description:
      'Enable interactions with other smart contracts from your Safe Minion/Gnosis Safe vault via DAO proposals.',
    publisher: PUBLISHERS.DAOHAUS,
    version: '1.00',
    pars: [
      'Deploying a Minion and a Gnosis Safe, this Boost enables your DAO to manage funds in a Gnosis Safe, as well as do complex multi-call transactions via the Minion.',
      'This Boost is perfect for advanced DAOs looking to trade NFTs, manage LP positions in AMMs or do other arbitrary transactions',
      'To increase proposal velocity for less critical proposals, the ability to set quorum levels enable early execution when a minimum quorum is met.',
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  NIFTY_INK: {
    title: 'Nifty Ink',
    description: 'Buy and Sell Nifty Ink NFTs as a DAO.',
    publisher: PUBLISHERS.DAOHAUS,
    version: '1.00',
    pars: [
      'This NFT boost allows the DAO to interact with Nifty Ink on xDAI.',
      'Buy and Sell Nifty Ink NFTs as a DAO using proposals',
    ],
    externalLinks: [
      {
        href: 'https://github.com/HausDAO/NiftyMInionSummoner',
        label: 'Nifty Minion Code',
      },
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  WRAP_N_ZAP: {
    title: 'Wrap N Zap',
    description:
      'Allow your DAO to receive native ETH, xDAI, or Polygon without senders needing to wrap it first.',
    publisher: PUBLISHERS.DAOHAUS,
    version: '1.00',
    pars: [
      'Does your DAO regularly receive native ETH, xDAI or Polygon payments?',
      'The Wrap N Zap Boost makes it easier for your senders by automatically receiving and wrapping their native ETH, xDAI or Polygon, so your funds are nicely wrapped and supported by the DAO vaults.',
    ],
    externalLinks: [
      {
        href: '	https://github.com/HausDAO/wrap-n-zap',
        label: 'Contract Code',
      },
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  DISCORD: {
    title: 'Discord Notifications',
    description:
      'Customize and send notifications of your DAO’s activity to your Discord server with this boost.',
    publisher: PUBLISHERS.DAOHAUS,
    version: '0.5',
    pars: [
      'Customise and send notifications of your DAO’s activity to your Discord server with this boost.',
      'With Discord notifications, keep your DAO members involved and updated whenever there are new proposals to vote, sponsor or process.',
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  MINTGATE: {
    title: 'Mint Gate',
    description: 'Gate links to restrict view access to DAO members only',
    publisher: PUBLISHERS.DAOHAUS,
    version: '0.5',
    pars: [
      'Mintgate is a Boost which enables your DAO to create and lock content behind DAO membership. ',
      'Once you set it up, only users with DAO shares can access these links.',
      'This is especially useful for content creators looking to gate the access to their content to DAO members, or DAOs looking to keep sensitive information to the right audience.',
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  SUPERFLUID: {
    title: 'Superfluid',
    description: 'Stream tokens from a minion vault via Superfluid Protocol',
    publisher: PUBLISHERS.DAOHAUS,
    version: '0.5',
    pars: [
      'Does your DAO have ongoing and recurring payments? If yes, the SuperFluid Minion helps automate ongoing streams of payments via the SuperFluid Protocol to vendors, other DAOs and any addresses',
      'Set it up once, and your payments will be streamed in real-time automatically as long as your minion vault has sufficient funds.',
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  DISCOURSE: {
    title: 'Discourse Forum',
    description: 'Create a Discourse forum for your DAO to discuss proposals',
    publisher: PUBLISHERS.DAOHAUS,
    version: '1.0',
    pars: [
      'This boost helps your DAO integrate with and create a forum via Discourse -- a widely-used open source forum platform',
      'With each proposal, the Boost automatically creates a forum post, so that DAO members can have long-form and in-depth discussions for the decisions that matter.',
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  RARIBLE: {
    title: 'Rarible Boost',
    description: 'Buy and sell NFTs on Rarible.',
    publisher: PUBLISHERS.BOOST_FOUNDRY,
    version: '1.0',
    pars: [
      'Does your DAO collect, trade or manage NFTs?',
      'This Rarible Boost enables your DAO to buy and sell NFTs directly through a DAOhaus proposal.',
      'Once a proposal is passed, the trade will execute via our integration with Rarible.',
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  NFT_TRIBUTE: {
    title: 'NFT Tribute Boost',
    description:
      'Enable new members to tribute NFTs for Funds, Shares and Loot.',
    publisher: PUBLISHERS.BOOST_FOUNDRY,
    version: '1.0',
    pars: [
      'Does your DAO collect NFTs? This Boost empowers your DAO to accept NFT tributes from new DAO members.',
      'In exchange for the NFTs tributes, members are able to request Shares, Funds and Loot all within 1 transaction, making it seamless to recruit more collectors into your DAO.',
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  BANK_BUYOUT: {
    title: 'Bank Buyout Boost',
    description:
      'Set aside Bank assets for Ragequit members to account for their share of Minion Vaults.',
    publisher: PUBLISHERS.BOOST_FOUNDRY,
    version: '1.0',
    pars: [
      'Does your DAO use Minions? If yes, your DAO’s assets are likely to be siloed into different Minion Vaults, creating issues when calculating RageQuit amounts.',
      'This Boost helps calculate a RageQuit members’ pro-rated share from the Bank for the DAO’s approval.',
      'Once the proposal is passed, the funds are set aside for incoming Rage Quits, ensuring that the RageQuit process is fair and efficient.',
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  DAO_BOOKS: {
    title: 'DAO Books',
    description:
      'Visualise & track the inflows, outflows & consolidated closing for your DAO vaults',
    publisher: PUBLISHERS.BOOST_FOUNDRY,
    version: '1.0',
    pars: [
      'The DAO Books Boost helps you break down & visualise your DAO vault balances into transactions (inflows and outflows), so you can better understand how the vault funds are being spent or added. This is especially helpful for transactional analytics, book-keeping and financial reporting. ',
      "By installing this Boost, your DAO's vaults will now have a new button which leads to your Vault Book (i.e. book-keeping view of your vault). In your Vault Book, you will see a breakdown of every transaction (inflows and outflows) as well as a consolidated closing for your vaults. For further analysis & reporting, you can also export your Vault Book into a CSV format.",
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  SPAM_FILTER: {
    title: 'Proposal Anti-Spam',
    description:
      'Filter & reduce proposal spam by requiring minimum tributes and hiding spam proposals.',
    publisher: PUBLISHERS.DAOHAUS,
    version: '1.0',
    pars: [
      'This Boost gives you a suite of anti-spam features to filter and reduce spam proposals.',
      'First, you can set a tribute minimum for proposals, filtering out proposals that do not meet the minimum amount.',
      'To go even further, you can prevent non-members from submitting proposals temporarily by hiding the ‘Add Proposal’ button.',
      'At any time, you can always reconfigure the minimum tribute, filter settings and visibility of the ‘Add Proposal’ button.',
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
    ],
  },
  DISPERSE: {
    title: 'Disperse Boost',
    description: 'Disperse tokens to a list of recipients.',
    publisher: PUBLISHERS.BOOST_FOUNDRY,
    version: '1.0',
    pars: [
      'This Boost allows you to send funds to a list of addresses in a single transaction.',
      'Addresses and amounts can be input as a CSV or other similar format.',
      'Funds can be in the form of tokens or ether (network token) and are pulled from a Safe Minion.',
    ],
    externalLinks: [
      { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
      { href: 'https://disperse.app', label: 'Disperse App' },
    ],
  },
  // SNAPSHOT: {
  //   title: 'Snapshot Proposals',
  //   description:
  //     'Gasless voting for quicker, smaller decisions or just collecting signal.',
  //   publisher: PUBLISHERS.DAOHAUS,
  //   version: '0.5',
  //   pars: ['AWAITING CONTENT'],
  //   externalLinks: [
  //     { href: 'https://discord.gg/daohaus', label: 'Boost Support' },
  //   ],
  // },
};

export const COMMON_STEPS = {
  DISPLAY: {
    type: 'boostDetails',
    title: { type: 'boostName' },
    subtitle: 'Install Boost',
    next: 'STEP1',
    start: true,
  },
  SIGNER: {
    type: 'signer',
    title: 'Member Signature',
    stepLabel: 'Add Boost & Sign',
    finish: true,
    isUserStep: true,
  },
};

export const STEPS = {
  MINION_BOOST: {
    DISPLAY: COMMON_STEPS.DISPLAY,
    STEP1: {
      type: 'summoner',
      title: { type: 'minionName' },
      next: { type: 'awaitTx', then: 'STEP2', ctaText: 'Summon' },
      stepLabel: 'Deploy Minion',
      isUserStep: true,
    },
    STEP2: COMMON_STEPS.SIGNER,
  },
  ADD_DISCORD: {
    DISPLAY: COMMON_STEPS.DISPLAY,
    STEP1: {
      type: 'discordForm',
      next: 'STEP2',
      stepLabel: 'Setup Discord Bot',
      isUserStep: true,
    },
    STEP2: COMMON_STEPS.SIGNER,
  },
  ADD_DISCOURSE: {
    DISPLAY: COMMON_STEPS.DISPLAY,
    STEP1: {
      type: 'boostMetaForm',
      form: BOOST_FORMS.DISCOURSE_FORUM_COLOR,
      next: 'STEP2',
      stepLabel: 'Choose Forum Color',
      isUserStep: true,
    },
    STEP2: COMMON_STEPS.SIGNER,
  },
  ADD_WRAP_N_ZAP: {
    DISPLAY: COMMON_STEPS.DISPLAY,
    STEP1: {
      type: 'form',
      form: BOOST_FORMS.WRAP_N_ZAP_LAUNCH,
      next: { type: 'awaitTx', then: 'STEP2', ctaText: 'Deploy' },
      stepLabel: 'Deploy Wrap n Zap',
      isUserStep: true,
    },
    STEP2: COMMON_STEPS.SIGNER,
  },
  BASIC_BOOST: {
    DISPLAY: COMMON_STEPS.DISPLAY,
    STEP1: COMMON_STEPS.SIGNER,
  },
  SUMMON_ANY: {
    STEP1: {
      start: true,
      type: 'form',
      next: 'STEP2',
      form: CORE_FORMS.SUMMON_MINION_SELECTOR,
      isUserStep: true,
      stepLabel: 'Choose a Minion',
    },
    STEP2: {
      type: 'summoner',
      finish: true,
      isUserStep: true,
      title: 'Summon',
      stepLabel: 'Summon',
      next: { type: 'awaitTx', then: 'FINISH', ctaText: 'Summon' },
    },
  },
  ADD_SPAM_FILTER: {
    DISPLAY: COMMON_STEPS.DISPLAY,
    STEP1: {
      type: 'boostMetaForm',
      form: BOOST_FORMS.SPAM_FILTER,
      next: 'STEP2',
      stepLabel: 'Select Filter Parameter',
      isUserStep: true,
    },
    STEP2: { ...COMMON_STEPS.SIGNER, daoRefetch: true },
  },
};

export const BOOSTS = {
  OLD_DEV_SUITE: {
    id: 'OLD_DEV_SUITE',
    boostContent: CONTENT.OLD_DEV_SUITE,
    minionData: MINIONS[MINION_TYPES.VANILLA],
    categories: ['devTools'],
    steps: STEPS.MINION_BOOST,
    playlist: BOOST_PLAYLISTS.OLD_DEV_SUITE,
    settings: 'none',
    networks: MINIONS[MINION_TYPES.VANILLA].networks,
    cost: 'free',
  },
  NIFTY_DEV_SUITE: {
    id: 'NIFTY_DEV_SUITE',
    boostContent: CONTENT.NIFTY_DEV_SUITE,
    minionData: MINIONS[MINION_TYPES.NIFTY],
    categories: ['devTools'],
    steps: STEPS.MINION_BOOST,
    playlist: BOOST_PLAYLISTS.NIFTY_DEV_SUITE,
    networks: MINIONS[MINION_TYPES.NIFTY].networks,
    cost: 'free',
    settings: 'none',
  },
  SAFE_DEV_SUITE: {
    id: 'SAFE_DEV_SUITE',
    boostContent: CONTENT.SAFE_DEV_SUITE,
    minionData: MINIONS[MINION_TYPES.SAFE],
    categories: ['devTools'],
    steps: STEPS.MINION_BOOST,
    playlist: BOOST_PLAYLISTS.SAFE_DEV_SUITE,
    networks: MINIONS[MINION_TYPES.SAFE].networks,
    cost: 'free',
    settings: 'none',
  },
  RARIBLE: {
    id: 'RARIBLE',
    boostContent: CONTENT.RARIBLE,
    minionData: MINIONS[MINION_TYPES.SAFE],
    categories: ['nft'],
    steps: STEPS.MINION_BOOST,
    playlist: BOOST_PLAYLISTS.RARIBLE,
    networks: { '0x4': true, '0x1': true },
    cost: 'free',
    settings: 'none',
  },
  NFT_TRIBUTE: {
    id: 'NFT_TRIBUTE',
    boostContent: CONTENT.NFT_TRIBUTE,
    categories: ['nft', 'membership'],
    minionData: MINIONS[MINION_TYPES.SAFE],
    steps: STEPS.MINION_BOOST,
    playlist: BOOST_PLAYLISTS.NFT_TRIBUTE,
    networks: {
      '0x4': true,
      '0x1': true,
      '0x64': true,
      '0x89': true,
      '0xa4b1': true,
    },
    cost: 'free',
    settings: 'none',
  },
  BANK_BUYOUT: {
    id: 'BANK_BUYOUT',
    boostContent: CONTENT.BANK_BUYOUT,
    categories: ['nft', 'membership'],
    minionData: MINIONS[MINION_TYPES.SAFE],
    steps: STEPS.MINION_BOOST,
    playlist: BOOST_PLAYLISTS.BANK_BUYOUT,
    networks: {
      '0x4': true,
      '0x1': true,
      '0x64': true,
      '0x89': true,
      '0xa4b1': true,
    },
    cost: 'free',
    settings: 'none',
  },
  NIFTY_INK: {
    id: 'NIFTY_INK',
    boostContent: CONTENT.NIFTY_INK,
    minionData: MINIONS[MINION_TYPES.NIFTY],
    categories: ['nft'],
    steps: STEPS.MINION_BOOST,
    networks: { '0x64': true },
    playlist: BOOST_PLAYLISTS.NIFTY_INK,
    cost: 'free',
    settings: 'none',
  },
  SUPERFLUID: {
    id: 'SUPERFLUID',
    boostContent: CONTENT.SUPERFLUID,
    minionData: MINIONS[MINION_TYPES.SUPERFLUID],
    categories: ['payments'],
    steps: STEPS.MINION_BOOST,
    networks: MINIONS[MINION_TYPES.SUPERFLUID].networks,
    playlist: BOOST_PLAYLISTS.SUPERFLUID,
    cost: 'free',
    settings: 'none',
  },
  DISCORD: {
    id: 'DISCORD',
    steps: STEPS.ADD_DISCORD,
    boostContent: CONTENT.DISCORD,
    categories: ['community'],
    networks: 'all',
    cost: 'free',
    metaFields: ['channelId', 'type', 'active', 'actions'],
    settings: {
      type: 'internalLink',
      appendToDaoPath: 'settings/notifications',
    },
  },
  MINTGATE: {
    id: 'MINTGATE',
    steps: STEPS.BASIC_BOOST,
    boostContent: CONTENT.MINTGATE,
    categories: ['community'],
    networks: 'all',
    cost: 'free',
    settings: { type: 'internalLink', appendToDaoPath: 'boost/mintgate' },
  },
  DISCOURSE: {
    id: 'DISCOURSE',
    steps: STEPS.ADD_DISCOURSE,
    boostContent: CONTENT.DISCOURSE,
    categories: ['community'],
    networks: 'all',
    cost: 'free',
    metaFields: ['name', 'color', 'autoProposal'],
    settings: { type: 'internalLink', appendToDaoPath: 'settings/discourse' },
  },
  WRAP_N_ZAP: {
    id: 'WRAP_N_ZAP',
    steps: STEPS.ADD_WRAP_N_ZAP,
    boostContent: CONTENT.WRAP_N_ZAP,
    categories: ['payments'],
    networks: 'all',
    cost: 'free',
    settings: {
      type: 'internalLink',
      appendToDaoPath: 'settings',
    },
  },
  DAO_BOOKS: {
    id: 'DAO_BOOKS',
    steps: STEPS.BASIC_BOOST,
    boostContent: CONTENT.DAO_BOOKS,
    categories: ['finance'],
    networks: 'all',
    cost: 'free',
    settings: 'none',
  },
  SPAM_FILTER: {
    id: 'SPAM_FILTER',
    steps: STEPS.ADD_SPAM_FILTER,
    boostContent: CONTENT.SPAM_FILTER,
    categories: ['devTools'],
    networks: 'all',
    cost: 'free',
    metaFields: ['paymentRequested', 'paymentToken', 'membersOnly'],
    settings: { type: 'internalLink', appendToDaoPath: 'settings/spam' },
  },
  DISPERSE: {
    id: 'DISPERSE',
    steps: STEPS.MINION_BOOST,
    playlist: BOOST_PLAYLISTS.DISPERSE,
    minionData: MINIONS[MINION_TYPES.SAFE],
    boostContent: CONTENT.DISPERSE,
    categories: ['payments'],
    networks: 'all',
    cost: 'free',
    settings: 'none',
  },
  // SNAPSHOT: {
  //   id: 'SNAPSHOT',
  //   boostContent: CONTENT.SNAPSHOT,
  //   steps: STEPS.ADD_SNAPSHOT,
  //   categories: ['governance'],
  //   networks: 'all',
  //   cost: 'free',
  // },
};

export const allBoosts = {
  name: 'Boosts',
  id: 'all',
  boosts: Object.values(BOOSTS).map(boost => boost.id),
};
const categoryStarter = [
  { name: 'Payments', id: 'payments' },
  { name: 'Community', id: 'community' },
  { name: 'Governance', id: 'governance' },
  { name: 'NFTs', id: 'nft' },
  { name: 'Dev Tools', id: 'devTools' },
  { name: 'Membership', id: 'membership' },
  { name: 'Finance', id: 'finance' },
];
export const categories = categoryStarter.map(cat => ({
  ...cat,
  boosts: Object.values(BOOSTS)
    .filter(boost => boost.categories.includes(cat.id) && !boost.dev)
    .map(cat => cat.id),
}));

export const notificationBoostContent = {
  actions: [
    {
      id: 'votingPeriod',
      label: 'Proposal Ready for Voting',
    },
    {
      id: 'newProposal',
      label: 'Proposal Needs Sponsor',
    },
    {
      id: 'proposalClosing',
      label: 'Proposal Needs a Vote',
      comingSoon: true,
    },
    {
      id: 'newMember',
      label: 'New Member is Official',
      comingSoon: true,
    },
    {
      id: 'rageQuit',
      label: 'New Ragequit',
    },
  ],
  channels: [
    { name: 'discord' },
    { name: 'telegram', comingSoon: true },
    { name: 'email', comingSoon: true },
    { name: 'twitter', comingSoon: true },
  ],
  inviteLinks: {
    discord:
      'https://discord.com/api/oauth2/authorize?client_id=736999684471521321&permissions=23552&scope=bot',
  },
};

export const DAO_BOOKS_HOST = 'https://books.daohaus.club/#';
