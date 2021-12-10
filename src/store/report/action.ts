import ReportApi from 'apis/report';
import { Dispatch } from 'redux';
import IReport from 'types/report';
import {
  ActionTypes,
  ADD_REPORT,
  DELETE_REPORT,
  GET_REPORT,
  GET_REPORT_BY_TASK_ID,
  PENDING,
  REJECTED,
  UPDATE_REPORT,
} from './constant';

export const getReport =
  () => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: report } = await ReportApi.getAll();
      dispatch({ type: GET_REPORT, payload: report });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const getReportByTaskId =
  (taskId: string) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: report } = await ReportApi.getReportByTaskId(
        taskId,
      );
      dispatch({ type: GET_REPORT_BY_TASK_ID, payload: report });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const addReport =
  (item: IReport) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const res = await ReportApi.add(item);
      dispatch({ type: ADD_REPORT, payload: res.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const updateReport =
  (_id: string, item: IReport) =>
  async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const res = await ReportApi.update(_id, item);
      dispatch({ type: UPDATE_REPORT, payload: res.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const deleteReport =
  (_id: string) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      await ReportApi.remove(_id);
      dispatch({ type: DELETE_REPORT, payload: _id });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };
