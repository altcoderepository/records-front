import { axiosInstance, type Label, type Labels } from "@shared";

export const patchLabel: (
  id: Label["id"],
  data: Partial<Label>,
) => Promise<Labels> = (id, data) => {
  return axiosInstance
    .patch(`labels/${id}`, data)
    .then((response) => response.data);
};
