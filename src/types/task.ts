export default interface ITask {
  processId: string;
  title: string;
  start_day: string;
  end_day: string;
  description: string;
  point: number;
  totalPercent: number;
  completePercent: number;
  _id?: string;
  createAt?: string;
  updateAt?: string;
}
