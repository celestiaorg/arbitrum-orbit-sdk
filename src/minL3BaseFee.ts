import { PublicClient, WalletClient} from 'viem';

import { arbOwner, upgradeExecutor } from './contracts';
import { validParentChainId } from './types/ParentChain';
import { CoreContracts } from './types/CoreContracts';
import { setMinimumL3BaseFeeFunctionData } from './setMinimumL3BaseFeeFunctionData';

export type SetMinimumL3BaseFeeParams = {
  coreContracts: Pick<CoreContracts, 'upgradeExecutor'>;
  priceInWei: bigint;
  publicClient: PublicClient;
  walletClient: WalletClient;
};

export async function setMinimumL3BaseFee({
  coreContracts,
  priceInWei,
  publicClient,
  walletClient,
}: SetMinimumL3BaseFeeParams) {
  const chainId = publicClient.chain?.id;
  const account = walletClient.account?.address;

  if (!validParentChainId(chainId)) {
    throw new Error('chainId is undefined');
  }

  if (typeof account === 'undefined') {
    throw new Error('account is undefined');
  }

  const { request } = await publicClient.simulateContract({
    address: coreContracts.upgradeExecutor,
    abi: upgradeExecutor.abi,
    functionName: 'executeCall',
    args: [
      arbOwner.address, // target
      setMinimumL3BaseFeeFunctionData(priceInWei), // targetCallData
    ],
    account,
  });

  const hash = await walletClient.writeContract(request);
  const txReceipt = await publicClient.waitForTransactionReceipt({ hash });

  return txReceipt;
}
