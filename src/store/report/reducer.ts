import IReport from 'types/report';
import {
  ActionTypes,
  ADD_REPORT,
  DELETE_REPORT,
  GET_REPORT,
  PENDING,
  UPDATE_REPORT,
} from './constant';

interface InitialState {
  loading: boolean;
  report: IReport[];
}

const initialState: InitialState = {
  loading: false,
  report: [],
};

const ReportReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PENDING:
      return { ...state, loading: true };
    case GET_REPORT:
      return { ...state, report: action.payload, loading: false };
    case ADD_REPORT:
      return {
        ...state,
        report: [...state.report, action.payload],
        loading: false,
      };
    case UPDATE_REPORT: {
      const newReport = state.report.map((report: IReport) => {
        if (report._id === action.payload._id) {
          return action.payload;
        }
        return report;
      });
      return {
        ...state,
        report: newReport,
        loading: false,
      };
    }
    case DELETE_REPORT: {
      const filterReport = state.report.filter(
        (item: IReport) => item._id !== action.payload,
      );
      return { ...state, task: filterReport, loading: false };
    }

    default:
      return state;
  }
};

export default ReportReducer;
