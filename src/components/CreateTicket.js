import { React, useState } from "react";
import "./ContactForm.css";
import { Link } from "react-router-dom";

import { Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { PersonPlusFill } from "react-bootstrap-icons";

const CreateTicket = () => {
  const [user, setUser] = useState({
    subject: "",
    course: "",
    studentnumber: "",
    email: "",
    description: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <Card className="px-0 mt-4 col-sm-10 col-md-6 shadow">
      <h5 className="p-2 form-title mt-3 mr-auto pl-4">Create Ticket</h5>
      <Card.Body>
        <Form type="submit">
          <Form.Group>
            <Form.Control
              as="select"
              placeholder="Area of Concern"
              size="md"
              name="areaConcern"
              className={
                "input "
                // (course === "" || course === undefined
                //   ? ""
                //   : "border border-danger")
              }
            >
              <option className="input" disabled>
                Select your concern
              </option>
              <option className="input">Enrollment</option>
              <option className="input">Assessment and Payment</option>
              <option className="input">Student Grade</option>
              <option className="input">
                Online Class {"(Schedule Conflict)"}
              </option>
              <option className="input">Registrar and Credentials</option>
            </Form.Control>
            {/* <small className="text-danger float-left">
                {errors.firstname}
              </small> */}
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder="Subject.. Your concern"
              size="md"
              name="subject"
              className={
                "input "
                // (subject === "" || subject === undefined
                //   ? ""
                //   : "border border-danger")
              }
              type="text"
              // onChange={handleChange}
            />
            {/* <small className="text-danger float-left  mb-2">{email}</small> */}
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Student number"
                size="md"
                className={
                  "input "
                  // (studentnumber === "" || studentnumber === undefined
                  //   ? ""
                  //   : "border border-danger")
                }
                name="studentnumber"
                // onChange={handleChange}
              />
              {/* <small className="text-danger float-left">
                {errors.firstname}
              </small> */}
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                as="select"
                placeholder="Course"
                size="md"
                name="course"
                className={
                  "input "
                  // (course === "" || course === undefined
                  //   ? ""
                  //   : "border border-danger")
                }
              >
                <option className="input" disabled>
                  Select your course
                </option>
                <option className="input">BSIT</option>
                <option className="input">BSCS</option>
              </Form.Control>
              {/* <small className="text-danger float-left">
                {errors.firstname}
              </small> */}
            </Form.Group>
          </Form.Row>

          <Form.Group>
            <Form.Control
              as="select"
              placeholder="campus"
              size="md"
              name="campus"
              className={
                "input "
                // (course === "" || course === undefined
                //   ? ""
                //   : "border border-danger")
              }
            >
              <option className="input" disabled>
                Select your school
              </option>
              <option className="input">School - MAKATI</option>
              <option className="input">School - MANILA</option>
              <option className="input">School - DAVAO</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder="Description"
              as="textarea"
              size="md"
              name=""
              className="input area"
              type="description"
              // onChange={handleChange}
            />
            {/* <small className="text-danger float-left  mb-2">{password}</small> */}
          </Form.Group>

          <Button
            className="col-sm-12 pt-1 btn-sm px-3 mt-2"
            // onClick={register}
          >
            {" "}
            <PersonPlusFill className="m-1 " /> Register
          </Button>
          <p className="mt-3 ">
            <Link to="/" className="link text-danger cancel">
              CANCEL
            </Link>
          </p>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default withRouter(CreateTicket);
