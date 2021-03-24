import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";
import { getStatus } from "../features/user/userSlice";

const PrivateRoute = ({ children, ...rest }) => {
  const value = useSelector(getStatus);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return value === true ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoute;
