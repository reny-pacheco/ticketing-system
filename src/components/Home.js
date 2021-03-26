import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Home.css";

import axios from "axios";
import { userStatus } from "../features/user/userSlice";
import {
  Calendar3,
  PersonPlusFill,
  QuestionDiamondFill,
} from "react-bootstrap-icons";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   function isLoggedIn() {
  //     axios
  //       .get("http://localhost:3000/isLoggedIn")
  //       .then((res) => dispatch(userStatus(res.data)))
  //       .catch((err) => {
  //         dispatch(userStatus(err.data));
  //         console.log(err.data);
  //       });
  //   }
  //   isLoggedIn();
  // }, [dispatch]);

  return (
    <div className="home">
      <div className="ticket d-flex flex-row-reverse">
        <Button className="  btn-sm mt-2 mr-2 btn-warning">
          {"  "}
          <PersonPlusFill className="m-1 " />{" "}
          <Link
            to="/ticket-status"
            className="btn-link text-dark font-weight-bold"
          >
            Check ticket status
          </Link>
        </Button>
        <Button className="  btn-sm mt-2 mr-2 btn-success">
          {"  "}
          <PersonPlusFill className="m-1 text-light" />{" "}
          <Link
            to="/create-ticket"
            className="btn-link text-light font-weight-bold"
          >
            Create New Ticket
          </Link>
        </Button>
      </div>
      <div className="container bg-light mt-2 mb-2">
        <h5 className="text-left p-2 font-weight-bold">
          Frequently Asked Question
        </h5>
        <div className="list text-left ml-4 pb-2">
          <div className="list-item">
            <QuestionDiamondFill className="text-primary" />
            {"   "}
            <Link to="">How to view my grades</Link>
          </div>
          <div className="list-item">
            <QuestionDiamondFill className="text-primary" />
            {"  "}
            <Link to="">Available Payment Methods</Link>
          </div>
          <div className="list-item">
            <QuestionDiamondFill className="text-primary" />
            {"  "}
            <Link to="">Dropping and Adding Subject</Link>
          </div>
          <div className="list-item">
            <QuestionDiamondFill className="text-primary" />
            {"  "}
            <Link to="">How to shift course or strand</Link>
          </div>
        </div>
      </div>
      <div className="container bg-light mt-2 mb-2">
        <h5 className="text-left p-2 font-weight-bold">
          Virtual Class Schedule{" "}
        </h5>
        <div className="list text-left ml-4 pb-2 mb-4">
          <div className="list-item">
            <Calendar3 className="text-primary" />
            {"  "}
            <Link to="">1st yr - Computer Science</Link>
          </div>
          <div className="list-item">
            <Calendar3 className="text-primary" />
            {"  "}
            <Link to="">3rd yr - Information Technology</Link>
          </div>
          <div className="list-item">
            <Calendar3 className="text-primary" />
            {"  "}
            <Link to="">Grade 10 - STEM</Link>
          </div>
          <div className="list-item">
            <Calendar3 className="text-primary" />
            {"  "}
            <Link to="">2nd yr - Computer Engineering</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
