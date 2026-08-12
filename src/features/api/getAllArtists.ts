import { axiosInstance, type Artists } from "@shared";

export const getAllArtists: () => Promise<Artists> = () => {
  return axiosInstance.get("artists").then((response) => response.data);
};
