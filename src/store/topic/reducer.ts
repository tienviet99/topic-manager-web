import ITopic from 'types/topic';
import {
  ActionTypes,
  ADD_TOPIC,
  DELETE_TOPIC,
  GET_TOPIC,
  GET_TOPIC_BY_ID,
  PENDING,
  REJECTED,
  SEARCH_TOPIC,
  SEARCH_TOPIC_STATUS,
  UPDATE_TOPIC,
} from './constant';

interface InitialState {
  loading: boolean;
  topic: ITopic[];
  topicRow: ITopic;
  err: string;
}

const initialState: InitialState = {
  loading: false,
  topic: [],
  topicRow: {
    topicId: '',
    name: '',
    teacherId: {
      _id: '',
      userId: '',
      name: '',
      email: '',
      date: '',
      phone: '',
      major: '',
      role: 0,
    },
    start_date: '',
    end_date: '',
    description: '',
    requirements: '',
    link: '',
    major: '',
    status: true,
  },
  err: '',
};

const TopicReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PENDING:
      return { ...state, loading: true };
    case GET_TOPIC:
      return {
        ...state,
        topic: action.payload,
        loading: false,
      };
    case GET_TOPIC_BY_ID:
      return {
        ...state,
        topicRow: action.payload,
        loading: false,
      };
    case SEARCH_TOPIC:
      return {
        ...state,
        topic: action.payload,
        loading: false,
      };
    case SEARCH_TOPIC_STATUS:
      return {
        ...state,
        topic: action.payload,
        loading: false,
      };
    case ADD_TOPIC:
      return {
        ...state,
        topic: [...state.topic, action.payload],
        loading: false,
        err: '',
      };
    case UPDATE_TOPIC: {
      const newTopic = state.topic.map((topic: ITopic) => {
        if (topic._id === action.payload._id) {
          return action.payload;
        }
        return topic;
      });
      return {
        ...state,
        topic: newTopic,
        loading: false,
      };
    }
    case DELETE_TOPIC: {
      const filterTopic = state.topic.filter(
        (item: ITopic) => item._id !== action.payload,
      );
      return {
        ...state,
        topic: filterTopic,
        loading: false,
      };
    }
    case REJECTED:
      return { ...state, loading: false, err: action.payload };
    default:
      return state;
  }
};

export default TopicReducer;
