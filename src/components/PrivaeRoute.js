import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "./redux/auth";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,

  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticatad(state),
});
export default connect(mapStateToProps, null)(PrivateRoute);
