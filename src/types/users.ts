export default interface IUser {
  id: number;
  studentId: string;
  name: string;
  date: string;
  phone: string;
  role: string;
  major: string;
  image: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}
