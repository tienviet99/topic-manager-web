import { axiosClient } from 'apis';
import ITopic from 'types/topic';

const TopicApi = {
  getAll() {
    const url: string = `/topic/list`;
    return axiosClient.get(url);
  },
  getTopicById(_id: string) {
    const url: string = `/topic/${_id}`;
    return axiosClient.get(url);
  },
  add(topic: ITopic) {
    const url: string = `/topic/create`;
    return axiosClient.post(url, topic);
  },
  update(_id: string, topic: ITopic) {
    const url: string = `/topic/update/${_id}`;
    return axiosClient.put(url, topic);
  },
  remove(_id: string | undefined) {
    const url: string = `/topic/delete/${_id}`;
    return axiosClient.delete(url);
  },
  search(keyword: string) {
    const url: string = `/topic/search`;
    return axiosClient.post(url, keyword);
  },
  searchStatus(status: boolean) {
    const url: string = `/topic/searchstatus/${status}`;
    return axiosClient.get(url);
  },
};

export default TopicApi;
