export interface BaseUser {
  email: string
  avatar?: string
  first_name: string
  last_name: string
}

export interface User extends BaseUser {
  id: number
}

export interface UserListResponse {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: User[]
}

export interface UserDetailReponse {
  data: User
}
