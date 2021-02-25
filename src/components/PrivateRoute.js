import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { getStatus, userStatus } from "../features/user/userSlice";
import { useSelector } from "react-redux";

const PrivateRoute = ({ value, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      value === true ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: props.location }} />
      )
    }
  />
);

export default PrivateRoute;
