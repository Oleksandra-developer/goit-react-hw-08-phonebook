import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  changeFilter,
} from "./phonebook-actions.js";

const contacts = createReducer([], {
  [fetchContactsSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    if (state.find(({ name }) => name === payload.name)) {
      alert(`${payload.name}  is alredy in contacts`);
    }
    return [...state, payload];
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer("", {
  [changeFilter]: (state, { type, payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
