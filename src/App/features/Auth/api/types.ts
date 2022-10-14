export interface SignUpDTO {
  name: string
  email: string
  password: string
}

export interface LoginDTO {
  email: string
  password: string
}

export type AuthToken = {
  expires_at: string
  token: string
  type: 'bearer'
}

export interface LoginData {
  authToken: AuthToken
}
