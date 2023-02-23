import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const Bpage3 = ({ nextStep, handleFormData, prevStep, values }) => {
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
            <h3>Vice President Details</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Vice President Name</Form.Label>
                <Form.Control
                  name="vPresName"
                  defaultValue={values.vPresName}
                  type="text"
                  placeholder="Vice President Name"
                  onChange={handleFormData("vPresName")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  name="vPresPhoto"
                  defaultValue={values.vPresPhoto}
                  type="file"
                  placeholder="Vice President Photo"
                  onChange={handleFormData("vPresPhoto")}
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
                  name="vPresaddress"
                  defaultValue={values.vPresaddress}
                  type="text"
                  placeholder="Vice President Address"
                  onChange={handleFormData("vPresaddress")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={12} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="vPresPinCode"
                  defaultValue={values.vPresPinCode}
                  type="text"
                  placeholder="Vice President Address Pincode"
                  onChange={handleFormData("vPresPinCode")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="vPresOffLandLine"
                  defaultValue={values.vPresOffLandLine}
                  type="text"
                  placeholder="Vice President Office Landline"
                  onChange={handleFormData("vPresOffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="vPresResLandLine"
                  defaultValue={values.vPresResLandLine}
                  type="text"
                  placeholder="Vice President Residence Landline"
                  onChange={handleFormData("vPresResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="vPresMobileNumber"
                  defaultValue={values.vPresMobileNumber}
                  type="text"
                  placeholder="Vice President Mobile Number"
                  onChange={handleFormData("vPresMobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control
                  name="vPresWhatsappNumber"
                  defaultValue={values.vPresWhatsappNumber}
                  type="text"
                  placeholder="Vice President Whatsapp Number"
                  onChange={handleFormData("vPresWhatsappNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="vPresEmail"
                  defaultValue={values.vPresEmail}
                  type="text"
                  placeholder="Vice President Email Address"
                  onChange={handleFormData("vPresEmail")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Occupation Details</Form.Label>
                <Form.Control
                  name="vPresOccupation"
                  defaultValue={values.vPresOccupation}
                  type="text"
                  placeholder="Vice President Occupation"
                  onChange={handleFormData("vPresOccupation")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  name="vPresBirthDay"
                  defaultValue={values.vPresBirthDay}
                  type="text"
                  placeholder="Vice President Date of Birth"
                  onChange={handleFormData("vPresBirthDay")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Name</Form.Label>
                <Form.Control
                  name="vPresSpouseName"
                  defaultValue={values.vPresSpouseName}
                  type="text"
                  placeholder="Vice President Spouse Name"
                  onChange={handleFormData("vPresSpouseName")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Date of Birth</Form.Label>
                <Form.Control
                  name="vPresSpouseBirthDay"
                  defaultValue={values.vPresSpouseBirthDay}
                  type="text"
                  placeholder="Vice President's Spouse Date of Birth"
                  onChange={handleFormData("vPresSpouseBirthDay")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Marraige Anniversary</Form.Label>
                <Form.Control
                  name="vPresMarraigeDate"
                  defaultValue={values.vPresMarraigeDate}
                  type="text"
                  placeholder="Vice President Marraige Anniversary"
                  onChange={handleFormData("vPresMarraigeDate")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="formSectionHeader">
            <h3>Secretary Details</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Secretary Name</Form.Label>
                <Form.Control
                  name="secName"
                  defaultValue={values.secName}
                  type="text"
                  placeholder="Secretary Name"
                  onChange={handleFormData("secName")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  name="secPhoto"
                  defaultValue={values.secPhoto}
                  type="file"
                  placeholder="Secretary Photo"
                  onChange={handleFormData("secPhoto")}
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
                  name="secaddress"
                  defaultValue={values.secaddress}
                  type="text"
                  placeholder="Secretary Address"
                  onChange={handleFormData("secaddress")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={12} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="secPinCode"
                  defaultValue={values.secPinCode}
                  type="text"
                  placeholder="Secretary Address Pincode"
                  onChange={handleFormData("secPinCode")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="secOffLandLine"
                  defaultValue={values.secOffLandLine}
                  type="text"
                  placeholder="Secretary Office Landline"
                  onChange={handleFormData("secOffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="secResLandLine"
                  defaultValue={values.secResLandLine}
                  type="text"
                  placeholder="Secretary Residence Landline"
                  onChange={handleFormData("secResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="secMobileNumber"
                  defaultValue={values.secMobileNumber}
                  type="text"
                  placeholder="Secretary Mobile Number"
                  onChange={handleFormData("secMobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control
                  name="secWhatsappNumber"
                  defaultValue={values.secWhatsappNumber}
                  type="text"
                  placeholder="Secretary Whatsapp Number"
                  onChange={handleFormData("secWhatsappNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="secEmail"
                  defaultValue={values.secEmail}
                  type="text"
                  placeholder="Secretary Email Address"
                  onChange={handleFormData("secEmail")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Occupation Details</Form.Label>
                <Form.Control
                  name="secOccupation"
                  defaultValue={values.secOccupation}
                  type="text"
                  placeholder="Secretary Occupation"
                  onChange={handleFormData("secOccupation")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  name="secBirthDay"
                  defaultValue={values.secBirthDay}
                  type="text"
                  placeholder="Secretary Date of Birth"
                  onChange={handleFormData("secBirthDay")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Name</Form.Label>
                <Form.Control
                  name="secSpouseName"
                  defaultValue={values.secSpouseName}
                  type="text"
                  placeholder="Secretary Spouse Name"
                  onChange={handleFormData("secSpouseName")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Date of Birth</Form.Label>
                <Form.Control
                  name="secSpouseBirthDay"
                  defaultValue={values.secSpouseBirthDay}
                  type="text"
                  placeholder="Nominated Former President's Spouse Date of Birth"
                  onChange={handleFormData("secSpouseBirthDay")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Marraige Anniversary</Form.Label>
                <Form.Control
                  name="secMarraigeDate"
                  defaultValue={values.secMarraigeDate}
                  type="text"
                  placeholder="Secretary Marraige Anniversary"
                  onChange={handleFormData("secMarraigeDate")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="formSectionHeader">
            <h3>Joint Secretary Details</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Joint Secretary Name</Form.Label>
                <Form.Control
                  name="jtSecName"
                  defaultValue={values.jtSecName}
                  type="text"
                  placeholder="Joint Secretary Name"
                  onChange={handleFormData("jtSecName")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  name="jtSecPhoto"
                  defaultValue={values.jtSecPhoto}
                  type="file"
                  placeholder="Joint Secretary Photo"
                  onChange={handleFormData("jtSecPhoto")}
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
                  name="jtSecaddress"
                  defaultValue={values.jtSecaddress}
                  type="text"
                  placeholder="Joint Secretary Address"
                  onChange={handleFormData("jtSecaddress")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={12} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="jtSecPinCode"
                  defaultValue={values.jtSecPinCode}
                  type="text"
                  placeholder="Joint Secretary Address Pincode"
                  onChange={handleFormData("jtSecPinCode")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="jtSecOffLandLine"
                  defaultValue={values.jtSecOffLandLine}
                  type="text"
                  placeholder="Joint Secretary Office Landline"
                  onChange={handleFormData("jtSecOffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="jtSecResLandLine"
                  defaultValue={values.jtSecResLandLine}
                  type="text"
                  placeholder="Joint Secretary Residence Landline"
                  onChange={handleFormData("jtSecResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="jtSecMobileNumber"
                  defaultValue={values.jtSecMobileNumber}
                  type="text"
                  placeholder="Joint Secretary Mobile Number"
                  onChange={handleFormData("jtSecMobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control
                  name="jtSecWhatsappNumber"
                  defaultValue={values.jtSecWhatsappNumber}
                  type="text"
                  placeholder="Joint Secretary Whatsapp Number"
                  onChange={handleFormData("jtSecWhatsappNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="jtSecEmail"
                  defaultValue={values.jtSecEmail}
                  type="text"
                  placeholder="Joint Secretary Email Address"
                  onChange={handleFormData("jtSecEmail")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Occupation Details</Form.Label>
                <Form.Control
                  name="jtSecOccupation"
                  defaultValue={values.jtSecOccupation}
                  type="text"
                  placeholder="Joint Secretary Occupation"
                  onChange={handleFormData("jtSecOccupation")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  name="jtSecBirthDay"
                  defaultValue={values.jtSecBirthDay}
                  type="text"
                  placeholder="Joint Secretary Date of Birth"
                  onChange={handleFormData("jtSecBirthDay")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Name</Form.Label>
                <Form.Control
                  name="jtSecSpouseName"
                  defaultValue={values.jtSecSpouseName}
                  type="text"
                  placeholder="Joint Secretary Spouse Name"
                  onChange={handleFormData("jtSecSpouseName")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Date of Birth</Form.Label>
                <Form.Control
                  name="jtSecSpouseBirthDay"
                  defaultValue={values.jtSecSpouseBirthDay}
                  type="text"
                  placeholder="Joint Secretary's Spouse Date of Birth"
                  onChange={handleFormData("jtSecSpouseBirthDay")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Marraige Anniversary</Form.Label>
                <Form.Control
                  name="jtSecMarraigeDate"
                  defaultValue={values.jtSecMarraigeDate}
                  type="text"
                  placeholder="Joint Secretary Marraige Anniversary"
                  onChange={handleFormData("jtSecMarraigeDate")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="formSectionHeader">
            <h3>Treasurer Details</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Treasurer Name</Form.Label>
                <Form.Control
                  name="treasurerName"
                  defaultValue={values.treasurerName}
                  type="text"
                  placeholder="Treasurer Name"
                  onChange={handleFormData("treasurerName")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  name="treasurerPhoto"
                  defaultValue={values.treasurerPhoto}
                  type="file"
                  placeholder="Treasurer Photo"
                  onChange={handleFormData("treasurerPhoto")}
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
                  name="treasureraddress"
                  defaultValue={values.treasureraddress}
                  type="text"
                  placeholder="Treasurer Address"
                  onChange={handleFormData("treasureraddress")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={12} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="treasurerPinCode"
                  defaultValue={values.treasurerPinCode}
                  type="text"
                  placeholder="Treasurer Address Pincode"
                  onChange={handleFormData("treasurerPinCode")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="treasurerOffLandLine"
                  defaultValue={values.treasurerOffLandLine}
                  type="text"
                  placeholder="Treasurer Office Landline"
                  onChange={handleFormData("treasurerOffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="treasurerResLandLine"
                  defaultValue={values.treasurerResLandLine}
                  type="text"
                  placeholder="Treasurer Residence Landline"
                  onChange={handleFormData("treasurerResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="treasurerMobileNumber"
                  defaultValue={values.treasurerMobileNumber}
                  type="text"
                  placeholder="Treasurer Mobile Number"
                  onChange={handleFormData("treasurerMobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Whatsapp Number</Form.Label>
                <Form.Control
                  name="treasurerWhatsappNumber"
                  defaultValue={values.treasurerWhatsappNumber}
                  type="text"
                  placeholder="Treasurer Whatsapp Number"
                  onChange={handleFormData("treasurerWhatsappNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="treasurerEmail"
                  defaultValue={values.treasurerEmail}
                  type="text"
                  placeholder="Treasurer Email Address"
                  onChange={handleFormData("treasurerEmail")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Occupation Details</Form.Label>
                <Form.Control
                  name="treasurerOccupation"
                  defaultValue={values.treasurerOccupation}
                  type="text"
                  placeholder="Treasurer Occupation"
                  onChange={handleFormData("treasurerOccupation")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  name="treasurerBirthDay"
                  defaultValue={values.treasurerBirthDay}
                  type="text"
                  placeholder="Treasurer Date of Birth"
                  onChange={handleFormData("treasurerBirthDay")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Name</Form.Label>
                <Form.Control
                  name="treasurerSpouseName"
                  defaultValue={values.treasurerSpouseName}
                  type="text"
                  placeholder="Treasurer Spouse Name"
                  onChange={handleFormData("treasurerSpouseName")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Spouse Date of Birth</Form.Label>
                <Form.Control
                  name="treasurerSpouseBirthDay"
                  defaultValue={values.treasurerSpouseBirthDay}
                  type="text"
                  placeholder="Nominated Former President's Spouse Date of Birth"
                  onChange={handleFormData("treasurerSpouseBirthDay")}
                />
              </Form.Group>
            </Col>

            <Col lg={4} xs={12}>
              <Form.Group>
                <Form.Label>Marraige Anniversary</Form.Label>
                <Form.Control
                  name="treasurerMarraigeDate"
                  defaultValue={values.treasurerMarraigeDate}
                  type="text"
                  placeholder="Treasurer Marraige Anniversary"
                  onChange={handleFormData("treasurerMarraigeDate")}
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

export default Bpage3;
