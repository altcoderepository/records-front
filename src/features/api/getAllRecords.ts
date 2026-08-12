import { axiosInstance, type Records } from "@shared";

export const getAllRecords: () => Promise<Records> = () => {
  return axiosInstance.get("").then((response) => response.data);
};
