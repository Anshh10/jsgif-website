import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import moment from "moment";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [city, setCity] = useState("");
  const [grp, setGrp] = useState("");
  const [region, setRegion] = useState("");
  const [message, setMessage] = useState("");

  const redirectToResponse = () => {
    navigate(`/`, { replace: true });
  };

  const navigate = useNavigate();

  async function FormSubmit(event) {
    event.preventDefault();
    let formField = new FormData();

    formField.append("name", name);
    formField.append("contactNum", contactNum);
    formField.append("city", city);
    formField.append("grp", grp);
    formField.append("region", region);
    formField.append("message", message);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/forms/contactus/",
      data: formField,
    })
      .then(function (response) {
        console.log(response);
        redirectToResponse();
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
              <h2>Federation AGM Notice</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="contactNum">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                placeholder="Phone Number"
                name="contactNum"
                value={contactNum}
                onChange={(e) => setContactNum(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="Name of your city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="grp">
              <Form.Label>Group Name</Form.Label>
              <Form.Control
                placeholder="Group Name (if applicable)"
                name="grp"
                value={grp}
                onChange={(e) => setGrp(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="region">
              <Form.Label>Region</Form.Label>
              <Form.Control
                placeholder="Region Name (if applicable)"
                name="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Type your message here"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Button className="btn--outline--dark" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactUs;
