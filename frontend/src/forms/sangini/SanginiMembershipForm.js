import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import moment from "moment";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const SanginiMembershipForm = () => {
  const [gName, setgName] = useState("");
  const [memName, setMemName] = useState("");
  const [memBDay, setMemBDay] = useState("");
  const [memADate, setMemADate] = useState("");
  const [memAddress, setMemAddress] = useState("");
  const [isProfessional, setIsProfessional] = useState("");
  const [professionName, setProfessionName] = useState("");
  const [professionAddress, setProfessionAddress] = useState("");
  const [professionContact, setProfessionContact] = useState("");
  const [memContact, setMemContact] = useState("");
  const [memEmail, setMemEmail] = useState("");
  const [husName, setHusName] = useState("");
  const [husBDate, setHusBDate] = useState("");
  const [husProfessionName, setHusProfessionName] = useState("");
  const [husProfessionAddress, setHusProfessionAddress] = useState("");
  const [husContact, setHusContact] = useState("");
  const [sponsName, setSponsName] = useState("");
  const [sponsMemNumber, setSponsMemNumber] = useState("");

  //  const redirectToRagm = (id) => {
  //   navigate(`/ragm-response/${id}`, { replace: true });
  //};

  const navigate = useNavigate();

  async function FormSubmit(event) {
    event.preventDefault();
    let formField = new FormData();

    formField.append("gName", gName);
    formField.append("memName", memName);
    formField.append("memBDay", memBDay);
    formField.append("memADate", memADate);
    formField.append("memAddress", memAddress);
    formField.append("isProfessional", isProfessional);
    formField.append("professionName", professionName);
    formField.append("professionAddress", professionAddress);
    formField.append("professionContact", professionContact);
    formField.append("memContact", memContact);
    formField.append("memEmail", memEmail);
    formField.append("husName", husName);
    formField.append("husBDate", husBDate);
    formField.append("husProfessionName", husProfessionName);
    formField.append("husProfessionAddress", husProfessionAddress);
    formField.append("husContact", husContact);
    formField.append("sponsName", sponsName);
    formField.append("sponsMemNumber", sponsMemNumber);

    await axios({
      method: "post",
      // url: "http://127.0.0.1:8000/api/forms/group/grpegm/",
      data: formField,
    })
      .then(function (response) {
        console.log(response);
        //        redirectToRagm(response.data.id);
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
              <h2>Sangini Membership Form</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="grpName">
              <Form.Label>Sangini Group Name</Form.Label>
              <Form.Control
                name="gName"
                value={gName}
                onChange={(e) => setgName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="memName">
              <Form.Label>Sangini Name</Form.Label>
              <Form.Control
                name="memName"
                value={memName}
                onChange={(e) => setMemName(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="memBDay">
              <Form.Label>Sangini Birthday</Form.Label>
              <Form.Control
                type="date"
                name="memBDay"
                value={memBDay}
                onChange={(e) => setMemBDay(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="memADate">
              <Form.Label>Sangini Anniversary Date</Form.Label>
              <Form.Control
                type="date"
                name="memADate"
                value={memADate}
                onChange={(e) => setMemADate(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="memAddress">
              <Form.Label>Sangini Address</Form.Label>
              <Form.Control
                name="memAddress"
                value={memAddress}
                onChange={(e) => setMemAddress(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="isProfessional">
              <Form.Label>Is Sangini Professional</Form.Label>
              <Form.Select
                defaultValue="No"
                name="isProfessional"
                value={isProfessional}
                onChange={(e) => setIsProfessional(e.target.value)}
              >
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="professionName">
              <Form.Label>Profession Name</Form.Label>
              <Form.Control
                name="professionName"
                value={professionName}
                onChange={(e) => setProfessionName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="professionContact">
              <Form.Label>Profession Contact Number</Form.Label>
              <Form.Control
                name="professionContact"
                value={professionContact}
                onChange={(e) => setProfessionContact(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="professionAddress">
              <Form.Label>Profession Address</Form.Label>
              <Form.Control
                name="professionAddress"
                value={professionAddress}
                onChange={(e) => setProfessionAddress(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="memContact">
              <Form.Label>Sangini Contact Number</Form.Label>
              <Form.Control
                name="memContact"
                value={memContact}
                onChange={(e) => setMemContact(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="memEmail">
              <Form.Label>Sangini Email Address</Form.Label>
              <Form.Control
                name="memEmail"
                value={memEmail}
                onChange={(e) => setMemEmail(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="husName">
              <Form.Label>Husband's Name</Form.Label>
              <Form.Control
                name="husName"
                value={husName}
                onChange={(e) => setHusName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="husBDate">
              <Form.Label>Husband's Birthday</Form.Label>
              <Form.Control
                name="husBDate"
                value={husBDate}
                onChange={(e) => setHusBDate(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="husProfessionName">
              <Form.Label>Husband's Profession</Form.Label>
              <Form.Control
                name="husProfessionName"
                value={husProfessionName}
                onChange={(e) => setHusProfessionName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="husContact">
              <Form.Label>Husband's Contact Number</Form.Label>
              <Form.Control
                name="husContact"
                value={husContact}
                onChange={(e) => setHusContact(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="husProfessionAddress">
              <Form.Label>Husband's Profession Address</Form.Label>
              <Form.Control
                name="husProfessionAddress"
                value={husProfessionAddress}
                onChange={(e) => setHusProfessionAddress(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="sponsName">
              <Form.Label>Sponsorer's Name</Form.Label>
              <Form.Control
                name="sponsName"
                value={sponsName}
                onChange={(e) => setSponsName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="sponsMemNumber">
              <Form.Label>Sponsorer's Contact Number</Form.Label>
              <Form.Control
                name="sponsMemNumber"
                value={sponsMemNumber}
                onChange={(e) => setSponsMemNumber(e.target.value)}
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

export default SanginiMembershipForm;
