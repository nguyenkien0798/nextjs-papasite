import { Pageable } from "@/types";
import { instance } from "./axios";

const fetchTeams = async (
  params: any
): Promise<Pageable<any>> => {
  const response = await instance.get(`members`, { params });
  return response.data;
};

export default {
  fetchTeams
}