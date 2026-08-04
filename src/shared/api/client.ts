import { ENV } from "@env";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: ENV.DEV_URL,
  timeout: 5000,
});
