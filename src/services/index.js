import axios from "axios";
import * as URL from "../utils/url";

const config = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("AutherizationToken")}`,
  },
};

export const getCountriesAPI = (region) => {
  return axios.get(`${URL.baseURL}${region}${"&pretty=true"}`);
};
