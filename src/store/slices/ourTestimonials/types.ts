export interface OurTestimonialsResponse {
  avatar: string
  comment: string
  comment_id: number
  created_at: string
  deleted_at: string
  description: string
  is_published: number
  name: string
  updated_at: string
}
export interface OurTestimonialsState {
  ourTestimonialsPageable?: OurTestimonialsResponse[];
}