import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ProcessReducer from './process/reducer';
import ReportReducer from './report/reducer';
import TaskReducer from './task/reducer';
import TopicReducer from './topic/reducer';
import UserReducer from './user/reducer';

const middleware = [thunk];

export const store = createStore(
  combineReducers({
    user: UserReducer,
    topic: TopicReducer,
    task: TaskReducer,
    report: ReportReducer,
    process: ProcessReducer,
  }),
  applyMiddleware(...middleware),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
