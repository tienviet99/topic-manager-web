import TaskApi from 'apis/task';
import { Dispatch } from 'redux';
import ITask from 'types/task';
import {
  ActionTypes,
  ADD_TASK,
  DELETE_TASK,
  GET_TASK,
  GET_TASK_BY_PROCESS_ID,
  PENDING,
  REJECTED,
  UPDATE_TASK,
} from './constant';

export const getTask =
  () => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: task } = await TaskApi.getAll();
      dispatch({ type: GET_TASK, payload: task });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const addTask =
  (item: ITask) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const res = await TaskApi.add(item);
      dispatch({ type: ADD_TASK, payload: res.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const updateTask =
  (_id: string, item: ITask) =>
  async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const res = await TaskApi.update(_id, item);
      dispatch({ type: UPDATE_TASK, payload: res.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const deleteTask =
  (_id: string | undefined) =>
  async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      await TaskApi.remove(_id);
      dispatch({ type: DELETE_TASK, payload: _id });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const getTaskByProcessId =
  (processId: string) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: task } = await TaskApi.getTaskByProcessId(
        processId,
      );
      dispatch({ type: GET_TASK_BY_PROCESS_ID, payload: task });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };
