import IUser, { ILogin } from 'types/users';
import {
  ActionTypes,
  PENDING,
  GET_USER,
  ADD_USER,
  GET_USER_BY_ID,
  GET_USER_BY_USER_ID,
  UPDATE_USER,
  DELETE_USER,
  SEARCH_USER,
  LOGIN,
  GET_PROFILE,
  LOGOUT,
  REJECTED,
} from './constant';

interface InitialState {
  loading: boolean;
  isLoggedIn: boolean;
  user: IUser[];
  infoUser: ILogin[];
  profile: IUser;
}
const initialState: InitialState = {
  loading: false,
  isLoggedIn: false,
  user: [],
  infoUser: [],
  profile: {
    userId: '',
    name: '',
    date: '',
    role: 0,
    phone: '',
    major: '',
    completeTopic: [],
  },
};

const UserReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PENDING:
      return { ...state, loading: true };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };
    case GET_USER_BY_ID:
      return { ...state, user: action.payload, loading: false };
    case GET_PROFILE:
      return { ...state, profile: action.payload, loading: false };
    case GET_USER_BY_USER_ID:
      return { ...state, user: action.payload, loading: false };
    case SEARCH_USER:
      return { ...state, user: action.payload, loading: false };
    case ADD_USER:
      return {
        ...state,
        user: [...state.user, action.payload],
        loading: false,
      };
    case UPDATE_USER: {
      const newUser = state.user.map((user: IUser) => {
        if (user._id === action.payload._id) {
          return action.payload;
        }
        return user;
      });
      return {
        ...state,
        users: newUser,
        loading: false,
      };
    }
    case DELETE_USER: {
      const filterUsers = state.user.filter(
        (item: IUser) => item._id !== action.payload,
      );
      return { ...state, users: filterUsers, loading: false };
    }
    case LOGIN: {
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
      };
    }
    case REJECTED:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default UserReducer;
