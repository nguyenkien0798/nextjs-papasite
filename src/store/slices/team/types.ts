import { Pageable } from "@/types";

export interface TeamResponse {
  created_at: string
  deleted_at: string
  facebook: string
  linkedin: string
  member_id: number
  name: string
  photo: string
  position: string
  updated_at: string
}
export interface TeamState {
  teamsPageable?: TeamResponse[];
}
export interface CareersState {
  id?: string;
}