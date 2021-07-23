import React from "react";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth";
import { authOperations } from "../redux/auth";
import styles from "./UM.module.scss";

const UserMenu = ({ email, onLogout }) => (
  <div>
    <span className={styles.text}>{email}</span>
    <button className={styles.button} type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  email: authSelectors.getUserEmail(state),
});
const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
