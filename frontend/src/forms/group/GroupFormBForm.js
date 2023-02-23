import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const GroupFormBForm = () => {
  const [grpName, setGrpName] = useState("");
  const [grpNumber, setGrpNumber] = useState("");
  const [grpAddress, setGrpAddress] = useState("");
  const [stdCode, setStdCode] = useState("");
  const [regionName, setRegionName] = useState("");
  const [dateOfInaugration, setDateOfInaugration] = useState("");
  const [dateOfCharter, setDateOfCharter] = useState("");
  const [sponsorGrpName, setSponsorGrpName] = useState("");
  const [grpPhone, setGrpPhone] = useState("");
  const [grpMobile, setGrpMobile] = useState("");
  const [grpEmail, setGrpEmail] = useState("");
  const [electionMeetingDate, setElectionMeetingDate] = useState("");
  const [electedOnDate, setElectedOnDate] = useState("");
  const [presName, setPresName] = useState("");
  const [presaddress, setPresaddress] = useState("");
  const [presPinCode, setPresPinCode] = useState("");
  const [presOffLandLine, setPresOffLandLine] = useState("");
  const [presResLandLine, setPresResLandLine] = useState("");
  const [presMobileNumber, setPresMobileNumber] = useState("");
  const [presWhatsappNumber, setPresWhatsappNumber] = useState("");
  const [presEmail, setPresEmail] = useState("");
  const [presOccupation, setPresOccupation] = useState("");
  const [presSpouseName, setPresSpouseName] = useState("");
  const [presBirthDay, setPresBirthDay] = useState("");
  const [presSpouseBirthDay, setPresSpouseBirthDay] = useState("");
  const [presMarraigeDate, setPresMarraigeDate] = useState("");
  const [immFormerPresName, setImmFormerPresName] = useState("");
  const [immFormerPresaddress, setImmFormerPresaddress] = useState("");
  const [immFormerPresPinCode, setImmFormerPresPinCode] = useState("");
  const [immFormerPresOffLandLine, setImmFormerPresOffLandLine] = useState("");
  const [immFormerPresResLandLine, setImmFormerPresResLandLine] = useState("");
  const [immFormerPresMobileNumber, setImmFormerPresMobileNumber] =
    useState("");
  const [immFormerPresWhatsappNumber, setImmFormerPresWhatsappNumber] =
    useState("");
  const [immFormerPresEmail, setImmFormerPresEmail] = useState("");
  const [immFormerPresOccupation, setImmFormerPresOccupation] = useState("");
  const [immFormerPresSpouseName, setImmFormerPresSpouseName] = useState("");
  const [immFormerPresBirthDay, setImmFormerPresBirthDay] = useState("");
  const [immFormerPresSpouseBirthDay, setImmFormerPresSpouseBirthDay] =
    useState("");
  const [immFormerPresMarraigeDate, setImmFormerPresMarraigeDate] =
    useState("");
  const [founderPresName, setFounderPresName] = useState("");
  const [founderPresaddress, setFounderPresaddress] = useState("");
  const [founderPresPinCode, setFounderPresPinCode] = useState("");
  const [founderPresOffLandLine, setFounderPresOffLandLine] = useState("");
  const [founderPresResLandLine, setFounderPresResLandLine] = useState("");
  const [founderPresMobileNumber, setFounderPresMobileNumber] = useState("");
  const [founderPresWhatsappNumber, setFounderPresWhatsappNumber] =
    useState("");
  const [founderPresEmail, setFounderPresEmail] = useState("");
  const [founderPresOccupation, setFounderPresOccupation] = useState("");
  const [founderPresSpouseName, setFounderPresSpouseName] = useState("");
  const [founderPresBirthDay, setFounderPresBirthDay] = useState("");
  const [founderPresSpouseBirthDay, setFounderPresSpouseBirthDay] =
    useState("");
  const [founderPresMarraigeDate, setFounderPresMarraigeDate] = useState("");
  const [nominatedFormerPres1Name, setNominatedFormerPres1Name] = useState("");
  const [nominatedFormerPres1address, setNominatedFormerPres1address] =
    useState("");
  const [nominatedFormerPres1PinCode, setNominatedFormerPres1PinCode] =
    useState("");
  const [nominatedFormerPres1OffLandLine, setNominatedFormerPres1OffLandLine] =
    useState("");
  const [nominatedFormerPres1ResLandLine, setNominatedFormerPres1ResLandLine] =
    useState("");
  const [
    nominatedFormerPres1MobileNumber,
    setNominatedFormerPres1MobileNumber,
  ] = useState("");
  const [
    nominatedFormerPres1WhatsappNumber,
    setNominatedFormerPres1WhatsappNumber,
  ] = useState("");
  const [nominatedFormerPres1Email, setNominatedFormerPres1Email] =
    useState("");
  const [nominatedFormerPres1Occupation, setNominatedFormerPres1Occupation] =
    useState("");
  const [nominatedFormerPres1SpouseName, setNominatedFormerPres1SpouseName] =
    useState("");
  const [nominatedFormerPres1BirthDay, setNominatedFormerPres1BirthDay] =
    useState("");
  const [
    nominatedFormerPres1SpouseBirthDay,
    setNominatedFormerPres1SpouseBirthDay,
  ] = useState("");
  const [
    nominatedFormerPres1MarraigeDate,
    setNominatedFormerPres1MarraigeDate,
  ] = useState("");
  const [nominatedFormerPres2Name, setNominatedFormerPres2Name] = useState("");
  const [nominatedFormerPres2address, setNominatedFormerPres2address] =
    useState("");
  const [nominatedFormerPres2PinCode, setNominatedFormerPres2PinCode] =
    useState("");
  const [nominatedFormerPres2OffLandLine, setNominatedFormerPres2OffLandLine] =
    useState("");
  const [nominatedFormerPres2ResLandLine, setNominatedFormerPres2ResLandLine] =
    useState("");
  const [
    nominatedFormerPres2MobileNumber,
    setNominatedFormerPres2MobileNumber,
  ] = useState("");
  const [
    nominatedFormerPres2WhatsappNumber,
    setNominatedFormerPres2WhatsappNumber,
  ] = useState("");
  const [nominatedFormerPres2Email, setNominatedFormerPres2Email] =
    useState("");
  const [nominatedFormerPres2Occupation, setNominatedFormerPres2Occupation] =
    useState("");
  const [nominatedFormerPres2SpouseName, setNominatedFormerPres2SpouseName] =
    useState("");
  const [nominatedFormerPres2BirthDay, setNominatedFormerPres2BirthDay] =
    useState("");
  const [
    nominatedFormerPres2SpouseBirthDay,
    setNominatedFormerPres2SpouseBirthDay,
  ] = useState("");
  const [
    nominatedFormerPres2MarraigeDate,
    setNominatedFormerPres2MarraigeDate,
  ] = useState("");
  const [nominatedFormerPres3Name, setNominatedFormerPres3Name] = useState("");
  const [nominatedFormerPres3address, setNominatedFormerPres3address] =
    useState("");
  const [nominatedFormerPres3PinCode, setNominatedFormerPres3PinCode] =
    useState("");
  const [nominatedFormerPres3OffLandLine, setNominatedFormerPres3OffLandLine] =
    useState("");
  const [nominatedFormerPres3ResLandLine, setNominatedFormerPres3ResLandLine] =
    useState("");
  const [
    nominatedFormerPres3MobileNumber,
    setNominatedFormerPres3MobileNumber,
  ] = useState("");
  const [
    nominatedFormerPres3WhatsappNumber,
    setNominatedFormerPres3WhatsappNumber,
  ] = useState("");
  const [nominatedFormerPres3Email, setNominatedFormerPres3Email] =
    useState("");
  const [nominatedFormerPres3Occupation, setNominatedFormerPres3Occupation] =
    useState("");
  const [nominatedFormerPres3SpouseName, setNominatedFormerPres3SpouseName] =
    useState("");
  const [nominatedFormerPres3BirthDay, setNominatedFormerPres3BirthDay] =
    useState("");
  const [
    nominatedFormerPres3SpouseBirthDay,
    setNominatedFormerPres3SpouseBirthDay,
  ] = useState("");
  const [
    nominatedFormerPres3MarraigeDate,
    setNominatedFormerPres3MarraigeDate,
  ] = useState("");
  const [vPresName, setVPresName] = useState("");
  const [vPresaddress, setVPresaddress] = useState("");
  const [vPresPinCode, setVPresPinCode] = useState("");
  const [vPresOffLandLine, setVPresOffLandLine] = useState("");
  const [vPresResLandLine, setVPresResLandLine] = useState("");
  const [vPresMobileNumber, setVPresMobileNumber] = useState("");
  const [vPresWhatsappNumber, setVPresWhatsappNumber] = useState("");
  const [vPresEmail, setVPresEmail] = useState("");
  const [vPresOccupation, setVPresOccupation] = useState("");
  const [vPresSpouseName, setVPresSpouseName] = useState("");
  const [vPresBirthDay, setVPresBirthDay] = useState("");
  const [vPresSpouseBirthDay, setVPresSpouseBirthDay] = useState("");
  const [vPresMarraigeDate, setVPresMarraigeDate] = useState("");
  const [secName, setSecName] = useState("");
  const [secaddress, setSecaddress] = useState("");
  const [secPinCode, setSecPinCode] = useState("");
  const [secOffLandLine, setSecOffLandLine] = useState("");
  const [secResLandLine, setSecResLandLine] = useState("");
  const [secMobileNumber, setSecMobileNumber] = useState("");
  const [secWhatsappNumber, setSecWhatsappNumber] = useState("");
  const [secEmail, setSecEmail] = useState("");
  const [secOccupation, setSecOccupation] = useState("");
  const [secSpouseName, setSecSpouseName] = useState("");
  const [secBirthDay, setSecBirthDay] = useState("");
  const [secSpouseBirthDay, setSecSpouseBirthDay] = useState("");
  const [secMarraigeDate, setSecMarraigeDate] = useState("");
  const [jtSecName, setJtSecName] = useState("");
  const [jtSecaddress, setJtSecaddress] = useState("");
  const [jtSecPinCode, setJtSecPinCode] = useState("");
  const [jtSecOffLandLine, setJtSecOffLandLine] = useState("");
  const [jtSecResLandLine, setJtSecResLandLine] = useState("");
  const [jtSecMobileNumber, setJtSecMobileNumber] = useState("");
  const [jtSecWhatsappNumber, setJtSecWhatsappNumber] = useState("");
  const [jtSecEmail, setJtSecEmail] = useState("");
  const [jtSecOccupation, setJtSecOccupation] = useState("");
  const [jtSecSpouseName, setJtSecSpouseName] = useState("");
  const [jtSecBirthDay, setJtSecBirthDay] = useState("");
  const [jtSecSpouseBirthDay, setJtSecSpouseBirthDay] = useState("");
  const [jtSecMarraigeDate, setJtSecMarraigeDate] = useState("");
  const [treasurerName, setTreasurerName] = useState("");
  const [treasureraddress, setTreasureraddress] = useState("");
  const [treasurerPinCode, setTreasurerPinCode] = useState("");
  const [treasurerOffLandLine, setTreasurerOffLandLine] = useState("");
  const [treasurerResLandLine, setTreasurerResLandLine] = useState("");
  const [treasurerMobileNumber, setTreasurerMobileNumber] = useState("");
  const [treasurerWhatsappNumber, setTreasurerWhatsappNumber] = useState("");
  const [treasurerEmail, setTreasurerEmail] = useState("");
  const [treasurerOccupation, setTreasurerOccupation] = useState("");
  const [treasurerSpouseName, setTreasurerSpouseName] = useState("");
  const [treasurerBirthDay, setTreasurerBirthDay] = useState("");
  const [treasurerSpouseBirthDay, setTreasurerSpouseBirthDay] = useState("");
  const [treasurerMarraigeDate, setTreasurerMarraigeDate] = useState("");
  const [committee1Name, setCommittee1Name] = useState("");
  const [committee1address, setCommittee1address] = useState("");
  const [committee1MemNum, setCommittee1MemNum] = useState("");
  const [committee1PinCode, setCommittee1PinCode] = useState("");
  const [committee1ResLandLine, setCommittee1ResLandLine] = useState("");
  const [committee1Email, setCommittee1Email] = useState("");
  const [committee1MobileNumber, setCommittee1MobileNumber] = useState("");
  const [committee2Name, setCommittee2Name] = useState("");
  const [committee2address, setCommittee2address] = useState("");
  const [committee2MemNum, setCommittee2MemNum] = useState("");
  const [committee2PinCode, setCommittee2PinCode] = useState("");
  const [committee2ResLandLine, setCommittee2ResLandLine] = useState("");
  const [committee2Email, setCommittee2Email] = useState("");
  const [committee2MobileNumber, setCommittee2MobileNumber] = useState("");
  const [committee3Name, setCommittee3Name] = useState("");
  const [committee3address, setCommittee3address] = useState("");
  const [committee3MemNum, setCommittee3MemNum] = useState("");
  const [committee3PinCode, setCommittee3PinCode] = useState("");
  const [committee3ResLandLine, setCommittee3ResLandLine] = useState("");
  const [committee3Email, setCommittee3Email] = useState("");
  const [committee3MobileNumber, setCommittee3MobileNumber] = useState("");
  const [committee4Name, setCommittee4Name] = useState("");
  const [committee4address, setCommittee4address] = useState("");
  const [committee4MemNum, setCommittee4MemNum] = useState("");
  const [committee4PinCode, setCommittee4PinCode] = useState("");
  const [committee4ResLandLine, setCommittee4ResLandLine] = useState("");
  const [committee4Email, setCommittee4Email] = useState("");
  const [committee4MobileNumber, setCommittee4MobileNumber] = useState("");
  const [committee5Name, setCommittee5Name] = useState("");
  const [committee5address, setCommittee5address] = useState("");
  const [committee5MemNum, setCommittee5MemNum] = useState("");
  const [committee5PinCode, setCommittee5PinCode] = useState("");
  const [committee5ResLandLine, setCommittee5ResLandLine] = useState("");
  const [committee5Email, setCommittee5Email] = useState("");
  const [committee5MobileNumber, setCommittee5MobileNumber] = useState("");
  const [committee6Name, setCommittee6Name] = useState("");
  const [committee6address, setCommittee6address] = useState("");
  const [committee6MemNum, setCommittee6MemNum] = useState("");
  const [committee6PinCode, setCommittee6PinCode] = useState("");
  const [committee6ResLandLine, setCommittee6ResLandLine] = useState("");
  const [committee6Email, setCommittee6Email] = useState("");
  const [committee6MobileNumber, setCommittee6MobileNumber] = useState("");
  const [committee7Name, setCommittee7Name] = useState("");
  const [committee7address, setCommittee7address] = useState("");
  const [committee7MemNum, setCommittee7MemNum] = useState("");
  const [committee7PinCode, setCommittee7PinCode] = useState("");
  const [committee7ResLandLine, setCommittee7ResLandLine] = useState("");
  const [committee7Email, setCommittee7Email] = useState("");
  const [committee7MobileNumber, setCommittee7MobileNumber] = useState("");
  const [committee8Name, setCommittee8Name] = useState("");
  const [committee8address, setCommittee8address] = useState("");
  const [committee8MemNum, setCommittee8MemNum] = useState("");
  const [committee8PinCode, setCommittee8PinCode] = useState("");
  const [committee8ResLandLine, setCommittee8ResLandLine] = useState("");
  const [committee8Email, setCommittee8Email] = useState("");
  const [committee8MobileNumber, setCommittee8MobileNumber] = useState("");

  //  const redirectToRagm = (id) => {
  //   navigate(`/ragm-response/${id}`, { replace: true });
  //};

  const navigate = useNavigate();

  async function FormSubmit(event) {
    event.preventDefault();
    let formField = new FormData();

    formField.append("grpName", grpName);
    formField.append("grpNumber", grpNumber);
    formField.append("grpAddress", grpAddress);

    await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/forms/group/grpagm/",
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
              <h2>Group AGM Notice</h2>
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
            <Form.Group as={Col} controlId="CoupleMembers">
              <Form.Label>Number of Couple Members</Form.Label>
              <Form.Control
                name="CoupleMembers"
                value={CoupleMembers}
                onChange={(e) => setCoupleMembers(e.target.value)}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="SingleMembers">
              <Form.Label>Number of Single Members</Form.Label>
              <Form.Control
                name="SingleMembers"
                value={SingleMembers}
                onChange={(e) => setSingleMembers(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="amtToPay">
              <Form.Label>Amount to be Payed</Form.Label>
              <Form.Control
                name="amtToPay"
                value={amtToPay}
                onChange={(e) => setAmtToPay(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="oldDuepayable">
              <Form.Label>Old due to JSGIF</Form.Label>
              <Form.Control
                name="oldDuepayable"
                value={oldDuepayable}
                onChange={(e) => setOldDuepayable(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="oldDueRedeemable">
              <Form.Label>Old due from JSGIF</Form.Label>
              <Form.Control
                name="oldDueRedeemable"
                value={oldDueRedeemable}
                onChange={(e) => setOldDueRedeemable(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="totalAmtPayable">
              <Form.Label>Total Amount Payable</Form.Label>
              <Form.Control
                name="totalAmtPayable"
                value={totalAmtPayable}
                onChange={amtPayable}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="AmtPayed">
              <Form.Label>Amount being Payed</Form.Label>
              <Form.Control
                name="amtPayed"
                value={amtPayed}
                onChange={(e) => setAmtPayed(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="newDuepayable">
              <Form.Label>Amount Due to JSGIF</Form.Label>
              <Form.Control
                name="newDuepayable"
                value={newDuepayable}
                onChange={(e) => setNewDuepayable(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="newDueRedeemable">
              <Form.Label>Amount Due from JSGIF</Form.Label>
              <Form.Control
                name="newDueRedeemable"
                value={newDueRedeemable}
                onChange={(e) => setNewDueRedeemable(e.target.value)}
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default GroupFormBForm;
