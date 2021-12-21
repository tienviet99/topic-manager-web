import ITopic from 'types/topic';

export const PENDING = 'PENDING';
export const GET_TOPIC = 'GET_TOPIC';
export const GET_TOPIC_BY_ID = 'GET_TOPIC_BY_ID';
export const ADD_TOPIC = 'ADD_TOPIC';
export const UPDATE_TOPIC = 'UPDATE_TOPIC';
export const DELETE_TOPIC = 'DELETE_TOPIC';
export const SEARCH_TOPIC = 'SEARCH_TOPIC';
export const SEARCH_TOPIC_STATUS = 'SEARCH_TOPIC_STATUS';
export const REJECTED = 'REJECTED';

export type ActionTypes =
  | { type: typeof PENDING }
  | { type: typeof GET_TOPIC; payload: ITopic[] }
  | { type: typeof GET_TOPIC_BY_ID; payload: ITopic }
  | { type: typeof ADD_TOPIC; payload: ITopic }
  | { type: typeof UPDATE_TOPIC; payload: ITopic }
  | { type: typeof DELETE_TOPIC; payload: string | undefined }
  | { type: typeof SEARCH_TOPIC; payload: string }
  | { type: typeof SEARCH_TOPIC_STATUS; payload: string }
  | { type: typeof REJECTED };
