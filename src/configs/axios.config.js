import axios from "axios";
import { BASE_URL_SERVER } from "../constants/server.constants";

export const custimAxios = axios.create({
    baseURL: BASE_URL_SERVER,
    timeout: 10000
})