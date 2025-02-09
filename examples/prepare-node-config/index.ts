import { Chain, createPublicClient, http } from 'viem';
import { arbitrumSepolia } from 'viem/chains';
import {
  ChainConfig,
  createRollupPrepareTransaction,
  createRollupPrepareTransactionReceipt,
  prepareNodeConfig,
} from '@arbitrum/orbit-sdk';

import { writeFile } from 'fs/promises';

function getRpcUrl(chain: Chain) {
  return chain.rpcUrls.default.http[0];
}

// set the parent chain and create a public client for it
const parentChain = arbitrumSepolia;
const parentChainPublicClient = createPublicClient({
  chain: parentChain,
  transport: http(),
});

async function main() {
  // tx hash for the transaction to create rollup
  const txHash = '0x22bb24020ee839e4a266960aa73c6bf5b02621e2de3f2a755c9f2869014140d7';

  // get the transaction
  const tx = createRollupPrepareTransaction(
    await parentChainPublicClient.getTransaction({ hash: txHash }),
  );

  // get the transaction receipt
  const txReceipt = createRollupPrepareTransactionReceipt(
    await parentChainPublicClient.getTransactionReceipt({ hash: txHash }),
  );

  // get the chain config from the transaction inputs
  const chainConfig: ChainConfig = JSON.parse(tx.getInputs()[0].config.chainConfig);
  // get the core contracts from the transaction receipt
  const coreContracts = txReceipt.getCoreContracts();

  // prepare the node config
  const nodeConfig = prepareNodeConfig({
    chainName: 'My Orbit Chain',
    chainConfig,
    coreContracts,
    batchPosterPrivateKey: 'INSERT_BATCH_POSTER_PRIVATE_KEY_HERE',
    validatorPrivateKey: 'INSERT_VALIDATOR_PRIVATE_KEY_HERE',
    parentChainId: parentChain.id,
    parentChainRpcUrl: getRpcUrl(parentChain),
    authToken: ''
  });

  await writeFile('node-config.json', JSON.stringify(nodeConfig, null, 2));
  console.log(`Node config written to "node-config.json"`);
}

main();
