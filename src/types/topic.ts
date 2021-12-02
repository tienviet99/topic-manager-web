export default interface ITopic {
  topicId: string;
  name: string;
  teacherName: string;
  start_date: string;
  end_date: string;
  description: string;
  link: string;
  major: string;
  status: boolean;
  _id?: string;
  createAt?: string;
  updateAt?: string;
}
