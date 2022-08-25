import Axios from "axios";

const API = () => {
  const BASE_URL = "http://data.fixer.io/api/latest?access_key=c42806a1afc0653fa22e0a9850f9a709";
  const axios = Axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return axios;
};

export default API;
