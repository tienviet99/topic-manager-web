import { axiosClient } from 'apis';
import ITask from 'types/task';

const TaskApi = {
  getAll() {
    const url: string = `/task/list`;
    return axiosClient.get(url);
  },
  getTaskById(_id: string) {
    const url: string = `/task/findtask/${_id}`;
    return axiosClient.get(url);
  },
  getTaskByProcessId(processId: string) {
    const url: string = `/task/list/${processId}`;
    return axiosClient.get(url);
  },
  add(task: ITask) {
    const url: string = `/task/create`;
    return axiosClient.post(url, task);
  },
  update(_id: string, task: ITask) {
    const url: string = `/task/update/${_id}`;
    return axiosClient.put(url, task);
  },
  remove(_id: string | undefined) {
    const url: string = `/task/delete/${_id}`;
    return axiosClient.delete(url);
  },
};

export default TaskApi;
