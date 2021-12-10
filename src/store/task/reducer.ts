import ITask from 'types/task';
import {
  ActionTypes,
  ADD_TASK,
  DELETE_TASK,
  GET_TASK,
  PENDING,
  UPDATE_TASK,
} from './constant';

interface InitialState {
  loading: boolean;
  task: ITask[];
}

const initialState: InitialState = {
  loading: false,
  task: [],
};

const TaskReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PENDING:
      return { ...state, loading: true };
    case GET_TASK:
      return { ...state, task: action.payload, loading: false };
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
        loading: false,
      };
    case UPDATE_TASK: {
      const newTask = state.task.map((task: ITask) => {
        if (task._id === action.payload._id) {
          return action.payload;
        }
        return task;
      });
      return {
        ...state,
        task: newTask,
        loading: false,
      };
    }
    case DELETE_TASK: {
      const filterTask = state.task.filter(
        (item: ITask) => item._id !== action.payload,
      );
      return { ...state, task: filterTask, loading: false };
    }

    default:
      return state;
  }
};

export default TaskReducer;
