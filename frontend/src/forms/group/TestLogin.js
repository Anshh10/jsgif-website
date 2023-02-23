import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const TestLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const redirectToResponse = (id) => {
    navigate(`/login-api/${id}`, { replace: true });
  };

  const navigate = useNavigate();

  async function FormSubmit(event) {
    event.preventDefault();
    let formField = new FormData();

    formField.append("user", user);
    formField.append("password", password);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/login/",
      data: formField,
    })
      .then(function (response) {
        console.log(response);
        redirectToResponse(response.data.id);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <Container>
        <Form onSubmit={FormSubmit}>
          <Row>
            <Col md={8}>
              <h2>Login Form</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="user">
              <Form.Label>User</Form.Label>
              <Form.Control
                name="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="pass">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default TestLogin;
