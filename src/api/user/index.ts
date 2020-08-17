import http from '../http'
interface LoginProps {
  username: string;
  password: string;
}

export const login = (Options: LoginProps) => http.post('/user/login', Options)