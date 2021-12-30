import { PENDING } from 'store/task/constant';
import IProcess from 'types/process';
import { string } from 'yup/lib/locale';
import {
  ActionTypes,
  ADD_PROCESS,
  DELETE_PROCESS,
  GET_PROCESS,
  GET_PROCESS_BY_ID,
  GET_PROCESS_BY_STUDENT_ID,
  GET_PROCESS_BY_TEACHER_ID,
  UPDATE_PROCESS,
} from './constant';

interface InitialState {
  loading: boolean;
  process: IProcess[];
  processRow: IProcess;
}

const initialState: InitialState = {
  loading: false,
  process: [],
  processRow: {
    studentId: '',
    teacherId: {
      userId: '',
      name: '',
      date: '',
      phone: '',
      major: '',
      role: 0,
      email: '',
    },
    topicId: {
      topicId: '',
      name: '',
      teacherId: {
        userId: '',
        name: '',
        date: '',
        phone: '',
        major: '',
        role: 0,
        email: '',
      },
      start_date: '',
      end_date: '',
      description: '',
      requirements: '',
      link: '',
      major: '',
      status: true,
    },
    status: true,
    point: 0,
    percent: 0,
  },
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
    case GET_PROCESS_BY_ID:
      return { ...state, processRow: action.payload, loading: false };
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
