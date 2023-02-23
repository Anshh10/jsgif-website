import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const Bpage1 = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <Container>
        <Form onSubmit={submitFormData}>
          <Row>
            <Col xs={12}>
              <h2>Group Form B</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Region Name</Form.Label>
                <Form.Control
                  name="regionName"
                  defaultValue={values.regionName}
                  type="text"
                  placeholder="Region Name"
                  onChange={handleFormData("regionName")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Group Name</Form.Label>
                <Form.Control
                  name="grpName"
                  defaultValue={values.grpName}
                  type="text"
                  placeholder="Group Name"
                  onChange={handleFormData("grpName")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Group Number</Form.Label>
                <Form.Control
                  name="grpNumber"
                  defaultValue={values.grpNumber}
                  type="text"
                  placeholder="Group Number"
                  onChange={handleFormData("grpNumber")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col xs={12}>
              <Form.Group>
                <Form.Label>Group Address</Form.Label>
                <Form.Control
                  as="textarea"
                  name="grpAddress"
                  defaultValue={values.grpAddress}
                  type="text"
                  placeholder="Group Address"
                  onChange={handleFormData("grpAddress")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Landline STD Code</Form.Label>
                <Form.Control
                  name="stdCode"
                  defaultValue={values.stdCode}
                  type="text"
                  placeholder="STD code of the City"
                  onChange={handleFormData("stdCode")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Date Of Inaugration</Form.Label>
                <Form.Control
                  name="dateOfInaugration"
                  defaultValue={values.dateOfInaugration}
                  type="date"
                  onChange={handleFormData("dateOfInaugration")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Date of Charter</Form.Label>
                <Form.Control
                  name="dateOfCharter"
                  defaultValue={values.dateOfCharter}
                  type="date"
                  onChange={handleFormData("dateOfCharter")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Name of Sponsor Group</Form.Label>
                <Form.Control
                  name="sponsorGrpName"
                  defaultValue={values.sponsorGrpName}
                  type="text"
                  placeholder="Name of Sponsor Group"
                  onChange={handleFormData("sponsorGrpName")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Group Landline Number</Form.Label>
                <Form.Control
                  name="grpPhone"
                  defaultValue={values.grpPhone}
                  type="text"
                  placeholder="Group Landline Number"
                  onChange={handleFormData("grpPhone")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Group Mobile</Form.Label>
                <Form.Control
                  name="grpMobile"
                  defaultValue={values.grpMobile}
                  type="text"
                  placeholder="Group Mobile"
                  onChange={handleFormData("grpMobile")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Group Email ID</Form.Label>
                <Form.Control
                  name="grpEmail"
                  defaultValue={values.grpEmail}
                  type="text"
                  placeholder="Group"
                  onChange={handleFormData("grpEmail")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>General Meeting Date for Election</Form.Label>
                <Form.Control
                  name="electionMeetingDate"
                  defaultValue={values.electionMeetingDate}
                  type="date"
                  onChange={handleFormData("electionMeetingDate")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Officers Elected Date</Form.Label>
                <Form.Control
                  name="electedOnDate"
                  defaultValue={values.electedOnDate}
                  type="date"
                  onChange={handleFormData("electedOnDate")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="formSectionHeader">
            <h3>President Details</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>President Name</Form.Label>
                <Form.Control
                  name="presName"
                  defaultValue={values.presName}
                  type="text"
                  placeholder="President Name"
                  onChange={handleFormData("presName")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  name="presPhoto"
                  defaultValue={values.presPhoto}
                  type="file"
                  placeholder="President Photo"
                  onChange={handleFormData("presPhoto")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={12} xs={12}>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  name="presaddress"
                  defaultValue={values.presaddress}
                  type="text"
                  placeholder="President Address"
                  onChange={handleFormData("presaddress")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={12} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="presPinCode"
                  defaultValue={values.presPinCode}
                  type="text"
                  placeholder="President Address Pincode"
                  onChange={handleFormData("presPinCode")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="presOffLandLine"
                  defaultValue={values.presOffLandLine}
                  type="text"
                  placeholder="President Office Landline"
                  onChange={handleFormData("presOffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="presResLandLine"
                  defaultValue={values.presResLandLine}
                  type="text"
                  placeholder="President Residence Landline"
                  onChange={handleFormData("presResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="presMobileNumber"
                  defaultValue={values.presMobileNumber}
                  type="text"
                  placeholder="President Mobile Number"
                  onChange={handleFormData("presMobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control
                  name="presWhatsappNumber"
                  defaultValue={values.presWhatsappNumber}
                  type="text"
                  placeholder="President Whatsapp Number"
                  onChange={handleFormData("presWhatsappNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="presEmail"
                  defaultValue={values.presEmail}
                  type="text"
                  placeholder="President Email Address"
                  onChange={handleFormData("presEmail")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Occupation Details</Form.Label>
                <Form.Control
                  name="presOccupation"
                  defaultValue={values.presOccupation}
                  type="text"
                  placeholder="President Occupation"
                  onChange={handleFormData("presOccupation")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  name="presBirthDay"
                  defaultValue={values.presBirthDay}
                  type="text"
                  placeholder="President Date of Birth"
                  onChange={handleFormData("presBirthDay")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Name</Form.Label>
                <Form.Control
                  name="presSpouseName"
                  defaultValue={values.presSpouseName}
                  type="text"
                  placeholder="President Spouse Name"
                  onChange={handleFormData("presSpouseName")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Date of Birth</Form.Label>
                <Form.Control
                  name="presSpouseBirthDay"
                  defaultValue={values.presSpouseBirthDay}
                  type="text"
                  placeholder="President's Spouse Date of Birth"
                  onChange={handleFormData("presSpouseBirthDay")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Marraige Anniversary</Form.Label>
                <Form.Control
                  name="presMarraigeDate"
                  defaultValue={values.presMarraigeDate}
                  type="text"
                  placeholder="President Marraige Anniversary"
                  onChange={handleFormData("presMarraigeDate")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="formSectionHeader">
            <h3>Immediate Former President</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Imm Former President Name</Form.Label>
                <Form.Control
                  name="immFormerPresName"
                  defaultValue={values.immFormerPresName}
                  type="text"
                  placeholder="Immediate Former President Name"
                  onChange={handleFormData("immFormerPresName")}
                />
              </Form.Group>
            </Col>
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  name="immFormerPresPhoto"
                  defaultValue={values.immFormerPresPhoto}
                  type="file"
                  placeholder="Immediate Former President Photo"
                  onChange={handleFormData("immFormerPresPhoto")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={12} xs={12}>
              <Form.Group>
                <Form.Label>Correspondance Address</Form.Label>
                <Form.Control
                  as="textarea"
                  name="immFormerPresaddress"
                  defaultValue={values.immFormerPresaddress}
                  type="text"
                  placeholder="Immediate Former President Correspondance Address"
                  onChange={handleFormData("immFormerPresaddress")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={12} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="immFormerPresPinCode"
                  defaultValue={values.immFormerPresPinCode}
                  type="text"
                  placeholder="Immediate Former President Pincode"
                  onChange={handleFormData("immFormerPresPinCode")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="immFormerPresOffLandLine"
                  defaultValue={values.immFormerPresOffLandLine}
                  type="text"
                  placeholder="Immediate Former President Office Landline"
                  onChange={handleFormData("immFormerPresOffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="immFormerPresResLandLine"
                  defaultValue={values.immFormerPresResLandLine}
                  type="text"
                  placeholder="Immediate Former President Residence Landline"
                  onChange={handleFormData("immFormerPresResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="immFormerPresMobileNumber"
                  defaultValue={values.immFormerPresMobileNumber}
                  type="text"
                  placeholder="Immediate Former President Mobile Number"
                  onChange={handleFormData("immFormerPresMobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control
                  name="immFormerPresWhatsappNumber"
                  defaultValue={values.immFormerPresWhatsappNumber}
                  type="text"
                  placeholder="Immediate Former President Whatsapp Number"
                  onChange={handleFormData("immFormerPresWhatsappNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  name="immFormerPresEmail"
                  defaultValue={values.immFormerPresEmail}
                  type="text"
                  placeholder="Immediate Former President Email ID"
                  onChange={handleFormData("immFormerPresEmail")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Occupation</Form.Label>
                <Form.Control
                  name="immFormerPresOccupation"
                  defaultValue={values.immFormerPresOccupation}
                  type="text"
                  placeholder="Immediate Former President Occupation"
                  onChange={handleFormData("immFormerPresOccupation")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  name="immFormerPresBirthDay"
                  defaultValue={values.immFormerPresBirthDay}
                  type="text"
                  placeholder="Immediate Former President Date of Birth"
                  onChange={handleFormData("immFormerPresBirthDay")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Name</Form.Label>
                <Form.Control
                  name="immFormerPresSpouseName"
                  defaultValue={values.immFormerPresSpouseName}
                  type="text"
                  placeholder="Immediate Former President's Spouse Name"
                  onChange={handleFormData("immFormerPresSpouseName")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Date of Birth</Form.Label>
                <Form.Control
                  name="immFormerPresSpouseBirthDay"
                  defaultValue={values.immFormerPresSpouseBirthDay}
                  type="text"
                  placeholder="Immediate Former President's Spouse Date of Birth"
                  onChange={handleFormData("immFormerPresSpouseBirthDay")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Marraige Anniversary</Form.Label>
                <Form.Control
                  name="immFormerPresMarraigeDate"
                  defaultValue={values.immFormerPresMarraigeDate}
                  type="text"
                  placeholder="Immediate Former President Marraige Anniversary"
                  onChange={handleFormData("immFormerPresMarraigeDate")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button className="btn--outline--dark" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Next
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Bpage1;
