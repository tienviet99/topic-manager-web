export default interface IUser {
  userId: string;
  name: string;
  date: string;
  phone: string;
  major: string;
  role: number;
  email: string;
  completeTopic?: string[];
  _id?: string;
  createAt?: string;
  updateAt?: string;
}

export interface ILogin {
  userId: string;
  password: string;
}

export interface IInfo {
  _id: string;
  role: number;
  iat: number;
}
