import { axiosInstance } from "@shared/api/client";
import type { Records } from "@shared/types";

export const getAllRecords: () => Promise<Records> = () => {
  return axiosInstance.get("").then((response) => response.data);
};
