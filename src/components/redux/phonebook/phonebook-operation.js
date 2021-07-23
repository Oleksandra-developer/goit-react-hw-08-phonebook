import axios from "axios";
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
} from "./phonebook-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactsError(error.message)));
};
export const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contact = {
      name,
      number,
    };

    dispatch(addContactRequest());

    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch((error) => dispatch(addContactError(error.message)));
  };
export const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error.message)));
};
// eslint-disable-next-line import/no-anonymous-default-export
// export default { addContact };
