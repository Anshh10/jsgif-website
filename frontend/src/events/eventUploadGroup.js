import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const EventUploadGroup = () => {
  const [grpName, setGrpName] = useState("");
  const [eTitle, setETitle] = useState("");
  const [eDescription, setEDescription] = useState("");
  const [eThumbnail, setEThumbnail] = useState(null);
  const [eStartDate, setEStartDate] = useState("");
  const [eStartTime, setEStartTime] = useState("");
  const [eEndDate, setEEndDate] = useState("");
  const [eEndTime, setEEndTime] = useState("");
  const [eCity, setECity] = useState("");
  const [ePhoto1, setEPhoto1] = useState(null);
  const [ePhoto2, setEPhoto2] = useState(null);
  const [ePhoto3, setEPhoto3] = useState(null);

  async function FormSubmit(event) {
    event.preventDefault();
    let formField = new FormData();

    formField.append("grpName", grpName);
    formField.append("eTitle", eTitle);
    formField.append("eDescription", eDescription);
    if (eThumbnail !== null) {
      formField.append("eThumbnail", eThumbnail);
    }
    formField.append("eStartDate", eStartDate);
    formField.append("eStartTime", eStartTime);
    formField.append("eEndDate", eEndDate);
    formField.append("eEndTime", eEndTime);
    formField.append("eCity", eCity);
    if (ePhoto1 !== null) {
      formField.append("ePhoto1", ePhoto1);
    }
    if (ePhoto2 !== null) {
      formField.append("ePhoto2", ePhoto2);
    }
    if (ePhoto3 !== null) {
      formField.append("ePhoto3", ePhoto3);
    }

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/events/group/add-event/",
      data: formField,
    })
      .then(function (response) {
        console.log(response);
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
              <h2>Group Event Upload</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="grpName">
              <Form.Label>Group Name</Form.Label>
              <Form.Control
                name="grpName"
                value={grpName}
                onChange={(e) => setGrpName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="eTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control
                name="eTitle"
                value={eTitle}
                onChange={(e) => setETitle(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="eDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                as="textarea"
                name="eDescription"
                value={eDescription}
                onChange={(e) => setEDescription(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="eThumbnail">
              <Form.Label>Thumbnail</Form.Label>
              <Form.Control
                type="file"
                name="eThumbnail"
                onChange={(e) => setEThumbnail(e.target.files[0])}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="eStartDate">
              <Form.Label>Event Start Date</Form.Label>
              <Form.Control
                type="date"
                name="eStartDate"
                value={eStartDate}
                onChange={(e) => setEStartDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="eStartTime">
              <Form.Label>Event Start Time</Form.Label>
              <Form.Control
                type="time"
                name="eStartTime"
                value={eStartTime}
                onChange={(e) => setEStartTime(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="eEndDate">
              <Form.Label>Event End Date</Form.Label>
              <Form.Control
                type="date"
                name="eEndDate"
                value={eEndDate}
                onChange={(e) => setEEndDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="eEndTime">
              <Form.Label>Event End Time</Form.Label>
              <Form.Control
                type="time"
                name="eEndTime"
                value={eEndTime}
                onChange={(e) => setEEndTime(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="eCity">
              <Form.Label>Event City</Form.Label>
              <Form.Control
                name="eCity"
                value={eCity}
                onChange={(e) => setECity(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="ePhoto1">
              <Form.Label>Event Photos</Form.Label>
              <Form.Control
                type="file"
                name="ePhoto1"
                onChange={(e) => setEPhoto1(e.target.files[0])}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="ePhoto2">
              <Form.Label>Event Photos</Form.Label>
              <Form.Control
                type="file"
                name="ePhoto2"
                onChange={(e) => setEPhoto2(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="ePhoto3">
              <Form.Label>Event Photos</Form.Label>
              <Form.Control
                type="file"
                name="ePhoto3"
                onChange={(e) => setEPhoto3(e.target.files[0])}
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

export default EventUploadGroup;
