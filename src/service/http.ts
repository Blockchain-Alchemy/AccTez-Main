import axios from "axios";

const BASE_URL = 'https://pixl-server.herokuapp.com';

const config = {
  headers: {
    Accept: "application/json",
  },
};

export const setupWizard = (payload: any) => {
  return axios.post(`${BASE_URL}/api/wizard`, payload, config)
    .then((res) => {
      console.log('setupWizard', res.data)
      return res.data;
    })
};
