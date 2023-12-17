import { encodeFunctionData, parseAbi } from 'viem';

export function setMinimumL3BaseFeeFunctionData(priceInWei: bigint) {
  return encodeFunctionData({
    abi: parseAbi(['function setMinimumL2BaseFee(uint256 priceInWei)']),
    functionName: 'setMinimumL2BaseFee',
    args: [priceInWei],
  });
}
