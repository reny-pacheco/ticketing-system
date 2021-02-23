import React from "react";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import { getStatus } from "./features/user/userSlice";
import { useSelector } from "react-redux";

import axios from "axios";

import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";

axios.defaults.withCredentials = true;

function App() {
  const value = useSelector(getStatus);

  return (
    <div className="App">
      <Header />
      {/* if user is not logged in  */}

      {/* Footer */}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {value === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
      </Switch>
      <footer> &#169; Reny Vargas Pacheco</footer>
    </div>
  );
}

export default App;
