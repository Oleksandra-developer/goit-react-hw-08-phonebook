import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-operation";
import { getVisibleContacts } from "../../redux/phonebook/contacts-selectors";

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={styles.ContactsList__btn}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { contacts: getVisibleContacts(state) };
};
const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
