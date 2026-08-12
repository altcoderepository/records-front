import { axiosInstance, type Label, type Labels } from "@shared";

export const deleteLabel: (id: Label["id"]) => Promise<Labels> = (id) => {
  return axiosInstance.delete(`labels/${id}`).then((response) => response.data);
};
