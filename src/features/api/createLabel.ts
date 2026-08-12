import { axiosInstance, type LabelPayload, type Labels } from "@shared";

export const createLabel: (payload: LabelPayload) => Promise<Labels> = (
  payload,
) => {
  return axiosInstance
    .post("labels", payload)
    .then((response) => response.data);
};
