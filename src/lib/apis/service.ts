import axios from 'axios';

const BASE_URL = 'https://api.coinpaprika.com/v1';

export const getCoins = async () => {
  return axios.get(`${BASE_URL}/coins`).then((res) => res.data.slice(0, 100));
};

export const getCoinInfo = async (coinId: string) => {
  const data = await axios.get(`${BASE_URL}/coins/${coinId}`).then((data) => data.data);
  return data;
};

export const getCoinTickers = async (coinId: string) => {
  const data = await fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
  return data;
};
