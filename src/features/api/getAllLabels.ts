import { axiosInstance, type Labels } from "@shared";

export const getAllLabels: () => Promise<Labels> = () => {
  return axiosInstance.get("labels").then((response) => response.data);
};
