import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import { useSelector, useDispatch } from "react-redux";
import { getStatus, userStatus } from "../features/user/userSlice";

import axios from "axios";

const Header = () => {
  const value = useSelector(getStatus);
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    axios.get("http://localhost:3000/logout");
    dispatch(userStatus(false));
    history.push("/login");
  };

  return (
    <Navbar
      variant="dark"
      className="d-flex flex-row justify-content-between .8rem bg-primary"
    >
      <Navbar.Brand
        href="#home"
        className="logo text-primary font-weight-bold p-0"
      >
        <Link to="/" className="text-light logo">
          Ask.com
        </Link>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Link to="/" className="text-light Link mr-2 my-auto text-center">
          Home
        </Link>
        {value === false && (
          <>
            <Link to="/login" className="text-light Link">
              Login
            </Link>
          </>
        )}
        {value === true && (
          <>
            <Dropdown as={ButtonGroup} size="sm" className="drop">
              <Button variant="primary" className="logout-btn ">
                Reny
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
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
