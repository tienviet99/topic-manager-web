import { PENDING } from 'store/task/constant';
import IProcess from 'types/process';
import {
  ActionTypes,
  ADD_PROCESS,
  DELETE_PROCESS,
  GET_PROCESS,
  GET_PROCESS_BY_STUDENT_ID,
  GET_PROCESS_BY_TEACHER_ID,
  UPDATE_PROCESS,
} from './constant';

interface InitialState {
  loading: boolean;
  process: IProcess[];
}

const initialState: InitialState = {
  loading: false,
  process: [],
};

const ProcessReducer = (
  state = initialState,
  action: ActionTypes,
) => {
  switch (action.type) {
    case PENDING:
      return { ...state, loading: true };
    case GET_PROCESS:
      return { ...state, process: action.payload, loading: false };
    case GET_PROCESS_BY_STUDENT_ID:
      return { ...state, process: action.payload, loading: false };
    case GET_PROCESS_BY_TEACHER_ID:
      return { ...state, process: action.payload, loading: false };
    case ADD_PROCESS: {
      return {
        ...state,
        process: [...state.process, action.payload],
        loading: false,
      };
    }
    case UPDATE_PROCESS: {
      const newProcess = state.process.map((process: IProcess) => {
        if (process._id === action.payload._id) {
          return action.payload;
        }
        return process;
      });
      return { ...state, process: newProcess, loading: false };
    }
    case DELETE_PROCESS: {
      const filterProcess = state.process.filter(
        (item: IProcess) => item._id !== action.payload,
      );
      return { ...state, process: filterProcess, loading: false };
    }
    default:
      return state;
  }
};

export default ProcessReducer;
