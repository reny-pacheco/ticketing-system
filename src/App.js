import React from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { getStatus } from "./features/user/userSlice";
import { useSelector } from "react-redux";

import axios from "axios";

import Header from "./components/Header";
import Home from "./components/Home";
import CreateTicket from "./components/CreateTicket";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Tickets from "./components/Tickets";

axios.defaults.withCredentials = true;

function App() {
  const value = useSelector(getStatus);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* {value === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )} */}
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create-ticket">
          {value ? <CreateTicket /> : <Login />}
        </Route>
        <Route path="/ticket-status">{value ? <Tickets /> : <Login />}</Route>
        <Route path="*">
          <Home />
        </Route>
      </Switch>

      <footer> &#169; Reny Vargas Pacheco</footer>
    </div>
  );
}

export default App;
