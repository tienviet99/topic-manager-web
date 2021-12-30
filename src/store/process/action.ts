import ProcessApi from 'apis/process';
import { Dispatch } from 'redux';
import { PENDING } from 'store/topic/constant';
import IProcess from 'types/process';
import {
  ActionTypes,
  ADD_PROCESS,
  DELETE_PROCESS,
  GET_PROCESS,
  GET_PROCESS_BY_ID,
  GET_PROCESS_BY_STUDENT_ID,
  GET_PROCESS_BY_TEACHER_ID,
  REJECTED,
  UPDATE_PROCESS,
} from './constant';

export const getProcess =
  () => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: process } = await ProcessApi.getAll();
      dispatch({ type: GET_PROCESS, payload: process });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const getProcessByTeacherId =
  (teacherId: string) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: process } = await ProcessApi.getProcessTeacher(
        teacherId,
      );
      dispatch({ type: GET_PROCESS_BY_TEACHER_ID, payload: process });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const getProcessByStudentId =
  (studentId: string) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: process } = await ProcessApi.getProcessStudent(
        studentId,
      );
      dispatch({ type: GET_PROCESS_BY_STUDENT_ID, payload: process });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const getProcessById =
  (processId: string) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: process } = await ProcessApi.getProcessById(
        processId,
      );
      dispatch({ type: GET_PROCESS_BY_ID, payload: process });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const addProcess =
  (item: IProcess) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const res = await ProcessApi.add(item);
      dispatch({ type: ADD_PROCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const updateProcess =
  (_id: string, item: IProcess) =>
  async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const res = await ProcessApi.update(_id, item);
      dispatch({ type: UPDATE_PROCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const deleteProcess =
  (_id: string) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      await ProcessApi.remove(_id);
      dispatch({ type: DELETE_PROCESS, payload: _id });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };
