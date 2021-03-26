import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./ContactForm.css";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userStatus } from "../features/user/userSlice";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const { from } = state || { from: { pathname: "/" } };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", user);
      if (res.data === true) {
        dispatch(userStatus(true));
        console.log(document.cookie.token);
        localStorage.setItem("state", JSON.stringify("auth-user"));
        from.pathname !== "/" ? history.push(from.pathname) : history.push("/");
      }
    } catch (err) {
      setError((error) => (error = err.response.data.errors));
    }
  };
  console.log(from.pathname);

  return (
    <Card className="px-0 mt-4 col-sm-10 col-md-4 shadow">
      <h5 className="p-2 form-title mt-3 mr-auto pl-4">Login</h5>
      <Card.Body>
        <p className="text-danger">{error}</p>
        <Form type="submit">
          <Form.Group>
            <Form.Control
              placeholder="example@email.com"
              size="md"
              className="input"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder="Password"
              size="md"
              name="password"
              className="input"
              type="password"
              onChange={handleChange}
            />
          </Form.Group>

          <Button className="col-sm-12 pt-1 btn-sm px-3 mt-2" onClick={login}>
            Login
          </Button>
          <p className="mt-3">
            Don't have an account?{" "}
            <Link to="/register" className="link">
              Register here
            </Link>
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
