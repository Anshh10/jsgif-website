import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import moment from "moment";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const RegionAGMEditForm = () => {
  const [response, setResponse] = useState([]);

  const [rName, setrName] = useState("");
  const [nDate, setnDate] = useState("");
  const [mDay, setmDay] = useState("");
  const [mDate, setmDate] = useState("");
  const [mTime, setmTime] = useState("");
  const [mAddress, setmAddress] = useState("");
  const [mCity, setmCity] = useState("");
  const [mState, setmState] = useState("");
  const [mZip, setmZip] = useState("");
  const [mYear, setmYear] = useState("");
  const [auditorFYear, setauditorFYear] = useState("");
  const [rSecretary, setrSecretary] = useState("");
  const [agendaPoint, setagendaPoint] = useState("");

  const navigate = useNavigate();
  const responseId = useParams();

  const EditForm = () => {
    axios
      .get(`/api/forms/region/reg-agm/${responseId.id}/`)
      .then(function (res) {
        setResponse(res.data);
        console.log(res.data);
        setrName(res.data.rName);
        setnDate(res.data.nDate);
        setmDay(res.data.mDay);
        setmDate(res.data.mDate);
        setmTime(res.data.mTime);
        setmAddress(res.data.mAddress);
        setmCity(res.data.mCity);
        setmState(res.data.mState);
        setmZip(res.data.mZip);
        setmYear(res.data.mYear);
        setauditorFYear(res.data.auditorFYear);
        setrSecretary(res.data.rSecretary);
        setagendaPoint(res.data.agendaPoint);
      });
  };

  useEffect(() => {
    EditForm();
  }, []);

  const redirectToResponse = (id) => {
    navigate(`/ragm-response/${id}`, { replace: true });
  };

  const dateDay = (e) => {
    setmDate(e.target.value);
    let dayofdate = moment(e.target.value).format("dddd");
    setmDay(dayofdate);
  };

  async function FormSubmit(event) {
    event.preventDefault();
    let formField = new FormData();

    formField.append("rName", rName);
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
    formField.append("rSecretary", rSecretary);
    formField.append("agendaPoint", agendaPoint);

    await axios({
      method: "put",
      url: `/api/forms/region/reg-agm/${response.id}/`,
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
              <h2>Region AGM Notice</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="regionName">
              <Form.Label>Region Name</Form.Label>
              <Form.Control
                placeholder="Name of the Region"
                name="rName"
                value={rName}
                onChange={(e) => setrName(e.target.value)}
              />
            </Form.Group>

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
              <Form.Select defaultValue="Day" name="mDay" value={mDay}>
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
            <Form.Group as={Col} controlId="forTheYear">
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

            <Form.Group as={Col} controlId="secretaryName">
              <Form.Label>Region Secretary</Form.Label>
              <Form.Control
                placeholder="Name of the Secretary"
                name="rSecretary"
                value={rSecretary}
                onChange={(e) => setrSecretary(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridZip">
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

export default RegionAGMEditForm;
