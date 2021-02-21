import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getStatus, userStatus } from "../features/contacts/userSlice";

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
        <h6 className="text-light">Ask.com</h6>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link className="navlink">
          <Link to="/" className="text-light Link">
            Home
          </Link>
        </Nav.Link>
        {value === false && (
          <>
            <Nav.Link className="navlink">
              <Link to="/login" className="text-light Link">
                Login
              </Link>
            </Nav.Link>
          </>
        )}
        {value === true && (
          <>
            <Nav.Link
              className=" text-light logout p-0 Link pt-1 ml-2"
              onClick={logout}
            >
              Logout
            </Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
