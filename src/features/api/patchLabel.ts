import { axiosInstance } from "@shared/api/client";
import type { Label, Labels } from "@shared/types";

export const patchLabel: (
  id: Label["id"],
  data: Partial<Label>,
) => Promise<Labels> = (id, data) => {
  return axiosInstance
    .patch(`labels/${id}`, data)
    .then((response) => response.data);
};
