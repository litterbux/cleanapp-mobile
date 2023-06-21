import {ETHERSCAN_API_TOKEN, PTOY_CONTRACT} from '../../env';

export const getTransactions = async (address: string) => {
  let url =
    'https://api.etherscan.io/api?module=account&action=tokentx&address=$[address]&startblock=0&endblock=999999999&sort=desc&contractaddress=$[contractaddress]&apikey=$[apikey]';

  const config = {
    method: 'get',
  };

  try {
    const response = await fetch(
      url
        .replace('$[address]', address)
        .replace('$[contractaddress]', PTOY_CONTRACT)
        .replace('$[apikey]', ETHERSCAN_API_TOKEN),
      config,
    );
    const result = await response.json();
    return result;
  } catch (err) {}

  return null;
};
