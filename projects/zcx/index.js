const DMAS_ADDRESS_ETHEREUM = '0x57A34b17F859D92B7D5aAf03748C7A280cFbE521';
const DMAS_ADDRESS_POLYGON = '0x5655B12f1e74D1D1fc3F1048a89850a0149Aa5d4';
const ZCX_ADDRESS_ETHEREUM = '0xc52c326331e9ce41f04484d3b5e5648158028804';
const ZCX_ADDRESS_POLYGON = '0xdd75542611d57c4b6e68168b14c3591c539022ed';

async function tvl_ethereum(_, _1, _2, { api }) {
  console.log('calling tvl');
  const TVLs = await api.call({
    abi: "function getTVLs() public view returns(uint256[])",
    target: DMAS_ADDRESS_ETHEREUM
  });
  console.log('tvls', TVLs, TVLs[0]);
  api.add(ZCX_ADDRESS_ETHEREUM, TVLs[0]);
  console.log('ethereum added');
}

async function tvl_polygon(_, _1, _2, { api }) {
  console.log('calling tvl polygon');
  const TVLs = await api.call({
    abi: "function getTVLs() public view returns(uint256[])",
    target: DMAS_ADDRESS_POLYGON
  });
  console.log('tvls polygon', TVLs, TVLs[0]);
  api.add(ZCX_ADDRESS_POLYGON, TVLs[0]);
  console.log('polygon added');
}

module.exports = {
  timetravel: false,
  misrepresentedTokens: false,
  methodology: 'gets the TVL of ZCX on Ethereum and Polygon',
  ethereum: {
    tvl: tvl_ethereum
  },
  polygon: {
    tvl: tvl_polygon
  }
}; 