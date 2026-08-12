import { axiosInstance } from "@shared/api/client";
import type { Labels } from "@shared/types";

export const getAllLabels: () => Promise<Labels> = () => {
  return axiosInstance.get("labels").then((response) => response.data);
};
