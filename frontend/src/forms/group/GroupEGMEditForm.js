import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import moment from "moment";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import SecurePageSection from "../../SecurePageSection";

const GroupEGMEditForm = () => {
  const [response, setResponse] = useState([]);

  const [gName, setgName] = useState("");
  const [nDate, setnDate] = useState("");
  const [mDay, setmDay] = useState("");
  const [mDate, setmDate] = useState("");
  const [mTime, setmTime] = useState("");
  const [mAddress, setmAddress] = useState("");
  const [mCity, setmCity] = useState("");
  const [mState, setmState] = useState("");
  const [mZip, setmZip] = useState("");
  const [electionForYear, setElectionForYear] = useState("");
  const [grpSecretary, setGrpSecretary] = useState("");
  const [agendaPoint, setagendaPoint] = useState("");
  const [electionSDay, setElectionSDay] = useState("");
  const [electionSDate, setElectionSDate] = useState("");
  const [electionSTime, setElectionSTime] = useState("");
  const [electionWDay, setElectionWDay] = useState("");
  const [electionWDate, setElectionWDate] = useState("");
  const [electionWTime, setElectionWTime] = useState("");
  const [contestantsfeesFYear, setContestantsfeesFYear] = useState("");
  const [proposerfeesFYear, setProposerfeesFYear] = useState("");

  const navigate = useNavigate();
  const responseId = useParams();

  const EditForm = () => {
    axios
      .get(`/api/forms/group/grp-egm/${responseId.id}/`)
      .then(function (res) {
        setResponse(res.data);
        console.log(res.data);
        setgName(res.data.gName);
        setnDate(res.data.nDate);
        setmDay(res.data.mDay);
        setmDate(res.data.mDate);
        setmTime(res.data.mTime);
        setmAddress(res.data.mAddress);
        setmCity(res.data.mCity);
        setmState(res.data.mState);
        setmZip(res.data.mZip);
        setElectionForYear(res.data.electionForYear);
        setGrpSecretary(res.data.grpSecretary);
        setagendaPoint(res.data.agendaPoint);
        setElectionSDay(res.data.electionSDay);
        setElectionSDate(res.data.electionSDate);
        setElectionSTime(res.data.electionSTime);
        setElectionWDay(res.data.electionWDay);
        setElectionWDate(res.data.electionWDate);
        setElectionWTime(res.data.electionWTime);
        setContestantsfeesFYear(res.data.contestantsfeesFYear);
        setProposerfeesFYear(res.data.proposerfeesFYear);
      });
  };

  useEffect(() => {
    EditForm();
  }, []);

  const redirectToResponse = (id) => {
    navigate(`/grpegm-response/${id}`, { replace: true });
  };

  const dateDay = (e) => {
    setmDate(e.target.value);
    let dayofdate = moment(e.target.value).format("dddd");
    setmDay(dayofdate);
  };

  const submitDateDay = (e) => {
    setElectionSDate(e.target.value);
    let dayofdate = moment(e.target.value).format("dddd");
    setElectionSDay(dayofdate);
  };

  const withdrawDateDay = (e) => {
    setElectionWDate(e.target.value);
    let dayofdate = moment(e.target.value).format("dddd");
    setElectionWDay(dayofdate);
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
    formField.append("electionForYear", electionForYear);
    formField.append("grpSecretary", grpSecretary);
    formField.append("agendaPoint", agendaPoint);
    formField.append("electionSDay", electionSDay);
    formField.append("electionSDate", electionSDate);
    formField.append("electionSTime", electionSTime);
    formField.append("electionWDay", electionWDay);
    formField.append("electionWDate", electionWDate);
    formField.append("electionWTime", electionWTime);
    formField.append("contestantsfeesFYear", contestantsfeesFYear);
    formField.append("proposerfeesFYear", proposerfeesFYear);

    await axios({
      method: "put",
      url: `/api/forms/group/grp-egm/${response.id}/`,
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
              <h2>Group EGM Notice</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="groupName">
              <Form.Label>Group Name</Form.Label>
              <Form.Control
                placeholder="Name of the Group"
                name="gName"
                value={gName}
                onChange={(e) => setgName(e.target.value)}
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

          <Row className="mb-3">
            <Form.Group as={Col} controlId="meetingAddress">
              <Form.Label>Meeting Address</Form.Label>
              <Form.Control
                placeholder="Address"
                name="mAddress"
                value={mAddress}
                onChange={(e) => setmAddress(e.target.value)}
              />
            </Form.Group>
          </Row>

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
              <Form.Label>Group Secretary</Form.Label>
              <Form.Control
                placeholder="Name of the Secretary"
                name="grpSecretary"
                value={grpSecretary}
                onChange={(e) => setGrpSecretary(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="ElectionforTheYear">
              <Form.Label>Election for the Year</Form.Label>
              <Form.Control
                placeholder="20XX-XX"
                name="electionForYear"
                value={electionForYear}
                onChange={(e) => setElectionForYear(e.target.value)}
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

          <Row className="mb-3">
            <h2>Election Nominations Information</h2>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="ElectionSDate">
              <Form.Label>Election Last Submission Date</Form.Label>
              <Form.Control
                type="date"
                name="electionSDate"
                value={electionSDate}
                onChange={submitDateDay}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="ElectionSDay">
              <Form.Label>Election Last Submission Day</Form.Label>
              <Form.Select
                defaultValue="Day"
                name="electionSDay"
                value={electionSDay}
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

            <Form.Group as={Col} controlId="ElectionSTime">
              <Form.Label>Election Last Submission Time</Form.Label>
              <Form.Control
                type="time"
                name="electionSTime"
                value={electionSTime}
                onChange={(e) => setElectionSTime(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="ElectionWDate">
              <Form.Label>Election Last Withdrawal Date</Form.Label>
              <Form.Control
                type="date"
                name="electionWDate"
                value={electionWDate}
                onChange={withdrawDateDay}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="ElectionWDay">
              <Form.Label>Election Last Withdrawal Day</Form.Label>
              <Form.Select
                defaultValue="Day"
                name="electionWDay"
                value={electionWDay}
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

            <Form.Group as={Col} controlId="ElectionWTime">
              <Form.Label>Election Last Withdrawal Time</Form.Label>
              <Form.Control
                type="time"
                name="electionWTime"
                value={electionWTime}
                onChange={(e) => setElectionWTime(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="contestantFee">
              <Form.Label>Contestants Fees Paid for the year</Form.Label>
              <Form.Control
                placeholder="20XX-XX"
                name="contestantsfeesFYear"
                value={contestantsfeesFYear}
                onChange={(e) => setContestantsfeesFYear(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="proposerFee">
              <Form.Label>
                Proposer and seconder Fees Paid for the year
              </Form.Label>
              <Form.Control
                placeholder="20XX-XX"
                name="proposerfeesFYear"
                value={proposerfeesFYear}
                onChange={(e) => setProposerfeesFYear(e.target.value)}
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

export default GroupEGMEditForm;
