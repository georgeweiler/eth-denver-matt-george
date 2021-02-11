import SuperfluidSDK from '@superfluid-finance/js-sdk';
import { Web3Provider } from '@ethersproject/providers';

export const getSFUser = async () => {
  const walletAddress = await window.ethereum.request({
    method: 'eth_requestAccounts',
    params: [{ eth_accounts: {} }],
  });

  const sf = new SuperfluidSDK.Framework({
    ethers: new Web3Provider(window.ethereum),
    tokens: ['fDAI'],
  });
  await sf.initialize();

  const carol = sf.user({
    address: walletAddress[0],
    token: '0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00',
  });

  const details = await carol.details();
  return details;
};

export const createFlow = async (amt, address) => {
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
  console.log('creating the FLOW', {
    recipient: address,
    flowRate: amt * OneDaiPerMonth,
  });
  await carol.flow({
    recipient: address,
    flowRate: amt * OneDaiPerMonth,
  });

  // Log details
  const details = await carol.details();

  return details;
};
