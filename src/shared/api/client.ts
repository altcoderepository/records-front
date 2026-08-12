import axios from "axios";

import { ENV } from "@env";

export const axiosInstance = axios.create({
  baseURL: ENV.DEV_URL,
  timeout: 5000,
});
