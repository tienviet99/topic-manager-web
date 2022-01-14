import ITask from 'types/task';

export const PENDING = 'PENDING';
export const GET_TASK = 'GET_TASK';
export const GET_TASK_BY_ID = 'GET_TASK_BY_ID';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_TASK_BY_PROCESS_ID = 'GET_TASK_BY_PROCESS_ID';
export const REJECTED = 'REJECTED';

export type ActionTypes =
  | { type: typeof PENDING }
  | { type: typeof GET_TASK; payload: ITask[] }
  | { type: typeof ADD_TASK; payload: ITask }
  | { type: typeof GET_TASK_BY_ID; payload: ITask }
  | { type: typeof UPDATE_TASK; payload: ITask }
  | { type: typeof DELETE_TASK; payload: string | undefined }
  | { type: typeof GET_TASK_BY_PROCESS_ID; payload: ITask[] }
  | { type: typeof REJECTED };
