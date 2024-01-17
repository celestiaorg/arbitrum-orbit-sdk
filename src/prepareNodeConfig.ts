import {
  NodeConfig,
  NodeConfigChainInfoJson,
  NodeConfigDataAvailabilityRpcAggregatorBackendsJson,
  BackendsData,
} from './types/NodeConfig';
import { ChainConfig } from './types/ChainConfig';
import { CoreContracts } from './types/CoreContracts';
import { ParentChainId, validParentChainId } from './types/ParentChain';
import { sepolia, arbitrumSepolia, nitroTestnodeL1, nitroTestnodeL2 } from './chains';

function sanitizePrivateKey(privateKey: string) {
  return privateKey.startsWith('0x') ? privateKey.slice(2) : privateKey;
}

function stringifyInfoJson(infoJson: NodeConfigChainInfoJson): string {
  return JSON.stringify(infoJson);
}

function stringifyBackendsJson(
  backendsJson: NodeConfigDataAvailabilityRpcAggregatorBackendsJson,
): string {
  return JSON.stringify(backendsJson);
}

function parentChainIsArbitrum(parentChainId: ParentChainId): boolean {
  // doing switch here to make sure it's exhaustive when checking against `ParentChainId`
  switch (parentChainId) {
    case sepolia.id:
    case nitroTestnodeL1.id:
      return false;

    case arbitrumSepolia.id:
    case nitroTestnodeL2.id:
      return true;
  }
}

export function prepareNodeConfig({
  chainName,
  chainConfig,
  coreContracts,
  batchPosterPrivateKey,
  validatorPrivateKey,
  parentChainId,
  parentChainRpcUrl,
  assumedHonest,
  backendsData,
  onlineUrlList
}: {
  chainName: string;
  chainConfig: ChainConfig;
  coreContracts: CoreContracts;
  batchPosterPrivateKey: string;
  validatorPrivateKey: string;
  parentChainId: number;
  parentChainRpcUrl: string;
  assumedHonest?: number;
  backendsData?: BackendsData;
  onlineUrlList?: string;
}): NodeConfig {
  if (!validParentChainId(parentChainId)) {
    throw new Error(`[prepareNodeConfig] invalid parent chain id: ${parentChainId}`);
  }

  const config: NodeConfig = {
    'chain': {
      'info-json': stringifyInfoJson([
        {
          'chain-id': chainConfig.chainId,
          'parent-chain-id': parentChainId,
          'parent-chain-is-arbitrum': parentChainIsArbitrum(parentChainId),
          'chain-name': chainName,
          'chain-config': chainConfig,
          'rollup': {
            'bridge': coreContracts.bridge,
            'inbox': coreContracts.inbox,
            'sequencer-inbox': coreContracts.sequencerInbox,
            'rollup': coreContracts.rollup,
            'validator-utils': coreContracts.validatorUtils,
            'validator-wallet-creator': coreContracts.validatorWalletCreator,
            'deployed-at': coreContracts.deployedAtBlockNumber,
          },
        },
      ]),
      'name': chainName,
    },
    'parent-chain': {
      connection: {
        url: parentChainRpcUrl,
      },
    },
    'http': {
      addr: '0.0.0.0',
      port: 8449,
      vhosts: '*',
      corsdomain: '*',
      api: ['eth', 'net', 'web3', 'arb', 'debug'],
    },
    'node': {
      'forwarding-target': '',
      'sequencer': {
        'max-tx-data-size': 85000,
        'enable': true,
        'dangerous': {
          'no-coordinator': true,
        },
        'max-block-speed': '250ms',
      },
      'delayed-sequencer': {
        enable: true,
      },
      'batch-poster': {
        'max-size': 90000,
        'enable': true,
        'parent-chain-wallet': {
          'private-key': sanitizePrivateKey(batchPosterPrivateKey),
        },
      },
      'staker': {
        'enable': true,
        'strategy': 'MakeNodes',
        'parent-chain-wallet': {
          'private-key': sanitizePrivateKey(validatorPrivateKey),
        },
      },
      'caching': {
        archive: true,
      },
    },
  };

  if (chainConfig.arbitrum.DataAvailabilityCommittee) {
    let backends: NodeConfigDataAvailabilityRpcAggregatorBackendsJson;
    let restUrls: string[] = ['http://localhost:9876'];
    if (assumedHonest !== undefined && backendsData && backendsData.length > 0) {
      backends = backendsData.map((backend, index) => ({
        url: backend.urlRpc,
        pubkey: backend.pubkey,
        signermask: 1 << index, // 2^n
      }));
      restUrls = backendsData.map((backend) => backend.urlRest);
    } else {
      backends = [
        {
          url: 'http://localhost:9876',
          pubkey:
            'YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==',
          signermask: 1,
        },
      ];
    }

    config.node['data-availability'] = {
      'enable': true,
      'sequencer-inbox-address': coreContracts.sequencerInbox,
      'parent-chain-node-url': parentChainRpcUrl,
      'rest-aggregator': {
        enable: true,
        urls: restUrls,
      },
      'rpc-aggregator': {
        'enable': true,
        'assumed-honest': assumedHonest || 1,
        'backends': stringifyBackendsJson(backends),
      },
    };
    // Check if onlineUrlList is provided and not empty
    if (onlineUrlList && onlineUrlList.length > 0 && config.node['data-availability']) {
      config.node['data-availability']['rest-aggregator']['online-url-list'] = onlineUrlList;
}
  }

  return config;
}
