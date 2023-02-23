import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import SecurePageSection from "../../SecurePageSection";

const GroupFormAForm = () => {
  const user = useSelector((state) => state.authentication.user);
  const [forms, setForms] = useState([]);

  const [grpName, setGrpName] = useState("");
  const [grpNumber, setGrpNumber] = useState("");
  const [grpAddress, setGrpAddress] = useState("");
  const [grpPresidentNum, setGrpPresidentNum] = useState("");
  const [grpSecretaryNum, setGrpSecretaryNum] = useState("");
  const [grpTreasurerNum, setGrpTreasurerNum] = useState("");
  const [CoupleMembers, setCoupleMembers] = useState("");
  const [SingleMembers, setSingleMembers] = useState("");
  const [amtToPay, setAmtToPay] = useState("5900");
  const [oldDuepayable, setOldDuepayable] = useState("");
  const [oldDueRedeemable, setOldDueRedeemable] = useState("");
  const [totalAmtPayable, setTotalAmtPayable] = useState("5900");
  const [amtPaid, setAmtPaid] = useState("");
  const [newDuepayable, setNewDuepayable] = useState("");
  const [newDueRedeemable, setNewDueRedeemable] = useState("");
  const [draft_chequeNum, setDraft_chequeNum] = useState("");
  const [chequedate, setChequedate] = useState("");
  const [drawnOn, setDrawnOn] = useState("");
  const [branchName, setBranchName] = useState("");

  const redirectToResponse = (id) => {
    navigate(`/grp-form-a-response/${id}`, { replace: true });
  };

  const fetchForms = async () => {
    const response = await axios.get(
      `/api/forms/${user.jsgGroupName}/grp-form-a/`
    );

    console.log(response.data);
    setForms(response.data);
  };

  useEffect(() => {
    fetchForms();
  }, []);

  const navigate = useNavigate();

  const amtPayable = () => {
    let amtToPayVal = amtToPay;
    let oldDuepayableVal = oldDuepayable;
    let oldDueRedeemableVal = oldDueRedeemable;
    if (!isNaN(amtToPay)) {
      amtToPayVal = 0;
    }

    if (!isNaN(oldDuepayable)) {
      oldDuepayableVal = 0;
    }

    if (!isNaN(oldDueRedeemable)) {
      oldDueRedeemableVal = 0;
    }
    let amt =
      Number(amtToPayVal) +
      Number(oldDuepayableVal) -
      Number(oldDueRedeemableVal);
    setTotalAmtPayable(amt);
  };

  async function FormSubmit(event) {
    event.preventDefault();
    let formField = new FormData();

    formField.append("grpName", grpName);
    formField.append("grpNumber", grpNumber);
    formField.append("grpAddress", grpAddress);
    formField.append("grpPresidentNum", grpPresidentNum);
    formField.append("grpSecretaryNum", grpSecretaryNum);
    formField.append("grpTreasurerNum", grpTreasurerNum);
    formField.append("CoupleMembers", CoupleMembers);
    formField.append("SingleMembers", SingleMembers);
    formField.append("oldDuepayable", oldDuepayable);
    formField.append("oldDueRedeemable", oldDueRedeemable);
    formField.append("totalAmtPayable", totalAmtPayable);
    formField.append("amtPaid", amtPaid);
    formField.append("newDuepayable", newDuepayable);
    formField.append("newDueRedeemable", newDueRedeemable);
    formField.append("draft_chequeNum", draft_chequeNum);
    formField.append("chequedate", chequedate);
    formField.append("drawnOn", drawnOn);
    formField.append("branchName", branchName);

    await axios({
      method: "post",
      url: "/api/forms/group/grp-form-a/",
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
              <h2>Form A</h2>
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

            <Form.Group as={Col} controlId="grpNumber">
              <Form.Label>Group Number</Form.Label>
              <Form.Control
                name="grpNumber"
                value={grpNumber}
                onChange={(e) => setGrpNumber(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="grpAddress">
              <Form.Label>Group Address</Form.Label>
              <Form.Control
                name="grpAddress"
                value={grpAddress}
                onChange={(e) => setGrpAddress(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="grpPresidentNum">
              <Form.Label>President Number</Form.Label>
              <Form.Control
                name="grpPresidentNum"
                value={grpPresidentNum}
                onChange={(e) => setGrpPresidentNum(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="grpSecretaryNum">
              <Form.Label>Secretary Number</Form.Label>
              <Form.Control
                name="grpSecretaryNum"
                value={grpSecretaryNum}
                onChange={(e) => setGrpSecretaryNum(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="grpTreasurerNum">
              <Form.Label>Treasurer Number</Form.Label>
              <Form.Control
                name="grpTreasurerNum"
                value={grpTreasurerNum}
                onChange={(e) => setGrpTreasurerNum(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group as={Col} controlId="CoupleMembers">
                <Form.Label>Couple Members</Form.Label>
                <Form.Control
                  name="CoupleMembers"
                  value={CoupleMembers}
                  onChange={(e) => setCoupleMembers(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Col} controlId="SingleMembers">
                <Form.Label>Single Members</Form.Label>
                <Form.Control
                  name="SingleMembers"
                  value={SingleMembers}
                  onChange={(e) => setSingleMembers(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="amtToPay">
              <Form.Label>Amount to be Paid</Form.Label>
              <Form.Control readOnly name="amtToPay" value={amtToPay} />
            </Form.Group>

            <Form.Group as={Col} controlId="oldDuepayable">
              <Form.Label>Old due to JSGIF</Form.Label>
              <Form.Control
                name="oldDuepayable"
                value={oldDuepayable}
                onChange={(e) => {
                  let amtToPayVal = amtToPay;
                  let oldDuepayableVal = e.target.value;
                  let oldDueRedeemableVal = oldDueRedeemable;
                  if (isNaN(amtToPayVal)) {
                    amtToPayVal = 0;
                  }

                  if (isNaN(oldDuepayable)) {
                    oldDuepayableVal = 0;
                  }

                  if (isNaN(oldDueRedeemable)) {
                    oldDueRedeemableVal = 0;
                  }
                  let amt =
                    Number(amtToPayVal) +
                    Number(oldDuepayableVal) -
                    Number(oldDueRedeemableVal);
                  setTotalAmtPayable(amt);
                  console.log("amt", amt);
                  setOldDuepayable(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="oldDueRedeemable">
              <Form.Label>Old due from JSGIF</Form.Label>
              <Form.Control
                name="oldDueRedeemable"
                value={oldDueRedeemable}
                onChange={(e) => {
                  let amtToPayVal = amtToPay;
                  let oldDuepayableVal = oldDuepayable;
                  let oldDueRedeemableVal = e.target.value;
                  if (isNaN(amtToPayVal)) {
                    amtToPayVal = 0;
                  }

                  if (isNaN(oldDuepayable)) {
                    oldDuepayableVal = 0;
                  }

                  if (isNaN(oldDueRedeemable)) {
                    oldDueRedeemableVal = 0;
                  }
                  let amt =
                    Number(amtToPayVal) +
                    Number(oldDuepayableVal) -
                    Number(oldDueRedeemableVal);
                  setTotalAmtPayable(amt);
                  console.log("amt", amt);
                  setOldDueRedeemable(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="totalAmtPayable">
              <Form.Label>Total Amount Payable</Form.Label>
              <Form.Control
                name="totalAmtPayable"
                value={totalAmtPayable}
                onChange={amtPayable}
                readOnly
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="AmtPaid">
              <Form.Label>Amount being Paid</Form.Label>
              <Form.Control
                name="amtPaid"
                value={amtPaid}
                onChange={(e) => {
                  let dueamount =
                    Number(totalAmtPayable) - Number(e.target.value);
                  if (dueamount > 0) {
                    setNewDuepayable(dueamount);
                    setNewDueRedeemable("");
                  } else {
                    setNewDueRedeemable(Math.abs(dueamount));
                    setNewDuepayable("");
                  }
                  setAmtPaid(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="newDuepayable">
              <Form.Label>Amount Due to JSGIF</Form.Label>
              <Form.Control
                readOnly
                name="newDuepayable"
                value={newDuepayable}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="newDueRedeemable">
              <Form.Label>Amount Due from JSGIF</Form.Label>
              <Form.Control
                readOnly
                name="newDueRedeemable"
                value={newDueRedeemable}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="draft_chequeNum">
              <Form.Label>Draft/Cheque Number</Form.Label>
              <Form.Control
                name="draft_chequeNum"
                value={draft_chequeNum}
                onChange={(e) => setDraft_chequeNum(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="chequedate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="Date"
                name="chequedate"
                value={chequedate}
                onChange={(e) => setChequedate(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="drawnOn">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control
                name="drawnOn"
                value={drawnOn}
                onChange={(e) => setDrawnOn(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="branchName">
              <Form.Label>Branch Name</Form.Label>
              <Form.Control
                name="branchName"
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
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

export default GroupFormAForm;
