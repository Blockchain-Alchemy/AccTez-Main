import axios from "axios";

const BASE_URL = "https://pixl-server.herokuapp.com";
  //"http://localhost:5000";
  //"https://pixl-server.herokuapp.com";

const config = {
  headers: {
    Accept: "application/json",
  },
};

export const getWizard = () => {
  return axios
    .get(`${BASE_URL}/api/wizard`, config)
    .then((res) => {
      console.log("getWizard", res.data);
      return res.data;
    });
}

export const setupWizard = (payload: any) => {
  return axios.post(`${BASE_URL}/api/wizard`, payload, config).then((res) => {
    console.log("setupWizard", res.data);
    return res.data;
  });
};

export const getTokenPrices = () => {
  return axios
    .get(`${BASE_URL}/api/wizard/prices`, config)
    .then((res) => {
      console.log("getTokenPrices", res.data);
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

export const login = (payload: any) => {
  return axios
    .post(`${BASE_URL}/api/wizard/login`, payload, config)
    .then((res) => {
      console.log("login", res.data);
      return res.data;
    });
}
