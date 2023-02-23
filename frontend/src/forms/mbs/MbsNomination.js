import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const MbsNomination = () => {
  const [fromName, setFromName] = useState("");
  const [fromAddress, setFromAddress] = useState("");
  const [fromContact, setFromContact] = useState("");
  const [fromMobile, setFromMobile] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [welfareMembershipNum, setWelfareMembershipNum] = useState("");
  const [mbsMembershipNum, setMbsMembershipNum] = useState("");
  const [memName, setMemName] = useState("");
  const [memGroup, setMemGroup] = useState("");
  const [nomineeName1, setNomineeName1] = useState("");
  const [nomineeAddress1, setNomineeAddress1] = useState("");
  const [nomineeRelation1, setNomineeRelation1] = useState("");
  const [nomineeName2, setNomineeName2] = useState("");
  const [nomineeAddress2, setNomineeAddress2] = useState("");
  const [nomineeRelation2, setNomineeRelation2] = useState("");
  const [changeMadeOn, setChangeMadeOn] = useState("");
  const [changeMadeAt, setChangeMadeAt] = useState("");
  const [changePresenceOf, setChangePresenceOf] = useState("");

  const redirectToRagm = (id) => {
    navigate(`/mbs-nomination-response/${id}`, { replace: true });
  };

  const navigate = useNavigate();

  async function FormSubmit(event) {
    event.preventDefault();
    let formField = new FormData();

    formField.append("fromName", fromName);
    formField.append("fromAddress", fromAddress);
    formField.append("fromContact", fromContact);
    formField.append("fromMobile", fromMobile);
    formField.append("fromEmail", fromEmail);
    formField.append("fromDate", fromDate);
    formField.append("welfareMembershipNum", welfareMembershipNum);
    formField.append("mbsMembershipNum", mbsMembershipNum);
    formField.append("memName", memName);
    formField.append("memGroup", memGroup);
    formField.append("nomineeName1", nomineeName1);
    formField.append("nomineeAddress1", nomineeAddress1);
    formField.append("nomineeRelation1", nomineeRelation1);
    formField.append("nomineeName2", nomineeName2);
    formField.append("nomineeAddress2", nomineeAddress2);
    formField.append("nomineeRelation2", nomineeRelation2);
    formField.append("changeMadeOn", changeMadeOn);
    formField.append("changeMadeAt", changeMadeAt);
    formField.append("changePresenceOf", changePresenceOf);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/forms/mbs-nomination/",
      data: formField,
    })
      .then(function(response) {
        console.log(response);
        redirectToRagm(response.data.id);
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
              <h2>MBS Nomination Form</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="fromName">
              <Form.Label>From Name</Form.Label>
              <Form.Control
                name="fromName"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="fromContact">
              <Form.Label>From Contact Number</Form.Label>
              <Form.Control
                name="fromContact"
                value={fromContact}
                onChange={(e) => setFromContact(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="fromMobile">
              <Form.Label>From Mobile Number</Form.Label>
              <Form.Control
                name="fromMobile"
                value={fromMobile}
                onChange={(e) => setFromMobile(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="fromAddress">
              <Form.Label>From Address</Form.Label>
              <Form.Control
                name="fromAddress"
                value={fromAddress}
                onChange={(e) => setFromAddress(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="fromEmail">
              <Form.Label>From Email ID</Form.Label>
              <Form.Control
                name="fromEmail"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="fromDate">
              <Form.Label>From Date</Form.Label>
              <Form.Control
                type="Date"
                name="fromDate"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="welfareMembershipNum">
              <Form.Label>JSG Welfare Society Membership Number</Form.Label>
              <Form.Control
                name="welfareMembershipNum"
                value={welfareMembershipNum}
                onChange={(e) => setWelfareMembershipNum(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="mbsMembershipNum">
              <Form.Label>MBS Scheme Membership Number</Form.Label>
              <Form.Control
                name="mbsMembershipNum"
                value={mbsMembershipNum}
                onChange={(e) => setMbsMembershipNum(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="memName">
              <Form.Label>JSG Member Name</Form.Label>
              <Form.Control
                name="memName"
                value={memName}
                onChange={(e) => setMemName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="memGroup">
              <Form.Label>JSG Member Group</Form.Label>
              <Form.Control
                name="memGroup"
                value={memGroup}
                onChange={(e) => setMemGroup(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="nomineeName1">
              <Form.Label>1st Nominee name</Form.Label>
              <Form.Control
                name="nomineeName1"
                value={nomineeName1}
                onChange={(e) => setNomineeName1(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="nomineeRelation1">
              <Form.Label>1st Nominee Relationship</Form.Label>
              <Form.Control
                name="nomineeRelation1"
                value={nomineeRelation1}
                onChange={(e) => setNomineeRelation1(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="nomineeAddress1">
              <Form.Label>1st Nominee Address</Form.Label>
              <Form.Control
                name="nomineeAddress1"
                value={nomineeAddress1}
                onChange={(e) => setNomineeAddress1(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="nomineeName2">
              <Form.Label>2nd Nominee name</Form.Label>
              <Form.Control
                name="nomineeName2"
                value={nomineeName2}
                onChange={(e) => setNomineeName2(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="nomineeRelation2">
              <Form.Label>2nd Nominee Relationship</Form.Label>
              <Form.Control
                name="nomineeRelation2"
                value={nomineeRelation2}
                onChange={(e) => setNomineeRelation2(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="nomineeAddress2">
              <Form.Label>2nd Nominee Address</Form.Label>
              <Form.Control
                name="nomineeAddress2"
                value={nomineeAddress2}
                onChange={(e) => setNomineeAddress2(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="changeMadeOn">
              <Form.Label>Change in nomination Date</Form.Label>
              <Form.Control
                type="Date"
                name="changeMadeOn"
                value={changeMadeOn}
                onChange={(e) => setChangeMadeOn(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="changePresenceOf">
              <Form.Label>
                Change in nomination is made in presence of
              </Form.Label>
              <Form.Control
                name="changePresenceOf"
                value={changePresenceOf}
                onChange={(e) => setChangePresenceOf(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="changeMadeAt">
              <Form.Label>Change in nomination Address</Form.Label>
              <Form.Control
                name="changeMadeAt"
                value={changeMadeAt}
                onChange={(e) => setChangeMadeAt(e.target.value)}
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

export default MbsNomination;
