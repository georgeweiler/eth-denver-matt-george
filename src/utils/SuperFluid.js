import SuperfluidSDK from '@superfluid-finance/js-sdk';
import { Web3Provider } from '@ethersproject/providers';

const createFlow = async (amt) => {
  // Get wallet address
  const walletAddress = await window.ethereum.request({
    method: 'eth_requestAccounts',
    params: [{ eth_accounts: {} }],
  });

  // Instantiate Superfluid
  const sf = new SuperfluidSDK.Framework({
    ethers: new Web3Provider(window.ethereum),
    tokens: ['fDAI'],
  });
  await sf.initialize();

  // Create user object
  const carol = sf.user({
    address: walletAddress[0],
    token: '0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00',
  });

  // Create flow
  const OneDaiPerMonth = 385802469136;
  await carol.flow({
    recipient: '0xb998085574A36C2B2f7d2BABB8FBEC400dE55524',
    flowRate: amt * OneDaiPerMonth,
  });

  // Log details
  const details = await carol.details();
  console.log(details);

  return details;
};

export default createFlow;
