import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: {},
  userToken: null,
};
/* eslint-disable import/prefer-default-export */
export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      state.isLoggedIn = true;
      state.userToken = `Bearer ${action.payload.token}`;
      return state;
    }
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    case types.LOGOUT: {
      state.isLoggedIn = false;
      state.userToken = '';
      return state;
    }
    default:
      return state;
  }
}
