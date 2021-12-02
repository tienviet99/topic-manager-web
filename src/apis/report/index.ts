import { axiosClient } from 'apis';
import IReport from 'types/report';

const ReportApi = {
  getAll() {
    const url: string = `/report/list`;
    return axiosClient.get(url);
  },
  getReportByTaskId(taskId: string) {
    const url: string = `/report/list/${taskId}`;
    return axiosClient.get(url);
  },
  add(report: IReport) {
    const url: string = `/report/create`;
    return axiosClient.post(url, report);
  },
  update(_id: string, report: IReport) {
    const url: string = `/report/update/${_id}`;
    return axiosClient.put(url, report);
  },
  remove(_id: string) {
    const url: string = `/report/delete/${_id}`;
    return axiosClient.delete(url);
  },
};

export default ReportApi;
