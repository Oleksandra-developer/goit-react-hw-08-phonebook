import { createSelector } from "@reduxjs/toolkit";

export const getPhonebookFilter = (state) => state.phonebook.filter;

export const getLoading = (state) => state.phonebook.loading;

const getAllContacts = (state) => state.phonebook.contacts;
export const getVisibleContacts = createSelector(
  [getAllContacts, getPhonebookFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
