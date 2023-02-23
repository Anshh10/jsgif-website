import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userActions } from "../_actions";
import { useDispatch } from "react-redux";
import jwt from "jwt-decode";

function Login2() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleUserNameChange = (e) => {
    const { name, value } = e.target;
    setUsername(value);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSubmitted(true);
    if (username && password) {
      login(username, password);
    }
  };

  async function login(username, password) {
    let formField = new FormData();

    formField.append("username", username);
    formField.append("password", password);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/user/login/jwt-token/",
      data: formField,
    })
      .then((res) => {
        console.log("Login", res.data);
        const user = jwt(res.data.access);
        sessionStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(userActions.login(user));
        navigate("/");
      })
      .catch((err) => {
        console.log("LoginError", err);
        setErrorMsg("Invalid User Name and Password");
      });
  }
  return (
    <div>
      <div className="login-box">
        <Container>
          <Row>
            <Col>
              <h2>Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className={
                    "user-box" + (submitted && !username ? " has-error" : "")
                  }
                  controlId="formBasicEmail"
                >
                  <Form.Label bsPrefix="customLabel">User name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    bsPrefix="customInput"
                    value={username}
                    onChange={handleUserNameChange}
                  />
                  {submitted && !username && (
                    <div className="help-block">Username is required</div>
                  )}
                </Form.Group>

                <Form.Group
                  className={
                    "user-box" + (submitted && !password ? " has-error" : "")
                  }
                  controlId="formBasicPassword"
                >
                  <Form.Label bsPrefix="customLabel">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    bsPrefix="customInput"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {submitted && !password && (
                    <div className="help-block">Password is required</div>
                  )}
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <div className="has-error">
                  <div className="help-block">{errorMsg}</div>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Login2;
