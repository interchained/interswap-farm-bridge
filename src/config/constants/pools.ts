import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'CRYSTAL',
    stakingTokenName: QuoteToken.CRYSTAL,
    stakingTokenAddress: '0x4ca6B6b8F10EB17DbD1f8c3F313Eca2F779C6e0B',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x3307fea1d0effcddfa0485d3d593af10b9677f06',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
