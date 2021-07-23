import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authActions from "./auth-actions";

const initialUserState = { name: null, email: null };
const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (state, { payload }) => payload.user,
  [authActions.loginSuccess]: (state, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => initialUserState,
  [authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
});
const token = createReducer(null, {
  [authActions.registerSuccess]: (state, { payload }) => payload.token,
  [authActions.loginSuccess]: (state, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});
const error = createReducer(null, {
  [authActions.registerError]: (state, { payload }) => payload,
  [authActions.loginError]: (state, { payload }) => payload,
  [authActions.logoutError]: (state, { payload }) => payload,
  [authActions.getCurrentUserError]: (state, { payload }) => payload,
});

const isLogIn = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logoutSuccess]: () => false,
});
export default combineReducers({
  user,
  isLogIn,
  token,
  error,
});
