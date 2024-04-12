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

// custimAxios.interceptor.request.use(
//   async config => {
//     const value = await redisClient.get(rediskey)
//     const keys = JSON.parse(value)
//     config.headers = {
//       'Authorization': `Bearer ${keys.access_token}`,
//       'Accept': 'application/json',
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//     return config;
//   },
//   error => {
//     Promise.reject(error)
//   }
// )

custimAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 406) {
      authUtils.refreshAuth();
      // originalRequest._retry = true;
      // window.location.reload()
      // return custimAxios(originalRequest);
    }
    return Promise.reject(err);
  }
);

custimAxios.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.getItem("accessToken")}`;

export default custimAxios;
