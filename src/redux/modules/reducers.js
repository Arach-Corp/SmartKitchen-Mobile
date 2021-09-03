import { combineReducers } from 'redux';
import AuthReducer from './auth/reducer';

export const Reducers = combineReducers({
  authState: AuthReducer,
});
