export default interface IProcess {
  studentId: string;
  teacherId: string;
  topicId: string;
  status: boolean;
  point: number;
  percent: number;
  _id?: string;
  createAt?: string;
  updateAt?: string;
}
