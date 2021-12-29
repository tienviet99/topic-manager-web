import ITopic from './topic';
import IUser from './users';

export default interface IProcess {
  studentId: string;
  teacherId: IUser;
  topicId: ITopic;
  status: boolean;
  point: number;
  percent: number;
  _id?: string;
  createAt?: string;
  updateAt?: string;
}
