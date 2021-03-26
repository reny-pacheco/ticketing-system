import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { getStatus } from "../features/user/userSlice";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const value = JSON.parse(localStorage.getItem("state"));
  const location = useLocation();
  console.log(value);

  return (
    <Route {...rest}>
      {value === "auth-user" ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
