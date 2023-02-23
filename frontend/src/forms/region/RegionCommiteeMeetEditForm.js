import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import moment from "moment";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const RegionCommiteeMeetEditForm = () => {
  const [response, setResponse] = useState([]);

  const [rName, setrName] = useState("");
  const [nDate, setnDate] = useState("");
  const [mDay, setmDay] = useState("");
  const [mDate, setmDate] = useState("");
  const [mTime, setmTime] = useState("");
  const [mVenue, setmVenue] = useState("");
  const [budgetYear, setbudgetYear] = useState("");
  const [reporterName, setreporterName] = useState("");
  const [agendaPoint, setagendaPoint] = useState("");
  const [rSecretary, setrSecretary] = useState("");
  const [rJtSecretary1, setrJtSecretary1] = useState("");
  const [rJtSecretary2, setrJtSecretary2] = useState("");

  const navigate = useNavigate();
  const responseId = useParams();

  const EditForm = () => {
    axios
      .get(
        `http://127.0.0.1:8000/api/forms/region/reg-committee-meet/${responseId.id}/`
      )
      .then(function (res) {
        setResponse(res.data);
        console.log(res.data);
        setrName(res.data.rName);
        setnDate(res.data.nDate);
        setmDay(res.data.mDay);
        setmDate(res.data.mDate);
        setmTime(res.data.mTime);
        setmVenue(res.data.mVenue);
        setbudgetYear(res.data.budgetYear);
        setreporterName(res.data.reporterName);
        setagendaPoint(res.data.agendaPoint);
        setrSecretary(res.data.rSecretary);
        setrJtSecretary1(res.data.rJtSecretary1);
        setrJtSecretary2(res.data.rJtSecretary2);
      });
  };

  useEffect(() => {
    EditForm();
  }, []);

  const redirectToResponse = (id) => {
    navigate(`/rcommitteemeet-response/${id}`, { replace: true });
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
    formField.append("mVenue", mVenue);
    formField.append("budgetYear", budgetYear);
    formField.append("reporterName", reporterName);
    formField.append("agendaPoint", agendaPoint);
    formField.append("rSecretary", rSecretary);
    formField.append("rJtSecretary1", rJtSecretary1);
    formField.append("rJtSecretary2", rJtSecretary2);

    await axios({
      method: "put",
      url: `/api/forms/region/reg-committee-meet/${response.id}/`,
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
              <h2>Region Committee Meet</h2>
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

            <Form.Group as={Col} controlId="noticeDate">
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
            <Form.Label>Venue</Form.Label>
            <Form.Control
              placeholder="Address"
              name="mVenue"
              value={mVenue}
              onChange={(e) => setmVenue(e.target.value)}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="forTheYear">
              <Form.Label>Budget For the Year</Form.Label>
              <Form.Control
                placeholder="20XX-XX"
                name="budgetYear"
                value={budgetYear}
                onChange={(e) => setbudgetYear(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="meetingCity">
              <Form.Label>Report By</Form.Label>
              <Form.Control
                placeholder="Editor Name"
                name="reporterName"
                value={reporterName}
                onChange={(e) => setreporterName(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridZip">
            <Form.Label>Agenda Point</Form.Label>
            <Form.Control
              placeholder="Add an additional point if needed"
              name="agendaPoint"
              value={agendaPoint}
              onChange={(e) => setagendaPoint(e.target.value)}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Region Secretary</Form.Label>
              <Form.Control
                placeholder="Add an additional point if needed"
                name="rSecretary"
                value={rSecretary}
                onChange={(e) => setrSecretary(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Region Jt. Secretary</Form.Label>
              <Form.Control
                placeholder="Jt. Secretary 1"
                name="rJtSecretary1"
                value={rJtSecretary1}
                onChange={(e) => setrJtSecretary1(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Region Jt. Secretary</Form.Label>
              <Form.Control
                placeholder="Jt. Secretary 2"
                name="rJtSecretary2"
                value={rJtSecretary2}
                onChange={(e) => setrJtSecretary2(e.target.value)}
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

export default RegionCommiteeMeetEditForm;
