import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import moment from "moment";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const FedAGMForm = () => {
  const [nDate, setnDate] = useState("");
  const [mDay, setmDay] = useState("");
  const [mDate, setmDate] = useState("");
  const [mTime, setmTime] = useState("00:00");
  const [mAddress, setmAddress] = useState("");
  const [mCity, setmCity] = useState("");
  const [mState, setmState] = useState("");
  const [mZip, setmZip] = useState("");
  const [mYear, setmYear] = useState("");
  const [auditorFYear, setauditorFYear] = useState("");
  const [fedSecretaryGen, setFedSecretaryGen] = useState("");
  const [fedSecretary, setFedSecretary] = useState("");
  const [fedJtSecretary, setFedJtSecretary] = useState("");
  const [agendaPoint, setagendaPoint] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [emailList, setEmailList] = useState([]);

  const handleInputChange = (e) => {
    setEmailInput(e.target.value);
    const newValue = e.target.value.replace(/\s/g, ""); // replace all spaces with empty string
    setEmailList(newValue);
    console.log(newValue);
  };

  const redirectToResponse = (id) => {
    navigate(`/fed-agm-response/${id}`, { replace: true });
  };

  const navigate = useNavigate();

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
    formField.append("mYear", mYear);
    formField.append("auditorFYear", auditorFYear);
    formField.append("fedSecretaryGen", fedSecretaryGen);
    formField.append("fedSecretary", fedSecretary);
    formField.append("fedJtSecretary", fedJtSecretary);
    formField.append("agendaPoint", agendaPoint);
    formField.append("emailList", emailList);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/forms/federation/fed-agm/",
      data: formField,
    })
      .then(function(response) {
        console.log(response);
        redirectToResponse(response.data.id);
      })
      .catch(function(error) {
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
            <Form.Group as={Col} controlId="noiceDate">
              <Form.Label>Notice Date</Form.Label>
              <Form.Control
                type="date"
                name="nDate"
                value={nDate}
                onChange={(e) => setnDate(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="meetingDate">
              <Form.Label>Meeting Date</Form.Label>
              <Form.Control
                type="date"
                name="mDate"
                value={mDate}
                onChange={dateDay}
              />
            </Form.Group>

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
            <Form.Group as={Col} controlId="accountsForTheYear">
              <Form.Label>Accounts For the Year</Form.Label>
              <Form.Control
                placeholder="20XX-XX"
                name="mYear"
                value={mYear}
                onChange={(e) => setmYear(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="forTheYear">
              <Form.Label>Appoint Auditor For the Year</Form.Label>
              <Form.Control
                placeholder="20XX-XX"
                name="auditorFYear"
                value={auditorFYear}
                onChange={(e) => setauditorFYear(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="secretaryName">
              <Form.Label>Secretary General</Form.Label>
              <Form.Control
                placeholder="Name of the Secretary General"
                name="fedSecretaryGen"
                value={fedSecretaryGen}
                onChange={(e) => setFedSecretaryGen(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="jtsecretaryName">
              <Form.Label>Secretary</Form.Label>
              <Form.Control
                placeholder="Name of the Secretary"
                name="fedSecretary"
                value={fedSecretary}
                onChange={(e) => setFedSecretary(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="jtsecretaryName">
              <Form.Label>Jt. Secretary</Form.Label>
              <Form.Control
                placeholder="Name of the Jt Secretary"
                name="fedJtSecretary"
                value={fedJtSecretary}
                onChange={(e) => setFedJtSecretary(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="agendPoints">
              <Form.Label>Agenda Point</Form.Label>
              <Form.Control
                placeholder="Add an additional point if needed"
                name="agendaPoint"
                value={agendaPoint}
                onChange={(e) => setagendaPoint(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="emailInput">
              <Form.Label>Mail the Notice to</Form.Label>
              <Form.Control
                placeholder="Add each email address after a comma. Example = xyz@gmail.com, abc@gmail.com"
                name="emailInput"
                value={emailInput}
                onChange={(e) => handleInputChange(e)}
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

export default FedAGMForm;
