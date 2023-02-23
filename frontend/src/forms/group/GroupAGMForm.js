import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import moment from "moment";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import SecurePageSection from "../../SecurePageSection";
import { useEffect } from "react";

const GroupAGMForm = () => {
  const [regName, setRegName] = useState("south");
  const [gName, setgName] = useState("Madras Main");
  const [nDate, setnDate] = useState("");
  const [mDay, setmDay] = useState("");
  const [mDate, setmDate] = useState("");
  const [mTime, setmTime] = useState("00:00");
  const [mAddress, setmAddress] = useState("");
  const [mCity, setmCity] = useState("");
  const [mState, setmState] = useState("");
  const [mZip, setmZip] = useState("");
  const [mYear, setmYear] = useState("");
  const [secReportYear, setSecReportYear] = useState("");
  const [auditorFYear, setauditorFYear] = useState("");
  const [grpSecretary, setGrpSecretary] = useState("");
  const [agendaPoint, setagendaPoint] = useState("");

  const redirectToResponse = (id) => {
    navigate(`/grpagm-response/${id}`, { replace: true });
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

    formField.append("gName", gName);
    formField.append("nDate", nDate);
    formField.append("mDay", mDay);
    formField.append("mDate", mDate);
    formField.append("mTime", mTime);
    formField.append("mAddress", mAddress);
    formField.append("mCity", mCity);
    formField.append("mState", mState);
    formField.append("mZip", mZip);
    formField.append("secReportYear", secReportYear);
    formField.append("mYear", mYear);
    formField.append("auditorFYear", auditorFYear);
    formField.append("grpSecretary", grpSecretary);
    formField.append("agendaPoint", agendaPoint);

    await axios({
      method: "post",
      url: "/api/forms/group/grp-agm/",
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

  const [regions, setRegions] = useState([]);
  const fetchRegions = async () => {
    const response = await axios.get(`/user/region/`);
    console.log(response.data);
    setRegions(response.data);
  };
  useEffect(() => {
    fetchRegions();
  }, []);

  const [groups, setGroups] = useState([]);
  const fetchGroups = async () => {
    const response = await axios.get(`/user/${regName}/groups/`);
    console.log(response.data);
    setGroups(response.data);
  };
  useEffect(() => {
    fetchGroups();
  }, [regName]);

  return (
    <div>
      <Container>
        <Form onSubmit={FormSubmit}>
          <Row>
            <Col md={8}>
              <h2>Group AGM Notice</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="meetingDay">
              <Form.Label>Region Name</Form.Label>
              <Form.Select
                defaultValue="Day"
                name="mDay"
                value={regName}
                onChange={(e) => setRegName(e.target.value)}
                style={{ textTransform: "capitalize" }}
              >
                {regions.map((region, index) => (
                  <option key={index} style={{ textTransform: "capitalize" }}>
                    {region.region}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="gName">
              <Form.Label>Group Name</Form.Label>
              <Form.Select
                defaultValue="Null"
                name="gName"
                value={gName}
                onChange={(e) => setgName(e.target.value)}
                style={{ textTransform: "capitalize" }}
              >
                {groups.map((group, index) => (
                  <option key={index} style={{ textTransform: "capitalize" }}>
                    {group.group}
                  </option>
                ))}
              </Form.Select>
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
              <Form.Select defaultValue="Day" name="mDay" value={mDay} readOnly>
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
            <Form.Group as={Col} controlId="secReportYear">
              <Form.Label>Secretary's report For the Year</Form.Label>
              <Form.Control
                placeholder="20XX-XX"
                name="secReportYear"
                value={secReportYear}
                onChange={(e) => setSecReportYear(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="mYear">
              <Form.Label>Accounts For the Year</Form.Label>
              <Form.Control
                placeholder="20XX-XX"
                name="mYear"
                value={mYear}
                onChange={(e) => setmYear(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="auditorFYear">
              <Form.Label>Appoint Auditor For the Year</Form.Label>
              <Form.Control
                placeholder="20XX-XX"
                name="auditorFYear"
                value={auditorFYear}
                onChange={(e) => setauditorFYear(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="secretaryName">
              <Form.Label>Group Secretary</Form.Label>
              <Form.Control
                placeholder="Name of the Secretary"
                name="grpSecretary"
                value={grpSecretary}
                onChange={(e) => setGrpSecretary(e.target.value)}
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

export default GroupAGMForm;
