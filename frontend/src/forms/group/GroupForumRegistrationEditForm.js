import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import SecurePageSection from "../../SecurePageSection";

const GroupForumRegistrationEdit = () => {
  const [response, setResponse] = useState([]);

  const [grpName, setGrpName] = useState("");
  const [formDate, setFormDate] = useState("");
  const [parentgName, setParentGName] = useState("");
  const [cordName1, setCordName1] = useState("");
  const [cordpost1, setCordPost1] = useState("");
  const [cordName2, setCordName2] = useState("");
  const [cordpost2, setCordPost2] = useState("");
  const [formationDate, setFormationDate] = useState("");
  const [presName, setPresName] = useState("");
  const [vPresName, setVPresName] = useState("");
  const [secName, setSecName] = useState("");
  const [jtSecName, setJtSecName] = useState("");
  const [tresName, setTresName] = useState("");
  const [commName1, setCommName1] = useState("");
  const [commName2, setCommName2] = useState("");
  const [commName3, setCommName3] = useState("");
  const [commName4, setCommName4] = useState("");
  const [commName5, setCommName5] = useState("");
  const [ddNumber, setDdNumber] = useState("");
  const [bankName, setBankName] = useState("");
  const [ddDate, setDdDate] = useState("");

  const navigate = useNavigate();
  const responseId = useParams();

  const EditForm = () => {
    axios
      .get(`/api/forms/group/grp-forum-registraion/${responseId.id}/`)
      .then(function (res) {
        setResponse(res.data);
        console.log(res.data);
        setGrpName(res.data.grpName);
        setFormDate(res.data.formDate);
        setParentGName(res.data.parentgName);
        setCordName1(res.data.cordName1);
        setCordPost1(res.data.cordpost1);
        setCordName2(res.data.cordName2);
        setCordPost2(res.data.cordpost2);
        setFormationDate(res.data.formationDate);
        setPresName(res.data.presName);
        setVPresName(res.data.vPresName);
        setSecName(res.data.secName);
        setJtSecName(res.data.jtSecName);
        setTresName(res.data.tresName);
        setCommName1(res.data.commName1);
        setCommName2(res.data.commName2);
        setCommName3(res.data.commName3);
        setCommName4(res.data.commName4);
        setCommName5(res.data.commName5);
        setDdNumber(res.data.ddNumber);
        setBankName(res.data.bankName);
        setDdDate(res.data.ddDate);
      });
  };

  useEffect(() => {
    EditForm();
  }, []);

  const redirectToResponse = (id) => {
    navigate(`/grp-forum-registraion-response/${id}`, { replace: true });
  };

  async function FormSubmit(event) {
    event.preventDefault();
    let formField = new FormData();

    formField.append("grpName", grpName);
    formField.append("formDate", formDate);
    formField.append("parentgName", parentgName);
    formField.append("cordName1", cordName1);
    formField.append("cordpost1", cordpost1);
    formField.append("cordName2", cordName2);
    formField.append("cordpost2", cordpost2);
    formField.append("formationDate", formationDate);
    formField.append("presName", presName);
    formField.append("vPresName", vPresName);
    formField.append("secName", secName);
    formField.append("jtSecName", jtSecName);
    formField.append("tresName", tresName);
    formField.append("commName1", commName1);
    formField.append("commName2", commName2);
    formField.append("commName3", commName3);
    formField.append("commName4", commName4);
    formField.append("commName5", commName5);
    formField.append("ddNumber", ddNumber);
    formField.append("bankName", bankName);
    formField.append("ddDate", ddDate);

    await axios({
      method: "put",
      url: `/api/forms/group/grp-forum-registraion/${response.id}/`,
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
              <h2>Group Registration</h2>
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="grpName">
              <Form.Label>Group Name</Form.Label>
              <Form.Control
                name="grpName"
                value={grpName}
                onChange={(e) => setGrpName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formDate">
              <Form.Label>Form Date</Form.Label>
              <Form.Control
                type="date"
                name="formDate"
                value={formDate}
                onChange={(e) => setFormDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="parentgName">
              <Form.Label>Parent Group Name</Form.Label>
              <Form.Control
                name="parentgName"
                value={parentgName}
                onChange={(e) => setParentGName(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="meetingDate">
              <Form.Label>Co-Ordinator 1 Name</Form.Label>
              <Form.Control
                name="cordName1"
                value={cordName1}
                onChange={(e) => setCordName1(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="meetingTime">
              <Form.Label>Co-Ordinator 1 Post</Form.Label>
              <Form.Control
                name="cordpost1"
                value={cordpost1}
                onChange={(e) => setCordPost1(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="meetingAddress">
              <Form.Label>Co-Ordinator 2 Name</Form.Label>
              <Form.Control
                name="cordName2"
                value={cordName2}
                onChange={(e) => setCordName2(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="meetingCity">
              <Form.Label>Co-Ordinator 2 Post</Form.Label>
              <Form.Control
                name="cordpost2"
                value={cordpost2}
                onChange={(e) => setCordPost2(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formationDate">
              <Form.Label>Formation Date</Form.Label>
              <Form.Control
                type="date"
                name="formationDate"
                value={formationDate}
                onChange={(e) => setFormationDate(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="zipCode">
              <Form.Label>President Name</Form.Label>
              <Form.Control
                name="presName"
                value={presName}
                onChange={(e) => setPresName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="forTheYear">
              <Form.Label>Vice President Name</Form.Label>
              <Form.Control
                name="vPresName"
                value={vPresName}
                onChange={(e) => setVPresName(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="forTheYear">
              <Form.Label>Secretary Name</Form.Label>
              <Form.Control
                name="secName"
                value={secName}
                onChange={(e) => setSecName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="forTheYear">
              <Form.Label>Jt. Secretary Name</Form.Label>
              <Form.Control
                name="jtSecName"
                value={jtSecName}
                onChange={(e) => setJtSecName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="secretaryName">
              <Form.Label>Treasurer Secretary</Form.Label>
              <Form.Control
                name="tresName"
                value={tresName}
                onChange={(e) => setTresName(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Committee Member 1 Name</Form.Label>
              <Form.Control
                name="commName1"
                value={commName1}
                onChange={(e) => setCommName1(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Committee Member 2 Name</Form.Label>
              <Form.Control
                name="commName2"
                value={commName2}
                onChange={(e) => setCommName2(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Committee Member 3 Name</Form.Label>
              <Form.Control
                name="commName3"
                value={commName3}
                onChange={(e) => setCommName3(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Committee Member 4 Name</Form.Label>
              <Form.Control
                name="commName4"
                value={commName4}
                onChange={(e) => setCommName4(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Committee Member 5 Name</Form.Label>
              <Form.Control
                name="commName5"
                value={commName5}
                onChange={(e) => setCommName5(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>DD Number</Form.Label>
              <Form.Control
                name="ddNumber"
                value={ddNumber}
                onChange={(e) => setDdNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control
                name="bankName"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>DD Date</Form.Label>
              <Form.Control
                type="date"
                name="ddDate"
                value={ddDate}
                onChange={(e) => setDdDate(e.target.value)}
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

export default GroupForumRegistrationEdit;
