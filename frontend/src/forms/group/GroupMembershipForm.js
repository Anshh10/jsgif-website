import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import moment from "moment";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import SecurePageSection from "../../SecurePageSection";

const GroupMembershipForm = () => {
  const [gName, setgName] = useState("");
  const [memName, setMemName] = useState("");
  const [memDob, setMemDob] = useState("");
  const [memEmail, setMemEmail] = useState("");
  const [memMobNum, setMemMobNum] = useState("");
  const [memWhatsappNum, setMemWhatsappNum] = useState("");
  const [memBloodGrp, setMemBloodGrp] = useState("");
  const [memMarried, setMemMarried] = useState("");
  const [memBusiness, setMemBusiness] = useState("");
  const [memCoName, setMemCoName] = useState("");
  const [memCoAddress, setMemCoAddress] = useState("");
  const [memCoTele, setMemCoTele] = useState("");
  const [memResAddress, setMemResAddress] = useState("");
  const [memResTele, setMemResTele] = useState("");
  const [spsName, setSpsName] = useState("");
  const [spsDob, setSpsDob] = useState("");
  const [spsEmail, setSpsEmail] = useState("");
  const [spsMobNum, setSpsMobNum] = useState("");
  const [spsWhatsappNum, setSpsWhatsappNum] = useState("");
  const [spsBloodGrp, setSpsBloodGrp] = useState("");
  const [spsAnniversary, setSpsAnniversary] = useState("");
  const [spsOccupation, setSpsOccupation] = useState("");
  const [spsCoName, setSpsCoName] = useState("");
  const [spsCoAddress, setSpsCoAddress] = useState("");
  const [spsCoTele, setSpsCoTele] = useState("");
  const [child1Name, setChild1Name] = useState("");
  const [child1Sex, setChild1Sex] = useState("");
  const [child1Dob, setChild1Dob] = useState("");
  const [child1Email, setChild1Email] = useState("");
  const [child1MobNum, setChild1MobNum] = useState("");
  const [child1WhatsappNum, setChild1WhatsappNum] = useState("");
  const [child1BloodGrp, setChild1BloodGrp] = useState("");
  const [child1BusinessEdu, setChild1BusinessEdu] = useState("");
  const [child1Marital, setChild1Marital] = useState("");
  const [child2Name, setChild2Name] = useState("");
  const [child2Sex, setChild2Sex] = useState("");
  const [child2Dob, setChild2Dob] = useState("");
  const [child2Email, setChild2Email] = useState("");
  const [child2MobNum, setChild2MobNum] = useState("");
  const [child2WhatsappNum, setChild2WhatsappNum] = useState("");
  const [child2BloodGrp, setChild2BloodGrp] = useState("");
  const [child2BusinessEdu, setChild2BusinessEdu] = useState("");
  const [child2Marital, setChild2Marital] = useState("");
  const [child3Name, setChild3Name] = useState("");
  const [child3Sex, setChild3Sex] = useState("");
  const [child3Dob, setChild3Dob] = useState("");
  const [child3Email, setChild3Email] = useState("");
  const [child3MobNum, setChild3MobNum] = useState("");
  const [child3WhatsappNum, setChild3WhatsappNum] = useState("");
  const [child3BloodGrp, setChild3BloodGrp] = useState("");
  const [child3BusinessEdu, setChild3BusinessEdu] = useState("");
  const [child3Marital, setChild3Marital] = useState("");

  // const redirectToResponse = (id) => {
  //  navigate(`/grpagm-response/${id}`, { replace: true });
  // };

  const navigate = useNavigate();

  // const dateDay = (e) => {
  //   setmDate(e.target.value);
  //   let dayofdate = moment(e.target.value).format("dddd");
  //   setmDay(dayofdate);
  // };

  async function FormSubmit(event) {
    event.preventDefault();
    let formField = new FormData();

    formField.append("gName", gName);
    formField.append("gName", gName);
    formField.append("memName", memName);
    formField.append("memDob", memDob);
    formField.append("memEmail", memEmail);
    formField.append("memMobNum", memMobNum);
    formField.append("memWhatsappNum", memWhatsappNum);
    formField.append("memBloodGrp", memBloodGrp);
    formField.append("memMarried", memMarried);
    formField.append("memBusiness", memBusiness);
    formField.append("memCoName", memCoName);
    formField.append("memCoAddress", memCoAddress);
    formField.append("memCoTele", memCoTele);
    formField.append("memResAddress", memResAddress);
    formField.append("memResTele", memResTele);
    formField.append("spsName", spsName);
    formField.append("spsDob", spsDob);
    formField.append("spsEmail", spsEmail);
    formField.append("spsMobNum", spsMobNum);
    formField.append("spsWhatsappNum", spsWhatsappNum);
    formField.append("spsBloodGrp", spsBloodGrp);
    formField.append("spsAnniversary", spsAnniversary);
    formField.append("spsOccupation", spsOccupation);
    formField.append("spsCoName", spsCoName);
    formField.append("spsCoAddress", spsCoAddress);
    formField.append("spsCoTele", spsCoTele);
    formField.append("child1Name", child1Name);
    formField.append("child1Sex", child1Sex);
    formField.append("child1Dob", child1Dob);
    formField.append("child1Email", child1Email);
    formField.append("child1MobNum", child1MobNum);
    formField.append("child1WhatsappNum", child1WhatsappNum);
    formField.append("child1BloodGrp", child1BloodGrp);
    formField.append("child1BusinessEdu", child1BusinessEdu);
    formField.append("child1Marital", child1Marital);
    formField.append("child2Name", child2Name);
    formField.append("child2Sex", child2Sex);
    formField.append("child2Dob", child2Dob);
    formField.append("child2Email", child2Email);
    formField.append("child2MobNum", child2MobNum);
    formField.append("child2WhatsappNum", child2WhatsappNum);
    formField.append("child2BloodGrp", child2BloodGrp);
    formField.append("child2BusinessEdu", child2BusinessEdu);
    formField.append("child2Marital", child2Marital);
    formField.append("child3Name", child3Name);
    formField.append("child3Sex", child3Sex);
    formField.append("child3Dob", child3Dob);
    formField.append("child3Email", child3Email);
    formField.append("child3MobNum", child3MobNum);
    formField.append("child3WhatsappNum", child3WhatsappNum);
    formField.append("child3BloodGrp", child3BloodGrp);
    formField.append("child3BusinessEdu", child3BusinessEdu);
    formField.append("child3Marital", child3Marital);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/forms/group/grp-membership-form/",
      data: formField,
    })
      .then(function (response) {
        console.log(response);
        // redirectToResponse(response.data.id);
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
              <h2>Group Membership Form</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="gName">
              <Form.Label>Group Name</Form.Label>
              <Form.Control
                name="gName"
                value={gName}
                onChange={(e) => setgName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="memName">
              <Form.Label>Name of the Member</Form.Label>
              <Form.Control
                name="memName"
                value={memName}
                onChange={(e) => setMemName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="memDob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="Date"
                name="memDob"
                value={memDob}
                onChange={(e) => setMemDob(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="memEmail">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                name="memEmail"
                value={memEmail}
                onChange={(e) => setMemEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="memMobNum">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                name="memMobNum"
                value={memMobNum}
                onChange={(e) => setMemMobNum(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="memWhatsappNum">
              <Form.Label>Whatsapp Number</Form.Label>
              <Form.Control
                name="memWhatsappNum"
                value={memWhatsappNum}
                onChange={(e) => setMemWhatsappNum(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="memBloodGrp">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                name="memBloodGrp"
                value={memBloodGrp}
                onChange={(e) => setMemBloodGrp(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="memMarried">
              <Form.Label>Married/Unmarried</Form.Label>
              <Form.Select
                defaultValue="arried"
                name="memMarried"
                value={memMarried}
                onChange={(e) => setMemMarried(e.target.value)}
              >
                <option>Married</option>
                <option>Unmarried</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="memBusiness">
              <Form.Label>Nature of Business</Form.Label>
              <Form.Control
                name="memBusiness"
                value={memBusiness}
                onChange={(e) => setMemBusiness(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="memCoName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                name="memCoName"
                value={memCoName}
                onChange={(e) => setMemCoName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="memCoTele">
              <Form.Label>Company Telephone</Form.Label>
              <Form.Control
                name="memCoTele"
                value={memCoTele}
                onChange={(e) => setMemCoTele(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="memCoAddress">
              <Form.Label>Company Address</Form.Label>
              <Form.Control
                name="memCoAddress"
                value={memCoAddress}
                onChange={(e) => setMemCoAddress(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Col xs={8}>
              <Form.Group controlId="memResAddress">
                <Form.Label>Residence Address</Form.Label>
                <Form.Control
                  name="memResAddress"
                  value={memResAddress}
                  onChange={(e) => setMemResAddress(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Form.Group as={Col} controlId="memResTele">
              <Form.Label>Residence Telephone</Form.Label>
              <Form.Control
                name="memResTele"
                value={memResTele}
                onChange={(e) => setMemResTele(e.target.value)}
              />
            </Form.Group>
          </Row>

          <h3>Spouse</h3>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="spsName">
              <Form.Label>Name of the Spouse</Form.Label>
              <Form.Control
                name="spsName"
                value={spsName}
                onChange={(e) => setSpsName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="spsDob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="Date"
                name="spsDob"
                value={spsDob}
                onChange={(e) => setSpsDob(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="spsEmail">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                name="spsEmail"
                value={spsEmail}
                onChange={(e) => setSpsEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="spsMobNum">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                name="spsMobNum"
                value={spsMobNum}
                onChange={(e) => setSpsMobNum(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="spsWhatsappNum">
              <Form.Label>Whatsapp Number</Form.Label>
              <Form.Control
                name="spsWhatsappNum"
                value={spsWhatsappNum}
                onChange={(e) => setSpsWhatsappNum(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="spsBloodGrp">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                name="spsBloodGrp"
                value={spsBloodGrp}
                onChange={(e) => setSpsBloodGrp(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="spsAnniversary">
              <Form.Label>Marriage Anniversary</Form.Label>
              <Form.Control
                type="Date"
                name="spsAnniversary"
                value={spsAnniversary}
                onChange={(e) => setSpsAnniversary(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="spsOccupation">
              <Form.Label>Spouse Occupation</Form.Label>
              <Form.Control
                name="spsOccupation"
                value={spsOccupation}
                onChange={(e) => setSpsOccupation(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="spsCoName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                name="spsCoName"
                value={spsCoName}
                onChange={(e) => setSpsCoName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="spsCoTele">
              <Form.Label>Company Telephone</Form.Label>
              <Form.Control
                name="spsCoTele"
                value={spsCoTele}
                onChange={(e) => setSpsCoTele(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="spsCoAddress">
              <Form.Label>Company Address</Form.Label>
              <Form.Control
                name="spsCoAddress"
                value={spsCoAddress}
                onChange={(e) => setSpsCoAddress(e.target.value)}
              />
            </Form.Group>
          </Row>
          <h3>Child 1</h3>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="child1Name">
              <Form.Label>Name of 1st Child</Form.Label>
              <Form.Control
                name="child1Name"
                value={child1Name}
                onChange={(e) => setChild1Name(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child1Sex">
              <Form.Label>Sex</Form.Label>
              <Form.Select
                defaultValue="Male"
                name="child1Sex"
                value={child1Sex}
                onChange={(e) => setChild1Sex(e.target.value)}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="child1Dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="Date"
                name="child1Dob"
                value={child1Dob}
                onChange={(e) => setChild1Dob(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="child1Email">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                name="child1Email"
                value={child1Email}
                onChange={(e) => setChild1Email(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child1MobNum">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                name="child1MobNum"
                value={child1MobNum}
                onChange={(e) => setChild1MobNum(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child1WhatsappNum">
              <Form.Label>Whatsapp Number</Form.Label>
              <Form.Control
                name="child1WhatsappNum"
                value={child1WhatsappNum}
                onChange={(e) => setChild1WhatsappNum(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="child1BloodGrp">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                name="child1BloodGrp"
                value={child1BloodGrp}
                onChange={(e) => setChild1BloodGrp(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child1BusinessEdu">
              <Form.Label>Business/Education</Form.Label>
              <Form.Control
                name="child1BusinessEdu"
                value={child1BusinessEdu}
                onChange={(e) => setChild1BusinessEdu(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child1Marital">
              <Form.Label>Marital Status</Form.Label>
              <Form.Select
                defaultValue="Day"
                name="child1Marital"
                value={child1Marital}
                onChange={(e) => setChild1Marital(e.target.value)}
              >
                <option>Married</option>
                <option>Unmarried</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <h3>Child 2</h3>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="child2Name">
              <Form.Label>Name of 1st Child</Form.Label>
              <Form.Control
                name="child2Name"
                value={child2Name}
                onChange={(e) => setChild2Name(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child2Dob">
              <Form.Label>Sex</Form.Label>
              <Form.Select
                defaultValue="Male"
                name="child2Sex"
                value={child2Sex}
                onChange={(e) => setChild2Sex(e.target.value)}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="child2Dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="Date"
                name="child2Dob"
                value={child2Dob}
                onChange={(e) => setChild2Dob(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="child2Email">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                name="child2Email"
                value={child2Email}
                onChange={(e) => setChild2Email(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child2MobNum">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                name="child2MobNum"
                value={child2MobNum}
                onChange={(e) => setChild2MobNum(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child2WhatsappNum">
              <Form.Label>Whatsapp Number</Form.Label>
              <Form.Control
                name="child2WhatsappNum"
                value={child2WhatsappNum}
                onChange={(e) => setChild2WhatsappNum(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="child2BloodGrp">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                name="child2BloodGrp"
                value={child2BloodGrp}
                onChange={(e) => setChild2BloodGrp(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child2BusinessEdu">
              <Form.Label>Business/Education</Form.Label>
              <Form.Control
                name="child2BusinessEdu"
                value={child2BusinessEdu}
                onChange={(e) => setChild2BusinessEdu(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child2Marital">
              <Form.Label>Marital Status</Form.Label>
              <Form.Select
                defaultValue="Day"
                name="child2Marital"
                value={child2Marital}
                onChange={(e) => setChild2Marital(e.target.value)}
              >
                <option>Married</option>
                <option>Unmarried</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <h3>Child 3</h3>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="child3Name">
              <Form.Label>Name of 1st Child</Form.Label>
              <Form.Control
                name="child3Name"
                value={child3Name}
                onChange={(e) => setChild3Name(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child3Dob">
              <Form.Label>Sex</Form.Label>
              <Form.Select
                defaultValue="Male"
                name="child3Sex"
                value={child3Sex}
                onChange={(e) => setChild3Sex(e.target.value)}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="child3Dob">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="Date"
                name="child3Dob"
                value={child3Dob}
                onChange={(e) => setChild3Dob(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="child3Email">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                name="child3Email"
                value={child3Email}
                onChange={(e) => setChild3Email(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child3MobNum">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                name="child3MobNum"
                value={child3MobNum}
                onChange={(e) => setChild3MobNum(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child3WhatsappNum">
              <Form.Label>Whatsapp Number</Form.Label>
              <Form.Control
                name="child3WhatsappNum"
                value={child3WhatsappNum}
                onChange={(e) => setChild3WhatsappNum(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="child3BloodGrp">
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                name="child3BloodGrp"
                value={child3BloodGrp}
                onChange={(e) => setChild3BloodGrp(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child3BusinessEdu">
              <Form.Label>Business/Education</Form.Label>
              <Form.Control
                name="child3BusinessEdu"
                value={child3BusinessEdu}
                onChange={(e) => setChild3BusinessEdu(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="child3Marital">
              <Form.Label>Marital Status</Form.Label>
              <Form.Select
                defaultValue="Day"
                name="child3Marital"
                value={child3Marital}
                onChange={(e) => setChild3Marital(e.target.value)}
              >
                <option>Married</option>
                <option>Unmarried</option>
              </Form.Select>
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

export default GroupMembershipForm;
