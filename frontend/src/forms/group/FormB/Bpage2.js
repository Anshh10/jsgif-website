import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const Bpage2 = ({ nextStep, handleFormData, prevStep, values }) => {
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
          <Row className="formSectionHeader">
            <h3>Founder President Details</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Founder President Name</Form.Label>
                <Form.Control
                  name="founderPresName"
                  defaultValue={values.founderPresName}
                  type="text"
                  placeholder="Founder President Name"
                  onChange={handleFormData("founderPresName")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  name="founderPresPhoto"
                  defaultValue={values.founderPresPhoto}
                  type="file"
                  placeholder="Founder President Photo"
                  onChange={handleFormData("founderPresPhoto")}
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
                  name="founderPresaddress"
                  defaultValue={values.founderPresaddress}
                  type="text"
                  placeholder="Founder President Address"
                  onChange={handleFormData("founderPresaddress")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={12} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="founderPresPinCode"
                  defaultValue={values.founderPresPinCode}
                  type="text"
                  placeholder="Founder President Address Pincode"
                  onChange={handleFormData("founderPresPinCode")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="founderPresOffLandLine"
                  defaultValue={values.founderPresOffLandLine}
                  type="text"
                  placeholder="Founder President Office Landline"
                  onChange={handleFormData("founderPresOffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="founderPresResLandLine"
                  defaultValue={values.founderPresResLandLine}
                  type="text"
                  placeholder="Founder President Residence Landline"
                  onChange={handleFormData("founderPresResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="founderPresMobileNumber"
                  defaultValue={values.founderPresMobileNumber}
                  type="text"
                  placeholder="Founder President Mobile Number"
                  onChange={handleFormData("founderPresMobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control
                  name="founderPresWhatsappNumber"
                  defaultValue={values.founderPresWhatsappNumber}
                  type="text"
                  placeholder="Founder President Whatsapp Number"
                  onChange={handleFormData("founderPresWhatsappNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="founderPresEmail"
                  defaultValue={values.founderPresEmail}
                  type="text"
                  placeholder="Founder President Email Address"
                  onChange={handleFormData("founderPresEmail")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Occupation Details</Form.Label>
                <Form.Control
                  name="founderPresOccupation"
                  defaultValue={values.founderPresOccupation}
                  type="text"
                  placeholder="Founder President Occupation"
                  onChange={handleFormData("founderPresOccupation")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  name="founderPresBirthDay"
                  defaultValue={values.founderPresBirthDay}
                  type="text"
                  placeholder="Founder President Date of Birth"
                  onChange={handleFormData("founderPresBirthDay")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Name</Form.Label>
                <Form.Control
                  name="founderPresSpouseName"
                  defaultValue={values.founderPresSpouseName}
                  type="text"
                  placeholder="Founder President Spouse Name"
                  onChange={handleFormData("founderPresSpouseName")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Date of Birth</Form.Label>
                <Form.Control
                  name="founderPresSpouseBirthDay"
                  defaultValue={values.founderPresSpouseBirthDay}
                  type="text"
                  placeholder="Founder President's Spouse Date of Birth"
                  onChange={handleFormData("founderPresSpouseBirthDay")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Marraige Anniversary</Form.Label>
                <Form.Control
                  name="founderPresMarraigeDate"
                  defaultValue={values.founderPresMarraigeDate}
                  type="text"
                  placeholder="Founder President Marraige Anniversary"
                  onChange={handleFormData("founderPresMarraigeDate")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="formSectionHeader">
            <h3>Nominated Former President</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Nominated Former President Name</Form.Label>
                <Form.Control
                  name="nominatedFormerPres1Name"
                  defaultValue={values.nominatedFormerPres1Name}
                  type="text"
                  placeholder="Nominated Former President Name"
                  onChange={handleFormData("nominatedFormerPres1Name")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  name="nominatedFormerPres1Photo"
                  defaultValue={values.nominatedFormerPres1Photo}
                  type="file"
                  placeholder="Nominated Former President Photo"
                  onChange={handleFormData("nominatedFormerPres1Photo")}
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
                  name="nominatedFormerPres1address"
                  defaultValue={values.nominatedFormerPres1address}
                  type="text"
                  placeholder="Nominated Former President Address"
                  onChange={handleFormData("nominatedFormerPres1address")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={12} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="nominatedFormerPres1PinCode"
                  defaultValue={values.nominatedFormerPres1PinCode}
                  type="text"
                  placeholder="Nominated Former President Address Pincode"
                  onChange={handleFormData("nominatedFormerPres1PinCode")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="nominatedFormerPres1OffLandLine"
                  defaultValue={values.nominatedFormerPres1OffLandLine}
                  type="text"
                  placeholder="Nominated Former President Office Landline"
                  onChange={handleFormData("nominatedFormerPres1OffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="nominatedFormerPres1ResLandLine"
                  defaultValue={values.nominatedFormerPres1ResLandLine}
                  type="text"
                  placeholder="Nominated Former President Residence Landline"
                  onChange={handleFormData("nominatedFormerPres1ResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="nominatedFormerPres1MobileNumber"
                  defaultValue={values.nominatedFormerPres1MobileNumber}
                  type="text"
                  placeholder="Nominated Former President Mobile Number"
                  onChange={handleFormData("nominatedFormerPres1MobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control
                  name="nominatedFormerPres1WhatsappNumber"
                  defaultValue={values.nominatedFormerPres1WhatsappNumber}
                  type="text"
                  placeholder="Nominated Former President Whatsapp Number"
                  onChange={handleFormData(
                    "nominatedFormerPres1WhatsappNumber"
                  )}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="nominatedFormerPres1Email"
                  defaultValue={values.nominatedFormerPres1Email}
                  type="text"
                  placeholder="Nominated Former President Email Address"
                  onChange={handleFormData("nominatedFormerPres1Email")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Occupation Details</Form.Label>
                <Form.Control
                  name="nominatedFormerPres1Occupation"
                  defaultValue={values.nominatedFormerPres1Occupation}
                  type="text"
                  placeholder="Nominated Former President Occupation"
                  onChange={handleFormData("nominatedFormerPres1Occupation")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  name="nominatedFormerPres1BirthDay"
                  defaultValue={values.nominatedFormerPres1BirthDay}
                  type="text"
                  placeholder="Nominated Former President Date of Birth"
                  onChange={handleFormData("nominatedFormerPres1BirthDay")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Name</Form.Label>
                <Form.Control
                  name="nominatedFormerPres1SpouseName"
                  defaultValue={values.nominatedFormerPres1SpouseName}
                  type="text"
                  placeholder="Nominated Former President Spouse Name"
                  onChange={handleFormData("nominatedFormerPres1SpouseName")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Date of Birth</Form.Label>
                <Form.Control
                  name="nominatedFormerPres1SpouseBirthDay"
                  defaultValue={values.nominatedFormerPres1SpouseBirthDay}
                  type="text"
                  placeholder="Nominated Former President's Spouse Date of Birth"
                  onChange={handleFormData(
                    "nominatedFormerPres1SpouseBirthDay"
                  )}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Marraige Anniversary</Form.Label>
                <Form.Control
                  name="nominatedFormerPres1MarraigeDate"
                  defaultValue={values.nominatedFormerPres1MarraigeDate}
                  type="text"
                  placeholder="Nominated Former President Marraige Anniversary"
                  onChange={handleFormData("nominatedFormerPres1MarraigeDate")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="formSectionHeader">
            <h3>Nominated Former President</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Nominated Former President Name</Form.Label>
                <Form.Control
                  name="nominatedFormerPres2Name"
                  defaultValue={values.nominatedFormerPres2Name}
                  type="text"
                  placeholder="Nominated Former President Name"
                  onChange={handleFormData("nominatedFormerPres2Name")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  name="nominatedFormerPres2Photo"
                  defaultValue={values.nominatedFormerPres2Photo}
                  type="file"
                  placeholder="Nominated Former President Photo"
                  onChange={handleFormData("nominatedFormerPres2Photo")}
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
                  name="nominatedFormerPres2address"
                  defaultValue={values.nominatedFormerPres2address}
                  type="text"
                  placeholder="Nominated Former President Address"
                  onChange={handleFormData("nominatedFormerPres2address")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={12} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="nominatedFormerPres2PinCode"
                  defaultValue={values.nominatedFormerPres2PinCode}
                  type="text"
                  placeholder="Nominated Former President Address Pincode"
                  onChange={handleFormData("nominatedFormerPres2PinCode")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="nominatedFormerPres2OffLandLine"
                  defaultValue={values.nominatedFormerPres2OffLandLine}
                  type="text"
                  placeholder="Nominated Former President Office Landline"
                  onChange={handleFormData("nominatedFormerPres2OffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="nominatedFormerPres2ResLandLine"
                  defaultValue={values.nominatedFormerPres2ResLandLine}
                  type="text"
                  placeholder="Nominated Former President Residence Landline"
                  onChange={handleFormData("nominatedFormerPres2ResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="nominatedFormerPres2MobileNumber"
                  defaultValue={values.nominatedFormerPres2MobileNumber}
                  type="text"
                  placeholder="Nominated Former President Mobile Number"
                  onChange={handleFormData("nominatedFormerPres2MobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control
                  name="nominatedFormerPres2WhatsappNumber"
                  defaultValue={values.nominatedFormerPres2WhatsappNumber}
                  type="text"
                  placeholder="Nominated Former President Whatsapp Number"
                  onChange={handleFormData(
                    "nominatedFormerPres2WhatsappNumber"
                  )}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="nominatedFormerPres2Email"
                  defaultValue={values.nominatedFormerPres2Email}
                  type="text"
                  placeholder="Nominated Former President Email Address"
                  onChange={handleFormData("nominatedFormerPres2Email")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Occupation Details</Form.Label>
                <Form.Control
                  name="nominatedFormerPres2Occupation"
                  defaultValue={values.nominatedFormerPres2Occupation}
                  type="text"
                  placeholder="Nominated Former President Occupation"
                  onChange={handleFormData("nominatedFormerPres2Occupation")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  name="nominatedFormerPres2BirthDay"
                  defaultValue={values.nominatedFormerPres2BirthDay}
                  type="text"
                  placeholder="Nominated Former President Date of Birth"
                  onChange={handleFormData("nominatedFormerPres2BirthDay")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Name</Form.Label>
                <Form.Control
                  name="nominatedFormerPres2SpouseName"
                  defaultValue={values.nominatedFormerPres2SpouseName}
                  type="text"
                  placeholder="Nominated Former President Spouse Name"
                  onChange={handleFormData("nominatedFormerPres2SpouseName")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Date of Birth</Form.Label>
                <Form.Control
                  name="nominatedFormerPres2SpouseBirthDay"
                  defaultValue={values.nominatedFormerPres2SpouseBirthDay}
                  type="text"
                  placeholder="Nominated Former President's Spouse Date of Birth"
                  onChange={handleFormData(
                    "nominatedFormerPres2SpouseBirthDay"
                  )}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Marraige Anniversary</Form.Label>
                <Form.Control
                  name="nominatedFormerPres2MarraigeDate"
                  defaultValue={values.nominatedFormerPres2MarraigeDate}
                  type="text"
                  placeholder="Nominated Former President Marraige Anniversary"
                  onChange={handleFormData("nominatedFormerPres2MarraigeDate")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="formSectionHeader">
            <h3>Nominated Former President</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Nominated Former President Name</Form.Label>
                <Form.Control
                  name="nominatedFormerPres3Name"
                  defaultValue={values.nominatedFormerPres3Name}
                  type="text"
                  placeholder="Nominated Former President Name"
                  onChange={handleFormData("nominatedFormerPres3Name")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  name="nominatedFormerPres3Photo"
                  defaultValue={values.nominatedFormerPres3Photo}
                  type="file"
                  placeholder="Nominated Former President Photo"
                  onChange={handleFormData("nominatedFormerPres3Photo")}
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
                  name="nominatedFormerPres3address"
                  defaultValue={values.nominatedFormerPres3address}
                  type="text"
                  placeholder="Nominated Former President Address"
                  onChange={handleFormData("nominatedFormerPres3address")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={12} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="nominatedFormerPres3PinCode"
                  defaultValue={values.nominatedFormerPres3PinCode}
                  type="text"
                  placeholder="Nominated Former President Address Pincode"
                  onChange={handleFormData("nominatedFormerPres3PinCode")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="nominatedFormerPres3OffLandLine"
                  defaultValue={values.nominatedFormerPres3OffLandLine}
                  type="text"
                  placeholder="Nominated Former President Office Landline"
                  onChange={handleFormData("nominatedFormerPres3OffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="nominatedFormerPres3ResLandLine"
                  defaultValue={values.nominatedFormerPres3ResLandLine}
                  type="text"
                  placeholder="Nominated Former President Residence Landline"
                  onChange={handleFormData("nominatedFormerPres3ResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="nominatedFormerPres3MobileNumber"
                  defaultValue={values.nominatedFormerPres3MobileNumber}
                  type="text"
                  placeholder="Nominated Former President Mobile Number"
                  onChange={handleFormData("nominatedFormerPres3MobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control
                  name="nominatedFormerPres3WhatsappNumber"
                  defaultValue={values.nominatedFormerPres3WhatsappNumber}
                  type="text"
                  placeholder="Nominated Former President Whatsapp Number"
                  onChange={handleFormData(
                    "nominatedFormerPres3WhatsappNumber"
                  )}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="nominatedFormerPres3Email"
                  defaultValue={values.nominatedFormerPres3Email}
                  type="text"
                  placeholder="Nominated Former President Email Address"
                  onChange={handleFormData("nominatedFormerPres3Email")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Occupation Details</Form.Label>
                <Form.Control
                  name="nominatedFormerPres3Occupation"
                  defaultValue={values.nominatedFormerPres3Occupation}
                  type="text"
                  placeholder="Nominated Former President Occupation"
                  onChange={handleFormData("nominatedFormerPres3Occupation")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  name="nominatedFormerPres3BirthDay"
                  defaultValue={values.nominatedFormerPres3BirthDay}
                  type="text"
                  placeholder="Nominated Former President Date of Birth"
                  onChange={handleFormData("nominatedFormerPres3BirthDay")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Name</Form.Label>
                <Form.Control
                  name="nominatedFormerPres3SpouseName"
                  defaultValue={values.nominatedFormerPres3SpouseName}
                  type="text"
                  placeholder="Nominated Former President Spouse Name"
                  onChange={handleFormData("nominatedFormerPres3SpouseName")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Date of Birth</Form.Label>
                <Form.Control
                  name="nominatedFormerPres3SpouseBirthDay"
                  defaultValue={values.nominatedFormerPres3SpouseBirthDay}
                  type="text"
                  placeholder="Nominated Former President's Spouse Date of Birth"
                  onChange={handleFormData(
                    "nominatedFormerPres3SpouseBirthDay"
                  )}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Marraige Anniversary</Form.Label>
                <Form.Control
                  name="nominatedFormerPres3MarraigeDate"
                  defaultValue={values.nominatedFormerPres3MarraigeDate}
                  type="text"
                  placeholder="Nominated Former President Marraige Anniversary"
                  onChange={handleFormData("nominatedFormerPres3MarraigeDate")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button className="btn--outline" onClick={prevStep}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Previous
              </Button>
            </Col>
            <Col>
              <Button className="btn--outline--dark" type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Next
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Bpage2;
