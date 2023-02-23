import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import moment from "moment";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const FedCCMForm = () => {
  const [nDate, setnDate] = useState("");
  const [mYear, setmYear] = useState("");
  const [mDay, setmDay] = useState("");
  const [mDate, setmDate] = useState("");
  const [mTime, setmTime] = useState("00:00");
  const [mAddress, setmAddress] = useState("");
  const [mCity, setmCity] = useState("");
  const [mState, setmState] = useState("");
  const [mZip, setmZip] = useState("");
  const [presName, setPresName] = useState("");
  const [presyear, setPresyear] = useState("");
  const [lastyearMinutesFYear, setLastyearMinutesFYear] = useState("");
  const [secyear, setSecyear] = useState("");
  const [unAuditedAccFYear, setUnAuditedAccFYear] = useState("");
  const [grpContibutionFYear, setGrpContibutionFYear] = useState("");
  const [fedSecretaryGen, setFedSecretaryGen] = useState("");
  const [fedSecretary, setFedSecretary] = useState("");
  const [fedJtSecretary, setFedJtSecretary] = useState("");
  const [agendaPoint, setAgendaPoint] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [emailList, setEmailList] = useState([]);

  const handleInputChange = (e) => {
    setEmailInput(e.target.value);
    const newValue = e.target.value.replace(/\s/g, ""); // replace all spaces with empty string
    setEmailList(newValue);
    console.log(newValue);
  };

  const redirectToResponse = (id) => {
    navigate(`/fed-ccm-response/${id}`, { replace: true });
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
    formField.append("mYear", mYear);
    formField.append("mDay", mDay);
    formField.append("mDate", mDate);
    formField.append("mTime", mTime);
    formField.append("mAddress", mAddress);
    formField.append("mCity", mCity);
    formField.append("mState", mState);
    formField.append("mZip", mZip);
    formField.append("presName", presName);
    formField.append("presyear", presyear);
    formField.append("lastyearMinutesFYear", lastyearMinutesFYear);
    formField.append("secyear", secyear);
    formField.append("unAuditedAccFYear", unAuditedAccFYear);
    formField.append("grpContibutionFYear", grpContibutionFYear);
    formField.append("fedSecretaryGen", fedSecretaryGen);
    formField.append("fedSecretary", fedSecretary);
    formField.append("fedJtSecretary", fedJtSecretary);
    formField.append("agendaPoint", agendaPoint);
    formField.append("emailList", emailList);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/forms/federation/fed-ccm/",
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

            <Form.Group as={Col} controlId="mYear">
              <Form.Label>CCM Meet for the year</Form.Label>
              <Form.Control
                placeholder="20XX-XX (Meeting of Central Council Members of JSGIF for the year)"
                name="mYear"
                value={mYear}
                onChange={(e) => setmYear(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="mDate">
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

            <Form.Group as={Col} controlId="mTime">
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
            <Form.Group as={Col} controlId="mAddress">
              <Form.Label>Meeting Address</Form.Label>
              <Form.Control
                placeholder="Meeting Address"
                name="mAddress"
                value={mAddress}
                onChange={(e) => setmAddress(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="mCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                placeholder="Meeting City"
                name="mCity"
                value={mCity}
                onChange={(e) => setmCity(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="mState">
              <Form.Label>State</Form.Label>
              <Form.Control
                placeholder="Meeting State"
                name="mState"
                value={mState}
                onChange={(e) => setmState(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="mZip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                placeholder="Meeting Zipcode"
                name="mZip"
                value={mZip}
                onChange={(e) => setmZip(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="presName">
              <Form.Label>JSGIF President</Form.Label>
              <Form.Control
                placeholder="President's Name"
                name="presName"
                value={presName}
                onChange={(e) => setPresName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="presyear">
              <Form.Label>President Term</Form.Label>
              <Form.Control
                placeholder="President's Term"
                name="presyear"
                value={presyear}
                onChange={(e) => setPresyear(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="lastyearMinutesFYear">
              <Form.Label>Last CCM Date</Form.Label>
              <Form.Control
                type="date"
                name="lastyearMinutesFYear"
                value={lastyearMinutesFYear}
                onChange={(e) => setLastyearMinutesFYear(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="fedSecretaryGen">
              <Form.Label>JSGIF Secretary General</Form.Label>
              <Form.Control
                placeholder="Secretary General's Name"
                name="fedSecretaryGen"
                value={fedSecretaryGen}
                onChange={(e) => setFedSecretaryGen(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="secyear">
              <Form.Label>Secretary General Term</Form.Label>
              <Form.Control
                placeholder="Secretary General's Term"
                name="secyear"
                value={secyear}
                onChange={(e) => setSecyear(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="unAuditedAccFYear">
              <Form.Label>
                Present & approve the Unaudited Accounts for the year
              </Form.Label>
              <Form.Control
                placeholder="20XX-XX"
                name="unAuditedAccFYear"
                value={unAuditedAccFYear}
                onChange={(e) => setUnAuditedAccFYear(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="grpContibutionFYear">
              <Form.Label>
                Approve the amount of Group Contribution for the year
              </Form.Label>
              <Form.Control
                placeholder="20XX-XX"
                name="grpContibutionFYear"
                value={grpContibutionFYear}
                onChange={(e) => setGrpContibutionFYear(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="fedSecretary">
              <Form.Label>Secretary</Form.Label>
              <Form.Control
                placeholder="Name of Secretary"
                name="fedSecretary"
                value={fedSecretary}
                onChange={(e) => setFedSecretary(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="fedJtSecretary">
              <Form.Label>Jt. Secretary</Form.Label>
              <Form.Control
                placeholder="Name of Jt. Secretary"
                name="fedJtSecretary"
                value={fedJtSecretary}
                onChange={(e) => setFedJtSecretary(e.target.value)}
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
                onChange={(e) => setAgendaPoint(e.target.value)}
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

export default FedCCMForm;
