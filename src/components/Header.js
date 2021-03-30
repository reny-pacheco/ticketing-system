import { React, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { useSelector, useDispatch } from "react-redux";
import {
  getStatus,
  userStatus,
  userInfo,
  getUserProfile,
} from "../features/user/userSlice";

import axios from "axios";

const Header = () => {
  const user = useSelector(getStatus);
  const userData = useSelector(getUserProfile);
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    axios.get("http://localhost:3000/logout");
    localStorage.removeItem("state");
    dispatch(userStatus(false));
    dispatch(userInfo({}));
    history.push("/login");
  };

  useEffect(() => {
    const hasAuthUser = JSON.parse(localStorage.getItem("state"));
    if (hasAuthUser == "auth-user") {
      dispatch(userStatus(true));
    } else {
      dispatch(userStatus(false));
    }
  }, []);

  return (
    <Navbar
      variant="dark"
      className="d-flex flex-row justify-content-between .8rem bg-primary"
    >
      <Navbar.Brand className="logo text-primary font-weight-bold p-0">
        <Link to="/" className="text-light logo">
          Ask.com
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Link to="/" className="text-light Link mr-2 my-auto text-center">
          Home
        </Link>

        {user ? (
          <>
            <Dropdown as={ButtonGroup} size="sm" className="drop">
              <Button variant="primary" className="logout-btn ">
                {userData.firstname}
              </Button>

              <Dropdown.Toggle
                split
                variant="primary"
                id="dropdown-split-basic"
                className="toggle"
              />

              <Dropdown.Menu className="logout">
                <Dropdown.Item className="logout-text" onClick={logout}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) : (
          <>
            <Link to="/login" className="text-light Link">
              Login
            </Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
