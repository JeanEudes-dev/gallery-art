import axios from "axios";
import { ApiResponse } from "../types/art";

export const fetchArtworks = async <T>(
  endpoint: string,
  page: number = 1
): Promise<ApiResponse<T>> => {
  const { data } = await axios.get(
    `https://api.artic.edu/api/v1${endpoint}&page=${page}`
  );
  return data;
};
