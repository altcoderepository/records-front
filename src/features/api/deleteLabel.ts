import { axiosInstance } from "@shared/api/client";
import type { Label, Labels } from "@shared/types";

export const deleteLabel: (id: Label["id"]) => Promise<Labels> = (id) => {
  return axiosInstance.delete(`labels/${id}`).then((response) => response.data);
};
