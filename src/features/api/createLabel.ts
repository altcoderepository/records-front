import { axiosInstance } from "@shared/api/client";
import type { LabelPayload, Labels } from "@shared/types";

export const createLabel: (payload: LabelPayload) => Promise<Labels> = (
  payload,
) => {
  return axiosInstance
    .post("labels", payload)
    .then((response) => response.data);
};
