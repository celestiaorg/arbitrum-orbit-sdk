import { erc, etherscan } from '@wagmi/cli/plugins';
import { hashMessage } from 'viem';
import dotenv from 'dotenv';

import { ParentChainId } from './src';
import {
  mainnet,
  arbitrumOne,
  arbitrumNova,
  sepolia,
  holesky,
  arbitrumSepolia,
  baseSepolia,
  nitroTestnodeL1,
  nitroTestnodeL2,
  nitroTestnodeL3,
} from './src/chains';

dotenv.config();

function loadApiKey(key: string): string {
  const apiKey = process.env[key];

  if (typeof apiKey === 'undefined' || apiKey.length === 0) {
    throw new Error(`Missing the ${key} environment variable!`);
  }

  return apiKey;
}

function sleep(ms: number = 3_000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const arbiscanApiKey = loadApiKey('ARBISCAN_API_KEY');
const basescan = loadApiKey('BASESCAN_API_KEY');
const etherscanApiKey = loadApiKey('ETHERSCAN_API_KEY');

const blockExplorerApiUrls: Record<ParentChainId, { url: string; apiKey: string }> = {
  // mainnet
  [mainnet.id]: {
    url: 'https://api.etherscan.io/api',
    apiKey: etherscanApiKey,
  },
  [arbitrumOne.id]: {
    url: 'https://api.arbiscan.io/api',
    apiKey: arbiscanApiKey,
  },
  [arbitrumNova.id]: {
    url: 'https://api-nova.arbiscan.io/api',
    apiKey: arbiscanApiKey,
  },
  // testnet
  [sepolia.id]: {
    url: 'https://api-sepolia.etherscan.io/api',
    apiKey: etherscanApiKey,
  },
  [holesky.id]: {
    url: 'https://api-holesky.etherscan.io/api',
    apiKey: etherscanApiKey,
  },
  [arbitrumSepolia.id]: {
    url: 'https://api-sepolia.arbiscan.io/api',
    apiKey: arbiscanApiKey,
  },
  [baseSepolia.id]: {
    url: 'https://api-sepolia.basescan.org/api',
    apiKey: arbiscanApiKey,
  },
  // local nitro-testnode / fine to omit these as we skip abi fetch
  [nitroTestnodeL1.id]: { url: '', apiKey: '' },
  [nitroTestnodeL2.id]: { url: '', apiKey: '' },
  [nitroTestnodeL3.id]: { url: '', apiKey: '' },
};

export async function fetchAbi(chainId: ParentChainId, address: `0x${string}`) {
  const { url, apiKey } = blockExplorerApiUrls[chainId];

  const responseJson = await (
    await fetch(
      `${url}?module=contract&action=getabi&format=raw&address=${address}&apikey=${apiKey}`,
    )
  ).json();

  if (responseJson.message === 'NOTOK') {
    throw new Error(`Failed to fetch ABI for ${chainId}: ${responseJson.result}`);
  }

  return responseJson;
}

type ContractConfig = {
  name: string;
  version?: string;
  address: Record<ParentChainId, `0x${string}`> | `0x${string}`;
};

const contracts: ContractConfig[] = [
  {
    name: 'RollupCreator',
    version: '1.1.0',
    address: {
      // mainnet
      [mainnet.id]: '0x90d68b056c411015eae3ec0b98ad94e2c91419f1',
      [arbitrumOne.id]: '0x9CAd81628aB7D8e239F1A5B497313341578c5F71',
      [arbitrumNova.id]: '0x9CAd81628aB7D8e239F1A5B497313341578c5F71',
      // testnet
      [holesky.id]: '0xB512078282F462Ba104231ad856464Ceb0a7747e',
      [sepolia.id]: '0x78f8B2941ddE5a8A312814Ebd29c2E2A36f25E91',
      [arbitrumSepolia.id]: '0x79751B011BCc20F413a2c4E3AF019b6E2a9738B9',
      [baseSepolia.id]: '0x1Bb8ADd5e878b12Fa37756392642eB94C53A1Cf4',
      // local nitro-testnode (on "release" branch with --tokenbridge --l3node --l3-token-bridge flags)
      [nitroTestnodeL1.id]: '0x596eabe0291d4cdafac7ef53d16c92bf6922b5e0',
      [nitroTestnodeL2.id]: '0x3BaF9f08bAD68869eEdEa90F2Cc546Bd80F1A651',
      [nitroTestnodeL3.id]: '0x0000000000000000000000000000000000000000',
    },
  },
  {
    name: 'TokenBridgeCreator',
    version: '1.2.0',
    address: {
      // mainnet
      [mainnet.id]: '0x60D9A46F24D5a35b95A78Dd3E793e55D94EE0660',
      [arbitrumOne.id]: '0x2f5624dc8800dfA0A82AC03509Ef8bb8E7Ac000e',
      [arbitrumNova.id]: '0x8B9D9490a68B1F16ac8A21DdAE5Fd7aB9d708c14',
      // testnet
      [holesky.id]: '0xac890ED9bC2494C053cE701F138958df95966d94',
      [sepolia.id]: '0xbe2876170971Ed84685d18BC910F891E2B9Adf02',
      [arbitrumSepolia.id]: '0xaAe3A04931345Df5AC6e784bB6bDeb29B1fF0286',
      [baseSepolia.id]: '0xAa3b8B63cCCa3c98b948FD1d6eD875d378dE2C6c',
      // local nitro-testnode (on "release" branch with --tokenbridge --l3node --l3-token-bridge flags)
      [nitroTestnodeL1.id]: '0x54B4D4e578E10178a6cA602bdb6df0F213296Af4',
      [nitroTestnodeL2.id]: '0x38f35af53bf913c439eab06a367e09d6eb253492',
      [nitroTestnodeL3.id]: '0x0000000000000000000000000000000000000000',
    },
  },
  {
    name: 'ArbOwner',
    address: '0x0000000000000000000000000000000000000070',
  },
  {
    name: 'ArbOwnerPublic',
    address: '0x000000000000000000000000000000000000006b',
  },
];

function allEqual<T>(array: T[]) {
  return array.every((value) => value === array[0]);
}

export async function assertContractAbisMatch(contract: ContractConfig) {
  // skip check when single address is provided
  if (typeof contract.address === 'string') {
    console.log(`- ${contract.name} ✔`);
    return;
  }

  console.log(`- ${contract.name}`);

  const abiHashes = await Promise.all(
    Object.entries(contract.address)
      // don't fetch abis for testnode
      .filter(([chainIdString]) => {
        const chainId = Number(chainIdString);
        return (
          chainId !== nitroTestnodeL1.id &&
          chainId !== nitroTestnodeL2.id &&
          chainId !== nitroTestnodeL3.id &&
          chainId !== baseSepolia.id &&
          chainId !== arbitrumSepolia.id
        );
      })
      // fetch abis for all chains and hash them
      .map(async ([chainId, address]) => {
        const abi = await fetchAbi(Number(chainId) as ParentChainId, address);
        const abiHash = hashMessage(JSON.stringify(abi));

        console.log(`- ${abiHash} (${chainId})`);

        return abiHash;
      }),
  );

  // make sure all abis hashes are the same
  if (!allEqual(abiHashes)) {
    throw new Error(`- ${contract.name}`);
  }

  console.log(`- ${contract.name} ✔\n`);
}

export default async function () {
  console.log(`Checking if contracts match by comparing hashed JSON ABIs.\n`);

  // for (const contract of contracts) {
  //   await assertContractAbisMatch(contract);
  //   await sleep(); // sleep to avoid rate limiting
  // }

  return {
    out: 'src/generated.ts',
    plugins: [
      erc({
        20: true,
        721: false,
        4626: false,
      }),
      etherscan({
        chainId: arbitrumSepolia.id,
        apiKey: arbiscanApiKey,
        contracts,
        cacheDuration: 0,
      }),
    ],
  };
}
