import axios from "axios";
import { BASE_URL_SERVER } from "../constants/server.constants";

const custimAxios = axios.create({
  baseURL: BASE_URL_SERVER,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

custimAxios.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("accessToken")}`;

export default custimAxios;
