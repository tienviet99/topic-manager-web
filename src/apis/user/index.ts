import { axiosClient } from 'apis';
import IUser from 'types/users';

const UserApi = {
  getAll() {
    const url: string = `/user/list`;
    return axiosClient.get(url);
  },
  getUserById(_id: string) {
    const url: string = `/user/findid/${_id}`;
    return axiosClient.get(url);
  },
  getUserByUserId(userId: string) {
    const url: string = `/user/findUserId/${userId}`;
    return axiosClient.get(url);
  },
  add(user: IUser) {
    const url: string = '/user/create';
    return axiosClient.post(url, user);
  },
  update(_id: string, user: IUser) {
    const url: string = `/user/update/${_id}`;
    return axiosClient.put(url, user);
  },
  remove(_id: string) {
    const url: string = `/user/delete/${_id}`;
    return axiosClient.delete(url);
  },
  search(keyword: any) {
    const url: string = `/user/search`;
    return axiosClient.post(url, keyword);
  },
};

export default UserApi;
