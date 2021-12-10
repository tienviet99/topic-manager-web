import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import TopicReducer from './topic/reducer';
import UserReducer from './user/reducer';

const middleware = [thunk];

export const store = createStore(
  combineReducers({
    user: UserReducer,
    topic: TopicReducer,
  }),
  applyMiddleware(...middleware),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
