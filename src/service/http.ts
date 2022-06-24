import axios from "axios";

const BASE_URL = "https://pixl-server.herokuapp.com";

const config = {
  headers: {
    Accept: "application/json",
  },
};

export const setupWizard = (payload: any) => {
  return axios.post(`${BASE_URL}/api/wizard`, payload, config).then((res) => {
    console.log("setupWizard", res.data);
    return res.data;
  });
};

export const getWalletTokens = (walletAddress: string) => {
  return axios
    .get(`${BASE_URL}/api/wizard/wallet/tokens/${walletAddress}`, config)
    .then((res) => {
      console.log("getWalletTokens", res.data);
      return res.data;
    });
};

export const createWalletToken = (walletAddress: string, tokenName: string, createdAt: Date) => {
  const payload = {
    walletAddress,
    tokenName,
    createdAt,
  }
  return axios
    .post(`${BASE_URL}/api/wizard/wallet/tokens`, payload, config)
    .then((res) => {
      console.log("getWalletTokens", res.data);
      return res.data;
    });
};
