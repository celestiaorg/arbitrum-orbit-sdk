import { Address } from 'viem';
import { SetMinimumL3BaseFeeParams } from './minL3BaseFee';

import { validParentChainId } from './types/ParentChain';
import { setMinimumL3BaseFeeFunctionData } from './setMinimumL3BaseFeeFunctionData';
import { upgradeExecutorEncodeFunctionData } from './upgradeExecutor';
import { arbOwner } from './contracts';

export type SetMinimumL3BaseFeeParamsPrepareTransactionRequestParams = Omit<
  SetMinimumL3BaseFeeParams,
  'walletClient'
> & {
  account: Address;
};

export async function setMinimumL3BaseFeePrepareTransactionRequest({
  coreContracts,
  priceInWei,
  account,
  publicClient,
}: SetMinimumL3BaseFeeParamsPrepareTransactionRequestParams) {
  const chainId = publicClient.chain?.id;

  if (!validParentChainId(chainId)) {
    throw new Error('chainId is undefined');
  }

  const request = await publicClient.prepareTransactionRequest({
    chain: publicClient.chain,
    to: coreContracts.upgradeExecutor,  ///// IMPORTANT: Need to add L3 data to this as well.
    data: upgradeExecutorEncodeFunctionData({
      functionName: 'executeCall',
      args: [
        arbOwner.address,
        setMinimumL3BaseFeeFunctionData(priceInWei), // targetCallData
      ],
    }),
    account,
  });

  return { ...request, chainId };
}
