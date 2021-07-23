import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import { changeFilter } from "../redux/phonebook/phonebook-actions";
import { getPhonebookFilter } from "../redux/phonebook/contacts-selectors";

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  value: getPhonebookFilter(state),
});
const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
