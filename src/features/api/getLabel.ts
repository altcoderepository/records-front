import { axiosInstance } from "@shared/api/client";
import type { Label } from "@shared/types";

export const getLabel: (id: Label["id"]) => Promise<Label> = (id) => {
  return axiosInstance.get(`labels/${id}`).then((response) => response.data);
};
