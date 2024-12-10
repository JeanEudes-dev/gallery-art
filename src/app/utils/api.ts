import axios from "axios";
import { ApiResponse } from "../types/art";

export const fetchArtworks = async <T>(
  endpoint: string
): Promise<ApiResponse<T>> => {
  const { data } = await axios.get(`https://api.artic.edu/api/v1${endpoint}`);
  return data;
};
