import IProcess from 'types/process';

export const PENDING = 'PENDING';
export const GET_PROCESS = 'GET_PROCESS';
export const GET_PROCESS_BY_STUDENT_ID = 'GET_PROCESS_BY_STUDENT_ID';
export const GET_PROCESS_BY_TEACHER_ID = 'GET_PROCESS_BY_TEACHER_ID';
export const GET_PROCESS_BY_ID = 'GET_PROCESS_BY_ID';
export const ADD_PROCESS = 'ADD_PROCESS';
export const UPDATE_PROCESS = 'UPDATE_PROCESS';
export const DELETE_PROCESS = 'DELETE_PROCESS';
export const REJECTED = 'REJECTED';

export type ActionTypes =
  | { type: typeof PENDING }
  | { type: typeof GET_PROCESS; payload: IProcess[] }
  | { type: typeof GET_PROCESS_BY_STUDENT_ID; payload: IProcess[] }
  | { type: typeof GET_PROCESS_BY_TEACHER_ID; payload: IProcess[] }
  | { type: typeof GET_PROCESS_BY_ID; payload: IProcess }
  | { type: typeof ADD_PROCESS; payload: IProcess }
  | { type: typeof UPDATE_PROCESS; payload: IProcess }
  | { type: typeof DELETE_PROCESS; payload: string }
  | { type: typeof REJECTED };
