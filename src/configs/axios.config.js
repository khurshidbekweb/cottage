import axios from "axios";
import { BASE_URL_SERVER } from "../constants/server.constants";
import { authUtils } from "../utils/auth.utils";

const custimAxios = axios.create({
  baseURL: BASE_URL_SERVER,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

custimAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 406) {
      authUtils.refreshAuth()
      // window.location.reload()
    }
  }
);

custimAxios.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("accessToken")}`;

export default custimAxios;
