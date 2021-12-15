import IUser from 'types/users';

export const PENDING = 'PENDING';
export const GET_USER = 'GET_USERS';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const GET_USER_BY_USER_ID = 'GET_USER_BY_USER_ID';
export const DELETE_USER = 'DELETE_USER';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPADTE_USER';
export const SEARCH_USER = 'SEARCH_USER';
export const REJECTED = 'REJECTED';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_PROFILE = 'GET_PROFILE';

export type ActionTypes =
  | { type: typeof PENDING }
  | { type: typeof GET_USER; payload: IUser[] }
  | { type: typeof GET_USER_BY_ID; payload: string }
  | { type: typeof GET_PROFILE; payload: IUser }
  | { type: typeof GET_USER_BY_USER_ID; payload: string }
  | { type: typeof DELETE_USER; payload: string }
  | { type: typeof ADD_USER; payload: IUser }
  | { type: typeof UPDATE_USER; payload: IUser }
  | { type: typeof SEARCH_USER; payload: any }
  | { type: typeof LOGIN }
  | { type: typeof LOGOUT }
  | { type: typeof REJECTED; payload?: string };
