import { axiosInstance } from "@shared/api/client";
import type { Artists } from "@shared/types";

export const getAllArtists: () => Promise<Artists> = () => {
  return axiosInstance.get("artists").then((response) => response.data);
};
