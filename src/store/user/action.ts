import { Dispatch } from 'redux';
import UserApi from 'apis/user';
import IUser from 'types/users';

import {
  ActionTypes,
  ADD_USER,
  DELETE_USER,
  GET_USER,
  GET_USER_BY_ID,
  GET_USER_BY_USER_ID,
  PENDING,
  REJECTED,
  SEARCH_USER,
  UPDATE_USER,
} from './constant';

export const getUser =
  () => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: user } = await UserApi.getAll();
      dispatch({ type: GET_USER, payload: user });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const getUserById =
  (_id: string) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: user } = await UserApi.getUserById(_id);
      dispatch({ type: GET_USER_BY_ID, payload: user });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const getUserByUserId =
  (userId: string) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: user } = await UserApi.getUserByUserId(userId);
      dispatch({ type: GET_USER_BY_USER_ID, payload: user });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const addUser =
  (item: IUser) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const res = await UserApi.add(item);
      dispatch({ type: ADD_USER, payload: res.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const updateUser =
  (_id: string, item: IUser) =>
  async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const res = await UserApi.update(_id, item);
      dispatch({ type: UPDATE_USER, payload: res.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const deleteUser =
  (_id: string) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      await UserApi.remove(_id);
      dispatch({ type: DELETE_USER, payload: _id });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const searchUser =
  (keyword: any) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const res = await UserApi.search(keyword);
      dispatch({ type: SEARCH_USER, payload: res.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };
