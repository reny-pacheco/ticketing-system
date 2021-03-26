import React from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import axios from "axios";

import Header from "./components/Header";
import Home from "./components/Home";
import CreateTicket from "./components/CreateTicket";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Tickets from "./components/Tickets";
import { getStatus } from "./features/user/userSlice";
import { useSelector } from "react-redux";

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
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/create-ticket" component={CreateTicket} />
        <PrivateRoute path="/ticket-status" component={Tickets} />
      </Switch>

      <footer> &#169; Reny Vargas Pacheco</footer>
    </div>
  );
}

export default App;
