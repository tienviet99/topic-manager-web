import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import UserReducer from './user/reducer';

const middleware = [thunk];

export const store = createStore(
  combineReducers({
    user: UserReducer,
  }),
  applyMiddleware(...middleware),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
