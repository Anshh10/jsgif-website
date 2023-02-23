import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const Bpage4 = ({ nextStep, handleFormData, prevStep, values }) => {
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
            <h3>Managing Committee Member 1</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Committee Member 1 Name</Form.Label>
                <Form.Control
                  name="com1Name"
                  defaultValue={values.com1Name}
                  type="text"
                  placeholder="Committee Member 1 Name"
                  onChange={handleFormData("com1Name")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="com1PinCode"
                  defaultValue={values.com1PinCode}
                  type="text"
                  placeholder="Committee Member 1 Address Pincode"
                  onChange={handleFormData("com1PinCode")}
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
                  name="com1address"
                  defaultValue={values.com1address}
                  type="text"
                  placeholder="Committee Member 1 Address"
                  onChange={handleFormData("com1address")}
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
                  defaultValue={values.com1OffLandLine}
                  type="text"
                  placeholder="Committee Member 1 Office Landline"
                  onChange={handleFormData("vPresOffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="vPresResLandLine"
                  defaultValue={values.com1ResLandLine}
                  type="text"
                  placeholder="Committee Member 1 Residence Landline"
                  onChange={handleFormData("vPresResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="com1MobileNumber"
                  defaultValue={values.com1MobileNumber}
                  type="text"
                  placeholder="Committee Member 1 Mobile Number"
                  onChange={handleFormData("com1MobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="com1Email"
                  defaultValue={values.com1Email}
                  type="text"
                  placeholder="Committee Member 1 Email Address"
                  onChange={handleFormData("com1Email")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="formSectionHeader">
            <h3>Managing Committee Member 2</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Committee Member 2 Name</Form.Label>
                <Form.Control
                  name="com2Name"
                  defaultValue={values.com2Name}
                  type="text"
                  placeholder="Committee Member 2 Name"
                  onChange={handleFormData("com2Name")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="com2PinCode"
                  defaultValue={values.com2PinCode}
                  type="text"
                  placeholder="Committee Member 2 Address Pincode"
                  onChange={handleFormData("com2PinCode")}
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
                  name="com2address"
                  defaultValue={values.com2address}
                  type="text"
                  placeholder="Committee Member 2 Address"
                  onChange={handleFormData("com2address")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="com2OffLandLine"
                  defaultValue={values.com2OffLandLine}
                  type="text"
                  placeholder="Committee Member 2 Office Landline"
                  onChange={handleFormData("com2OffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="com2ResLandLine"
                  defaultValue={values.com2ResLandLine}
                  type="text"
                  placeholder="Committee Member 2 Residence Landline"
                  onChange={handleFormData("com2ResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="com2MobileNumber"
                  defaultValue={values.com2MobileNumber}
                  type="text"
                  placeholder="Committee Member 2 Mobile Number"
                  onChange={handleFormData("com2MobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="com2Email"
                  defaultValue={values.com2Email}
                  type="text"
                  placeholder="Committee Member 2 Email Address"
                  onChange={handleFormData("com2Email")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="formSectionHeader">
            <h3>Managing Committee Member 3</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Committee Member 3 Name</Form.Label>
                <Form.Control
                  name="com3Name"
                  defaultValue={values.com3Name}
                  type="text"
                  placeholder="Committee Member 3 Name"
                  onChange={handleFormData("com3Name")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="com3PinCode"
                  defaultValue={values.com3PinCode}
                  type="text"
                  placeholder="Committee Member 3 Address Pincode"
                  onChange={handleFormData("com3PinCode")}
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
                  name="com3address"
                  defaultValue={values.com3address}
                  type="text"
                  placeholder="Committee Member 3 Address"
                  onChange={handleFormData("com3address")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="com3OffLandLine"
                  defaultValue={values.com3OffLandLine}
                  type="text"
                  placeholder="Committee Member 3 Office Landline"
                  onChange={handleFormData("com3OffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="com3ResLandLine"
                  defaultValue={values.com3ResLandLine}
                  type="text"
                  placeholder="Committee Member 3 Residence Landline"
                  onChange={handleFormData("com3ResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="com3MobileNumber"
                  defaultValue={values.com3MobileNumber}
                  type="text"
                  placeholder="Committee Member 3 Mobile Number"
                  onChange={handleFormData("com3MobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="com3Email"
                  defaultValue={values.com3Email}
                  type="text"
                  placeholder="Committee Member 3 Email Address"
                  onChange={handleFormData("com3Email")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="formSectionHeader">
            <h3>Managing Committee Member 4</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Committee Member 4 Name</Form.Label>
                <Form.Control
                  name="com4Name"
                  defaultValue={values.com4Name}
                  type="text"
                  placeholder="Committee Member 4 Name"
                  onChange={handleFormData("com4Name")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="com4PinCode"
                  defaultValue={values.com4PinCode}
                  type="text"
                  placeholder="Committee Member 4 Address Pincode"
                  onChange={handleFormData("com4PinCode")}
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
                  name="com4address"
                  defaultValue={values.com4address}
                  type="text"
                  placeholder="Committee Member 4 Address"
                  onChange={handleFormData("com4address")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="com4OffLandLine"
                  defaultValue={values.com4OffLandLine}
                  type="text"
                  placeholder="Committee Member 4 Office Landline"
                  onChange={handleFormData("com4OffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="com4ResLandLine"
                  defaultValue={values.com4ResLandLine}
                  type="text"
                  placeholder="Committee Member 4 Residence Landline"
                  onChange={handleFormData("com4ResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="com4MobileNumber"
                  defaultValue={values.com4MobileNumber}
                  type="text"
                  placeholder="Committee Member 4 Mobile Number"
                  onChange={handleFormData("com4MobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="com4Email"
                  defaultValue={values.com4Email}
                  type="text"
                  placeholder="Committee Member 4 Email Address"
                  onChange={handleFormData("com4Email")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="formSectionHeader">
            <h3>Managing Committee Member 5</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Committee Member 5 Name</Form.Label>
                <Form.Control
                  name="com5Name"
                  defaultValue={values.com5Name}
                  type="text"
                  placeholder="Committee Member 5 Name"
                  onChange={handleFormData("com5Name")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="com5PinCode"
                  defaultValue={values.com5PinCode}
                  type="text"
                  placeholder="Committee Member 5 Address Pincode"
                  onChange={handleFormData("com5PinCode")}
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
                  name="com5address"
                  defaultValue={values.com5address}
                  type="text"
                  placeholder="Committee Member 5 Address"
                  onChange={handleFormData("com5address")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="com5OffLandLine"
                  defaultValue={values.com5OffLandLine}
                  type="text"
                  placeholder="Committee Member 5 Office Landline"
                  onChange={handleFormData("com5OffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="com5ResLandLine"
                  defaultValue={values.com5ResLandLine}
                  type="text"
                  placeholder="Committee Member 5 Residence Landline"
                  onChange={handleFormData("com5ResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="com5MobileNumber"
                  defaultValue={values.com5MobileNumber}
                  type="text"
                  placeholder="Committee Member 5 Mobile Number"
                  onChange={handleFormData("com5MobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="com5Email"
                  defaultValue={values.com5Email}
                  type="text"
                  placeholder="Committee Member 5 Email Address"
                  onChange={handleFormData("com5Email")}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="formSectionHeader">
            <h3>Managing Committee Member 6</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Committee Member 6 Name</Form.Label>
                <Form.Control
                  name="com6Name"
                  defaultValue={values.com6Name}
                  type="text"
                  placeholder="Committee Member 6 Name"
                  onChange={handleFormData("com6Name")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="com6PinCode"
                  defaultValue={values.com6PinCode}
                  type="text"
                  placeholder="Committee Member 6 Address Pincode"
                  onChange={handleFormData("com6PinCode")}
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
                  name="com6address"
                  defaultValue={values.com6address}
                  type="text"
                  placeholder="Committee Member 6 Address"
                  onChange={handleFormData("com6address")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="com6OffLandLine"
                  defaultValue={values.com6OffLandLine}
                  type="text"
                  placeholder="Committee Member 6 Office Landline"
                  onChange={handleFormData("com6OffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="com6ResLandLine"
                  defaultValue={values.com6ResLandLine}
                  type="text"
                  placeholder="Committee Member 6 Residence Landline"
                  onChange={handleFormData("com6ResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="com6MobileNumber"
                  defaultValue={values.com6MobileNumber}
                  type="text"
                  placeholder="Committee Member 6 Mobile Number"
                  onChange={handleFormData("com6MobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="com6Email"
                  defaultValue={values.com6Email}
                  type="text"
                  placeholder="Committee Member 6 Email Address"
                  onChange={handleFormData("com6Email")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="formSectionHeader">
            <h3>Managing Committee Member 7</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Committee Member 7 Name</Form.Label>
                <Form.Control
                  name="com7Name"
                  defaultValue={values.com7Name}
                  type="text"
                  placeholder="Committee Member 7 Name"
                  onChange={handleFormData("com7Name")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="com7PinCode"
                  defaultValue={values.com7PinCode}
                  type="text"
                  placeholder="Committee Member 7 Address Pincode"
                  onChange={handleFormData("com7PinCode")}
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
                  name="com7address"
                  defaultValue={values.com7address}
                  type="text"
                  placeholder="Committee Member 7 Address"
                  onChange={handleFormData("com7address")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="com7OffLandLine"
                  defaultValue={values.com7OffLandLine}
                  type="text"
                  placeholder="Committee Member 7 Office Landline"
                  onChange={handleFormData("com7OffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="com7ResLandLine"
                  defaultValue={values.com7ResLandLine}
                  type="text"
                  placeholder="Committee Member 7 Residence Landline"
                  onChange={handleFormData("com7ResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="com7MobileNumber"
                  defaultValue={values.com7MobileNumber}
                  type="text"
                  placeholder="Committee Member 7 Mobile Number"
                  onChange={handleFormData("com7MobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="com7Email"
                  defaultValue={values.com7Email}
                  type="text"
                  placeholder="Committee Member 7 Email Address"
                  onChange={handleFormData("com7Email")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="formSectionHeader">
            <h3>Managing Committee Member 8</h3>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Committee Member 8 Name</Form.Label>
                <Form.Control
                  name="com8Name"
                  defaultValue={values.com8Name}
                  type="text"
                  placeholder="Committee Member 8 Name"
                  onChange={handleFormData("com8Name")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  name="com8PinCode"
                  defaultValue={values.com8PinCode}
                  type="text"
                  placeholder="Committee Member 8 Address Pincode"
                  onChange={handleFormData("com8PinCode")}
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
                  name="com8address"
                  defaultValue={values.com8address}
                  type="text"
                  placeholder="Committee Member 8 Address"
                  onChange={handleFormData("com8address")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Office Landline</Form.Label>
                <Form.Control
                  name="com8OffLandLine"
                  defaultValue={values.com8OffLandLine}
                  type="text"
                  placeholder="Committee Member 8 Office Landline"
                  onChange={handleFormData("com8OffLandLine")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Residence Landline</Form.Label>
                <Form.Control
                  name="com8ResLandLine"
                  defaultValue={values.com8ResLandLine}
                  type="text"
                  placeholder="Committee Member 8 Residence Landline"
                  onChange={handleFormData("com8ResLandLine")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name="com8MobileNumber"
                  defaultValue={values.com8MobileNumber}
                  type="text"
                  placeholder="Committee Member 8 Mobile Number"
                  onChange={handleFormData("com8MobileNumber")}
                />
              </Form.Group>
            </Col>

            <Col lg={6} xs={12}>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="com8Email"
                  defaultValue={values.com8Email}
                  type="text"
                  placeholder="Committee Member 8 Email Address"
                  onChange={handleFormData("com8Email")}
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

export default Bpage4;
