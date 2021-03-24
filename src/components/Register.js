import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./ContactForm.css";
import axios from "axios";
import { useDispatch } from "react-redux";

import { userStatus } from "../features/user/userSlice";

import { Link, useHistory, useLocation } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { PersonPlusFill } from "react-bootstrap-icons";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { from } = state || { from: { pathname: "/" } };
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/register", user);
      if (res.data === true) {
        dispatch(userStatus(true));

        from.pathname !== "/" ? history.push(from.pathname) : history.push("/");
      }
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  };

  const { firstname, lastname, email, password } = errors;

  return (
    <Card className="px-0 mt-4 col-sm-10 col-md-4 shadow">
      <h5 className="p-2 form-title mt-3 mr-auto pl-4">Register</h5>
      <Card.Body>
        <Form type="submit">
          <Form.Row className="d-flex justify-content-evenly">
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Firstname"
                size="md"
                className={
                  "input " +
                  (firstname === "" || firstname === undefined
                    ? ""
                    : "border border-danger")
                }
                name="firstname"
                onChange={handleChange}
              />
              <small className="text-danger float-left">
                {errors.firstname}
              </small>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Lastname"
                name="lastname"
                size="md"
                className={
                  "input " +
                  (lastname === "" || lastname === undefined
                    ? ""
                    : "border border-danger")
                }
                onChange={handleChange}
              />
              <small className="text-danger float-left ">{lastname}</small>
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Control
              placeholder="Email"
              size="md"
              name="email"
              className={
                "input " +
                (email === "" || email === undefined
                  ? ""
                  : "border border-danger")
              }
              type="email"
              onChange={handleChange}
            />
            <small className="text-danger float-left  mb-2">{email}</small>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder="Password"
              size="md"
              name="password"
              className={
                "input " +
                (password === "" || password === undefined
                  ? ""
                  : "border border-danger")
              }
              type="password"
              onChange={handleChange}
            />
            <small className="text-danger float-left  mb-2">{password}</small>
          </Form.Group>

          <Button
            className="col-sm-12 pt-1 btn-sm px-3 mt-2"
            onClick={register}
          >
            {" "}
            <PersonPlusFill className="m-1 " /> Register
          </Button>
          <p className="mt-3">
            Already have an account?{" "}
            <Link to="/login" className="link">
              Login here
            </Link>
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Register;
