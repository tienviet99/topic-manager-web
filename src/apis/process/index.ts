import { axiosClient } from 'apis';
import IProgress from 'types/process';

const ProcessApi = {
  getAll() {
    const url: string = `/process/list`;
    return axiosClient.get(url);
  },
  getProcessStudent(studentId: string) {
    const url: string = `/process/student/${studentId}`;
    return axiosClient.get(url);
  },
  getProcessTeacher(teacherId: string) {
    const url: string = `/process/teacher/${teacherId}`;
    return axiosClient.get(url);
  },
  add(process: IProgress) {
    const url: string = `/process/create`;
    return axiosClient.post(url, process);
  },
  update(_id: string, process: IProgress) {
    const url: string = `/process/update/${_id}`;
    return axiosClient.put(url, process);
  },
  remove(_id: string) {
    const url: string = `process/delete/${_id}`;
    return axiosClient.delete(url);
  },
};

export default ProcessApi;
