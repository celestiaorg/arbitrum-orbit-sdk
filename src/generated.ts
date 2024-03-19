//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ArbOwner
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000070)
 */
export const arbOwnerABI = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'method', internalType: 'bytes4', type: 'bytes4', indexed: true },
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'OwnerActs',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'addChainOwner',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllChainOwners',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getInfraFeeAccount',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getNetworkFeeAccount',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'isChainOwner',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'maxWeiToRelease', internalType: 'uint256', type: 'uint256' }],
    name: 'releaseL1PricerSurplusFunds',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'ownerToRemove', internalType: 'address', type: 'address' }],
    name: 'removeChainOwner',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'newVersion', internalType: 'uint64', type: 'uint64' },
      { name: 'timestamp', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'scheduleArbOSUpgrade',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'cap', internalType: 'uint64', type: 'uint64' }],
    name: 'setAmortizedCostCapBips',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newInfraFeeAccount', internalType: 'address', type: 'address' }],
    name: 'setInfraFeeAccount',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'inertia', internalType: 'uint64', type: 'uint64' }],
    name: 'setL1BaseFeeEstimateInertia',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'pricePerUnit', internalType: 'uint256', type: 'uint256' }],
    name: 'setL1PricePerUnit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'equilibrationUnits', internalType: 'uint256', type: 'uint256' }],
    name: 'setL1PricingEquilibrationUnits',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'inertia', internalType: 'uint64', type: 'uint64' }],
    name: 'setL1PricingInertia',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'weiPerUnit', internalType: 'uint64', type: 'uint64' }],
    name: 'setL1PricingRewardRate',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'setL1PricingRewardRecipient',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'priceInWei', internalType: 'uint256', type: 'uint256' }],
    name: 'setL2BaseFee',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'sec', internalType: 'uint64', type: 'uint64' }],
    name: 'setL2GasBacklogTolerance',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'sec', internalType: 'uint64', type: 'uint64' }],
    name: 'setL2GasPricingInertia',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'limit', internalType: 'uint64', type: 'uint64' }],
    name: 'setMaxTxGasLimit',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'priceInWei', internalType: 'uint256', type: 'uint256' }],
    name: 'setMinimumL2BaseFee',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newNetworkFeeAccount', internalType: 'address', type: 'address' }],
    name: 'setNetworkFeeAccount',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'cost', internalType: 'int64', type: 'int64' }],
    name: 'setPerBatchGasCharge',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'limit', internalType: 'uint64', type: 'uint64' }],
    name: 'setSpeedLimit',
    outputs: [],
  },
] as const;

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000070)
 */
export const arbOwnerAddress = {
  421614: '0x0000000000000000000000000000000000000070',
} as const;

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000070)
 */
export const arbOwnerConfig = { address: arbOwnerAddress, abi: arbOwnerABI } as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ArbOwnerPublic
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x000000000000000000000000000000000000006b)
 */
export const arbOwnerPublicABI = [
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getAllChainOwners',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getInfraFeeAccount',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'getNetworkFeeAccount',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'isChainOwner',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
] as const;

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x000000000000000000000000000000000000006b)
 */
export const arbOwnerPublicAddress = {
  421614: '0x000000000000000000000000000000000000006b',
} as const;

/**
 * [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x000000000000000000000000000000000000006b)
 */
export const arbOwnerPublicConfig = {
  address: arbOwnerPublicAddress,
  abi: arbOwnerPublicABI,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20ABI = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'value', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ type: 'uint8' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'addedValue', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ type: 'bool' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'subtractedValue', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ type: 'bool' }],
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RollupCreator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x90d68b056c411015eae3ec0b98ad94e2c91419f1)
 * -
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Base Sepolia Blockscout__](https://base-sepolia.blockscout.com/address/0x1Bb8ADd5e878b12Fa37756392642eB94C53A1Cf4)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x79751B011BCc20F413a2c4E3AF019b6E2a9738B9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x78f8B2941ddE5a8A312814Ebd29c2E2A36f25E91)
 */
export const rollupCreatorABI = [
  { stateMutability: 'nonpayable', type: 'constructor', inputs: [] },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'rollupAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'nativeToken', internalType: 'address', type: 'address', indexed: true },
      { name: 'inboxAddress', internalType: 'address', type: 'address', indexed: false },
      { name: 'outbox', internalType: 'address', type: 'address', indexed: false },
      { name: 'rollupEventInbox', internalType: 'address', type: 'address', indexed: false },
      { name: 'challengeManager', internalType: 'address', type: 'address', indexed: false },
      { name: 'adminProxy', internalType: 'address', type: 'address', indexed: false },
      { name: 'sequencerInbox', internalType: 'address', type: 'address', indexed: false },
      { name: 'bridge', internalType: 'address', type: 'address', indexed: false },
      { name: 'upgradeExecutor', internalType: 'address', type: 'address', indexed: false },
      { name: 'validatorUtils', internalType: 'address', type: 'address', indexed: false },
      { name: 'validatorWalletCreator', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'RollupCreated',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'TemplatesUpdated' },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'bridgeCreator',
    outputs: [{ name: '', internalType: 'contract BridgeCreator', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'challengeManagerTemplate',
    outputs: [{ name: '', internalType: 'contract IChallengeManager', type: 'address' }],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    inputs: [
      {
        name: 'deployParams',
        internalType: 'struct RollupCreator.RollupDeploymentParams',
        type: 'tuple',
        components: [
          {
            name: 'config',
            internalType: 'struct Config',
            type: 'tuple',
            components: [
              { name: 'confirmPeriodBlocks', internalType: 'uint64', type: 'uint64' },
              { name: 'extraChallengeTimeBlocks', internalType: 'uint64', type: 'uint64' },
              { name: 'stakeToken', internalType: 'address', type: 'address' },
              { name: 'baseStake', internalType: 'uint256', type: 'uint256' },
              { name: 'wasmModuleRoot', internalType: 'bytes32', type: 'bytes32' },
              { name: 'owner', internalType: 'address', type: 'address' },
              { name: 'loserStakeEscrow', internalType: 'address', type: 'address' },
              { name: 'chainId', internalType: 'uint256', type: 'uint256' },
              { name: 'chainConfig', internalType: 'string', type: 'string' },
              { name: 'genesisBlockNum', internalType: 'uint64', type: 'uint64' },
              {
                name: 'sequencerInboxMaxTimeVariation',
                internalType: 'struct ISequencerInbox.MaxTimeVariation',
                type: 'tuple',
                components: [
                  { name: 'delayBlocks', internalType: 'uint256', type: 'uint256' },
                  { name: 'futureBlocks', internalType: 'uint256', type: 'uint256' },
                  { name: 'delaySeconds', internalType: 'uint256', type: 'uint256' },
                  { name: 'futureSeconds', internalType: 'uint256', type: 'uint256' },
                ],
              },
            ],
          },
          { name: 'validators', internalType: 'address[]', type: 'address[]' },
          { name: 'maxDataSize', internalType: 'uint256', type: 'uint256' },
          { name: 'nativeToken', internalType: 'address', type: 'address' },
          { name: 'deployFactoriesToL2', internalType: 'bool', type: 'bool' },
          { name: 'maxFeePerGasForRetryables', internalType: 'uint256', type: 'uint256' },
          { name: 'batchPosters', internalType: 'address[]', type: 'address[]' },
          { name: 'batchPosterManager', internalType: 'address', type: 'address' },
        ],
      },
    ],
    name: 'createRollup',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'l2FactoriesDeployer',
    outputs: [{ name: '', internalType: 'contract DeployHelper', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'osp',
    outputs: [{ name: '', internalType: 'contract IOneStepProofEntry', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rollupAdminLogic',
    outputs: [{ name: '', internalType: 'contract IRollupAdmin', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'rollupUserLogic',
    outputs: [{ name: '', internalType: 'contract IRollupUser', type: 'address' }],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: '_bridgeCreator', internalType: 'contract BridgeCreator', type: 'address' },
      { name: '_osp', internalType: 'contract IOneStepProofEntry', type: 'address' },
      {
        name: '_challengeManagerLogic',
        internalType: 'contract IChallengeManager',
        type: 'address',
      },
      { name: '_rollupAdminLogic', internalType: 'contract IRollupAdmin', type: 'address' },
      { name: '_rollupUserLogic', internalType: 'contract IRollupUser', type: 'address' },
      { name: '_upgradeExecutorLogic', internalType: 'contract IUpgradeExecutor', type: 'address' },
      { name: '_validatorUtils', internalType: 'address', type: 'address' },
      { name: '_validatorWalletCreator', internalType: 'address', type: 'address' },
      { name: '_l2FactoriesDeployer', internalType: 'contract DeployHelper', type: 'address' },
    ],
    name: 'setTemplates',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'upgradeExecutorLogic',
    outputs: [{ name: '', internalType: 'contract IUpgradeExecutor', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'validatorUtils',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [],
    name: 'validatorWalletCreator',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  { stateMutability: 'payable', type: 'receive' },
] as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x90d68b056c411015eae3ec0b98ad94e2c91419f1)
 * -
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Base Sepolia Blockscout__](https://base-sepolia.blockscout.com/address/0x1Bb8ADd5e878b12Fa37756392642eB94C53A1Cf4)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x79751B011BCc20F413a2c4E3AF019b6E2a9738B9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x78f8B2941ddE5a8A312814Ebd29c2E2A36f25E91)
 */
export const rollupCreatorAddress = {
  1: '0x90D68B056c411015eaE3EC0b98AD94E2C91419F1',
  1337: '0x596eAbE0291D4cdAfAC7ef53D16C92Bf6922b5e0',
  17000: '0xB512078282F462Ba104231ad856464Ceb0a7747e',
  42161: '0x9CAd81628aB7D8e239F1A5B497313341578c5F71',
  42170: '0x9CAd81628aB7D8e239F1A5B497313341578c5F71',
  84532: '0x1Bb8ADd5e878b12Fa37756392642eB94C53A1Cf4',
  333333: '0x0000000000000000000000000000000000000000',
  412346: '0x3BaF9f08bAD68869eEdEa90F2Cc546Bd80F1A651',
  421614: '0x79751B011BCc20F413a2c4E3AF019b6E2a9738B9',
  11155111: '0x78f8B2941ddE5a8A312814Ebd29c2E2A36f25E91',
} as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x90d68b056c411015eae3ec0b98ad94e2c91419f1)
 * -
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x9CAd81628aB7D8e239F1A5B497313341578c5F71)
 * - [__View Contract on Base Sepolia Blockscout__](https://base-sepolia.blockscout.com/address/0x1Bb8ADd5e878b12Fa37756392642eB94C53A1Cf4)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0x79751B011BCc20F413a2c4E3AF019b6E2a9738B9)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x78f8B2941ddE5a8A312814Ebd29c2E2A36f25E91)
 */
export const rollupCreatorConfig = {
  address: rollupCreatorAddress,
  abi: rollupCreatorABI,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenBridgeCreator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x60D9A46F24D5a35b95A78Dd3E793e55D94EE0660)
 * -
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x2f5624dc8800dfA0A82AC03509Ef8bb8E7Ac000e)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x8B9D9490a68B1F16ac8A21DdAE5Fd7aB9d708c14)
 * - [__View Contract on Base Sepolia Blockscout__](https://base-sepolia.blockscout.com/address/0xAa3b8B63cCCa3c98b948FD1d6eD875d378dE2C6c)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xaAe3A04931345Df5AC6e784bB6bDeb29B1fF0286)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xbe2876170971Ed84685d18BC910F891E2B9Adf02)
 */
export const tokenBridgeCreatorABI = [
  {
    stateMutability: 'payable',
    type: 'constructor',
    inputs: [
      { name: '_logic', internalType: 'address', type: 'address' },
      { name: 'admin_', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousAdmin', internalType: 'address', type: 'address', indexed: false },
      { name: 'newAdmin', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'beacon', internalType: 'address', type: 'address', indexed: true }],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address', indexed: true }],
    name: 'Upgraded',
  },
  { stateMutability: 'payable', type: 'fallback' },
  { stateMutability: 'payable', type: 'receive' },
] as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x60D9A46F24D5a35b95A78Dd3E793e55D94EE0660)
 * -
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x2f5624dc8800dfA0A82AC03509Ef8bb8E7Ac000e)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x8B9D9490a68B1F16ac8A21DdAE5Fd7aB9d708c14)
 * - [__View Contract on Base Sepolia Blockscout__](https://base-sepolia.blockscout.com/address/0xAa3b8B63cCCa3c98b948FD1d6eD875d378dE2C6c)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xaAe3A04931345Df5AC6e784bB6bDeb29B1fF0286)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xbe2876170971Ed84685d18BC910F891E2B9Adf02)
 */
export const tokenBridgeCreatorAddress = {
  1: '0x60D9A46F24D5a35b95A78Dd3E793e55D94EE0660',
  1337: '0x54B4D4e578E10178a6cA602bdb6df0F213296Af4',
  17000: '0xac890ED9bC2494C053cE701F138958df95966d94',
  42161: '0x2f5624dc8800dfA0A82AC03509Ef8bb8E7Ac000e',
  42170: '0x8B9D9490a68B1F16ac8A21DdAE5Fd7aB9d708c14',
  84532: '0xAa3b8B63cCCa3c98b948FD1d6eD875d378dE2C6c',
  333333: '0x0000000000000000000000000000000000000000',
  412346: '0x38F35Af53bF913c439eaB06A367e09D6eb253492',
  421614: '0xaAe3A04931345Df5AC6e784bB6bDeb29B1fF0286',
  11155111: '0xbe2876170971Ed84685d18BC910F891E2B9Adf02',
} as const;

/**
 * - [__View Contract on Ethereum Etherscan__](https://etherscan.io/address/0x60D9A46F24D5a35b95A78Dd3E793e55D94EE0660)
 * -
 * -
 * - [__View Contract on Arbitrum One Arbiscan__](https://arbiscan.io/address/0x2f5624dc8800dfA0A82AC03509Ef8bb8E7Ac000e)
 * - [__View Contract on Arbitrum Nova Arbiscan__](https://nova.arbiscan.io/address/0x8B9D9490a68B1F16ac8A21DdAE5Fd7aB9d708c14)
 * - [__View Contract on Base Sepolia Blockscout__](https://base-sepolia.blockscout.com/address/0xAa3b8B63cCCa3c98b948FD1d6eD875d378dE2C6c)
 * - [__View Contract on Arbitrum Sepolia Blockscout__](https://sepolia-explorer.arbitrum.io/address/0xaAe3A04931345Df5AC6e784bB6bDeb29B1fF0286)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xbe2876170971Ed84685d18BC910F891E2B9Adf02)
 */
export const tokenBridgeCreatorConfig = {
  address: tokenBridgeCreatorAddress,
  abi: tokenBridgeCreatorABI,
} as const;
