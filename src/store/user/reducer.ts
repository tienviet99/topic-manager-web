import IUser from 'types/users';
import {
  ActionTypes,
  PENDING,
  GET_USER,
  ADD_USER,
  GET_USER_BY_ID,
  GET_USER_BY_USER_ID,
  UPDATE_USER,
  DELETE_USER,
} from './constant';

interface InitialState {
  loading: boolean;
  user: IUser[];
}
const initialState: InitialState = {
  loading: false,
  user: [],
};

const UserReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PENDING:
      return { ...state, loading: true };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };
    case GET_USER_BY_ID:
      return { ...state, user: action.payload, loading: false };
    case GET_USER_BY_USER_ID:
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
    default:
      return state;
  }
};

export default UserReducer;