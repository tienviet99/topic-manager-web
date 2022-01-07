export default interface ITask {
  processId: string | undefined;
  name: string;
  start_date: string;
  end_date: string;
  requirements: string;
  totalPercent: number;
  completePercent: number;
  _id?: string;
  createAt?: string;
  updateAt?: string;
}
