import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import moment from "moment";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import SecurePageSection from "../../SecurePageSection";

const FedIDMeetEditForm = () => {
  const [response, setResponse] = useState([]);

  const [nDate, setnDate] = useState("");
  const [mDay, setmDay] = useState("");
  const [mDate, setmDate] = useState("");
  const [mTime, setmTime] = useState("");
  const [mAddress, setmAddress] = useState("");
  const [mCity, setmCity] = useState("");
  const [mState, setmState] = useState("");
  const [mZip, setmZip] = useState("");
  const [secretaryGen, setSecretaryGen] = useState("");
  const [secretary, setSecretary] = useState("");
  const [jtSecretary, setJtSecretary] = useState("");
  const [agendaPoint, setagendaPoint] = useState("");

  const navigate = useNavigate();
  const responseId = useParams();

  const EditForm = () => {
    axios
      .get(
        `http://127.0.0.1:8000/api/forms/federation/fed-idmeet/${responseId.id}`
      )
      .then(function (res) {
        setResponse(res.data);
        console.log(res.data);
        setnDate(res.data.nDate);
        setmDay(res.data.mDay);
        setmDate(res.data.mDate);
        setmTime(res.data.mTime);
        setmAddress(res.data.mAddress);
        setmCity(res.data.mCity);
        setmState(res.data.mState);
        setmZip(res.data.mZip);
        setSecretaryGen(res.data.secretaryGen);
        setSecretary(res.data.secretary);
        setJtSecretary(res.data.jtSecretary);
        setagendaPoint(res.data.agendaPoint);
      });
  };

  useEffect(() => {
    EditForm();
  }, []);

  const redirectToResponse = (id) => {
    navigate(`/fed-idmeet-response/${id}`, { replace: true });
  };

  const dateDay = (e) => {
    setmDate(e.target.value);
    let dayofdate = moment(e.target.value).format("dddd");
    setmDay(dayofdate);
  };

  async function FormSubmit(event) {
    event.preventDefault();
    let formField = new FormData();

    formField.append("nDate", nDate);
    formField.append("mDay", mDay);
    formField.append("mDate", mDate);
    formField.append("mTime", mTime);
    formField.append("mAddress", mAddress);
    formField.append("mCity", mCity);
    formField.append("mState", mState);
    formField.append("mZip", mZip);
    formField.append("secretaryGen", secretaryGen);
    formField.append("secretary", secretary);
    formField.append("jtSecretary", jtSecretary);
    formField.append("agendaPoint", agendaPoint);

    await axios({
      method: "put",
      url: `http://127.0.0.1:8000/api/forms/federation/fed-idmeet/${response.id}/`,
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
              <h2>Federation ID Meet</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="noiceDate">
              <Form.Label>Notice Date</Form.Label>
              <Form.Control
                type="date"
                name="nDate"
                value={nDate}
                onChange={(e) => setnDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="meetingDate">
              <Form.Label>Meeting Date</Form.Label>
              <Form.Control
                type="date"
                name="mDate"
                value={mDate}
                onChange={dateDay}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="meetingDay">
              <Form.Label>Meeting Day</Form.Label>
              <Form.Select
                defaultValue="Day"
                name="mDay"
                value={mDay}
                onChange={(e) => setmDay(e.target.value)}
              >
                <option>Sunday</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="meetingTime">
              <Form.Label>Meeting Time</Form.Label>
              <Form.Control
                type="time"
                name="mTime"
                value={mTime}
                onChange={(e) => setmTime(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="meetingAddress">
            <Form.Label>Meeting Address</Form.Label>
            <Form.Control
              placeholder="Address"
              name="mAddress"
              value={mAddress}
              onChange={(e) => setmAddress(e.target.value)}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="meetingCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="City"
                name="mCity"
                value={mCity}
                onChange={(e) => setmCity(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="meetingCity">
              <Form.Label>State</Form.Label>
              <Form.Control
                placeholder="State"
                name="mState"
                value={mState}
                onChange={(e) => setmState(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                placeholder="Zip Code"
                name="mZip"
                value={mZip}
                onChange={(e) => setmZip(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="secretaryName">
              <Form.Label>Federation Secretary General</Form.Label>
              <Form.Control
                placeholder="Name of the Secretary General"
                name="secretaryGen"
                value={secretaryGen}
                onChange={(e) => setSecretaryGen(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="Secretary1Name">
              <Form.Label>Federation Secretary</Form.Label>
              <Form.Control
                placeholder="Name of the Secretary"
                name="secretary"
                value={secretary}
                onChange={(e) => setSecretary(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="jtSecretary2Name">
              <Form.Label>Federation Jt. Secretary</Form.Label>
              <Form.Control
                placeholder="Name of the Jt. Secretary"
                name="jtSecretary"
                value={jtSecretary}
                onChange={(e) => setJtSecretary(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="agendaPoint">
              <Form.Label>Agenda Point</Form.Label>
              <Form.Control
                placeholder="Add an additional point if needed"
                name="agendaPoint"
                value={agendaPoint}
                onChange={(e) => setagendaPoint(e.target.value)}
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

export default FedIDMeetEditForm;
