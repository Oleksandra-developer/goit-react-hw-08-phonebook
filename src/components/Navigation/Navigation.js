import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../redux/auth";
import styles from "../AuthNav/AuthNav.module.scss";

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      to="/"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Homepage
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Contacts
      </NavLink>
    )}
  </nav>
);
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticatad(state),
});

export default connect(mapStateToProps, null)(Navigation);
