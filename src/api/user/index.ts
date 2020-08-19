import http from '../http'
interface LoginProps {
  username: string;
  password: string;
}

export interface ArcionData {
  pageIndex: number;
  pageSize: number;
}
export interface CrateArcion {
  columnId: number;
  name: string;
  description: string;
  time?: string;
  username: string

}

export const login = (Options: LoginProps) => http.post('/user/login', Options)
export const arcionList = (Options: ArcionData) => http.post('/commodity/list', Options)
export const createArcion = (Options: CrateArcion) => http.post('/commodity/create', Options)