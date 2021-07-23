import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "./redux/auth";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticatad(state),
});
export default connect(mapStateToProps, null)(PublicRoute);
