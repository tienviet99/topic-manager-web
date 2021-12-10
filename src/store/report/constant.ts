import IReport from 'types/report';

export const PENDING = 'PENDING';
export const GET_REPORT = 'GET_REPORT';
export const ADD_REPORT = 'ADD_REPORT';
export const UPDATE_REPORT = 'UPDATE_REPORT';
export const DELETE_REPORT = 'DELETE_REPORT';
export const GET_REPORT_BY_TASK_ID = 'GET_REPORT_BY_TASK_ID';
export const REJECTED = 'REJECTED';

export type ActionTypes =
  | { type: typeof PENDING }
  | { type: typeof GET_REPORT; payload: IReport[] }
  | { type: typeof ADD_REPORT; payload: IReport }
  | { type: typeof UPDATE_REPORT; payload: IReport }
  | { type: typeof DELETE_REPORT; payload: string }
  | { type: typeof GET_REPORT_BY_TASK_ID; payload: IReport[] }
  | { type: typeof REJECTED };
