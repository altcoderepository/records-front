import { axiosInstance, type Label } from "@shared";

export const getLabel: (id: Label["id"]) => Promise<Label> = (id) => {
  return axiosInstance.get(`labels/${id}`).then((response) => response.data);
};
