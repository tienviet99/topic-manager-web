import { Dispatch } from 'redux';
import TopicApi from 'apis/topic';
import ITopic from 'types/topic';
import {
  ActionTypes,
  PENDING,
  GET_TOPIC,
  REJECTED,
  ADD_TOPIC,
  UPDATE_TOPIC,
  DELETE_TOPIC,
  SEARCH_TOPIC,
  SEARCH_TOPIC_STATUS,
} from './constant';

export const getTopic =
  () => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: topic } = await TopicApi.getAll();
      dispatch({ type: GET_TOPIC, payload: topic });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const addTopic =
  (item: ITopic) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const res = await TopicApi.add(item);
      dispatch({ type: ADD_TOPIC, payload: res.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const updateTopic =
  (_id: string, item: ITopic) =>
  async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const res = await TopicApi.update(_id, item);
      dispatch({ type: UPDATE_TOPIC, payload: res.data });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const deleteTopic =
  (_id: string) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      await TopicApi.remove(_id);
      dispatch({ type: DELETE_TOPIC, payload: _id });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const searchTopic =
  (keyword: string) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: topic } = await TopicApi.search(keyword);
      dispatch({ type: SEARCH_TOPIC, payload: topic });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };

export const searchTopicByStatus =
  (status: boolean) => async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PENDING });
    try {
      const { data: topic } = await TopicApi.searchStatus(status);
      dispatch({ type: SEARCH_TOPIC_STATUS, payload: topic });
    } catch (error) {
      dispatch({ type: REJECTED });
    }
  };
