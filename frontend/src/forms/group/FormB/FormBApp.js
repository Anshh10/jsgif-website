import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Bpage1 from "./Bpage1";
import Bpage2 from "./Bpage2";
import Bpage3 from "./Bpage3";
import Bpage4 from "./Bpage4";
import Confirm from "./Confirm";

function FormBApp() {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    grpName: "",
    grpNumber: "",
    grpAddress: "",
    stdCode: "",
    regionName: "",
    dateOfInaugration: "",
    dateOfCharter: "",
    sponsorGrpName: "",
    grpPhone: "",
    grpMobile: "",
    grpEmail: "",
    electionMeetingDate: "",
    electedOnDate: "",
    presName: "",
    presPhoto: null,
    presaddress: "",
    presPinCode: "",
    presOffLandLine: "",
    presResLandLine: "",
    presMobileNumber: "",
    presWhatsappNumber: "",
    presEmail: "",
    presOccupation: "",
    presSpouseName: "",
    presBirthDay: "",
    presSpouseBirthDay: "",
    presMarraigeDate: "",
    immFormerPresName: "",
    immFormerPresPhoto: null,
    immFormerPresaddress: "",
    immFormerPresPinCode: "",
    immFormerPresOffLandLine: "",
    immFormerPresResLandLine: "",
    immFormerPresMobileNumber: "",
    immFormerPresWhatsappNumber: "",
    immFormerPresEmail: "",
    immFormerPresOccupation: "",
    immFormerPresSpouseName: "",
    immFormerPresBirthDay: "",
    immFormerPresSpouseBirthDay: "",
    immFormerPresMarraigeDate: "",
    founderPresName: "",
    founderPresPhoto: null,
    founderPresaddress: "",
    founderPresPinCode: "",
    founderPresOffLandLine: "",
    founderPresResLandLine: "",
    founderPresMobileNumber: "",
    founderPresWhatsappNumber: "",
    founderPresEmail: "",
    founderPresOccupation: "",
    founderPresSpouseName: "",
    founderPresBirthDay: "",
    founderPresSpouseBirthDay: "",
    founderPresMarraigeDate: "",
    nominatedFormerPres1Name: "",
    nominatedFormerPres1Photo: null,
    nominatedFormerPres1address: "",
    nominatedFormerPres1PinCode: "",
    nominatedFormerPres1OffLandLine: "",
    nominatedFormerPres1ResLandLine: "",
    nominatedFormerPres1MobileNumber: "",
    nominatedFormerPres1WhatsappNumber: "",
    nominatedFormerPres1Email: "",
    nominatedFormerPres1Occupation: "",
    nominatedFormerPres1SpouseName: "",
    nominatedFormerPres1BirthDay: "",
    nominatedFormerPres1SpouseBirthDay: "",
    nominatedFormerPres1MarraigeDate: "",
    nominatedFormerPres2Name: "",
    nominatedFormerPres2Photo: null,
    nominatedFormerPres2address: "",
    nominatedFormerPres2PinCode: "",
    nominatedFormerPres2OffLandLine: "",
    nominatedFormerPres2ResLandLine: "",
    nominatedFormerPres2MobileNumber: "",
    nominatedFormerPres2WhatsappNumber: "",
    nominatedFormerPres2Email: "",
    nominatedFormerPres2Occupation: "",
    nominatedFormerPres2SpouseName: "",
    nominatedFormerPres2BirthDay: "",
    nominatedFormerPres2SpouseBirthDay: "",
    nominatedFormerPres2MarraigeDate: "",
    nominatedFormerPres3Name: "",
    nominatedFormerPres3Photo: null,
    nominatedFormerPres3address: "",
    nominatedFormerPres3PinCode: "",
    nominatedFormerPres3OffLandLine: "",
    nominatedFormerPres3ResLandLine: "",
    nominatedFormerPres3MobileNumber: "",
    nominatedFormerPres3WhatsappNumber: "",
    nominatedFormerPres3Email: "",
    nominatedFormerPres3Occupation: "",
    nominatedFormerPres3SpouseName: "",
    nominatedFormerPres3BirthDay: "",
    nominatedFormerPres3SpouseBirthDay: "",
    nominatedFormerPres3MarraigeDate: "",
    vPresName: "",
    vPresPhoto: null,
    vPresaddress: "",
    vPresPinCode: "",
    vPresOffLandLine: "",
    vPresResLandLine: "",
    vPresMobileNumber: "",
    vPresWhatsappNumber: "",
    vPresEmail: "",
    vPresOccupation: "",
    vPresSpouseName: "",
    vPresBirthDay: "",
    vPresSpouseBirthDay: "",
    vPresMarraigeDate: "",
    secName: "",
    secPhoto: null,
    secaddress: "",
    secPinCode: "",
    secOffLandLine: "",
    secResLandLine: "",
    secMobileNumber: "",
    secWhatsappNumber: "",
    secEmail: "",
    secOccupation: "",
    secSpouseName: "",
    secBirthDay: "",
    secSpouseBirthDay: "",
    secMarraigeDate: "",
    jtSecName: "",
    jtSecPhoto: null,
    jtSecaddress: "",
    jtSecPinCode: "",
    jtSecOffLandLine: "",
    jtSecResLandLine: "",
    jtSecMobileNumber: "",
    jtSecWhatsappNumber: "",
    jtSecEmail: "",
    jtSecOccupation: "",
    jtSecSpouseName: "",
    jtSecBirthDay: "",
    jtSecSpouseBirthDay: "",
    jtSecMarraigeDate: "",
    treasurerName: "",
    treasurerPhoto: null,
    treasureraddress: "",
    treasurerPinCode: "",
    treasurerOffLandLine: "",
    treasurerResLandLine: "",
    treasurerMobileNumber: "",
    treasurerWhatsappNumber: "",
    treasurerEmail: "",
    treasurerOccupation: "",
    treasurerSpouseName: "",
    treasurerBirthDay: "",
    treasurerSpouseBirthDay: "",
    treasurerMarraigeDate: "",
    com1Name: "",
    com1PinCode: "",
    com1address: "",
    com1OffLandLine: "",
    com1ResLandLine: "",
    com1MobileNumber: "",
    com1Email: "",
    com2Name: "",
    com2PinCode: "",
    com2address: "",
    com2OffLandLine: "",
    com2ResLandLine: "",
    com2MobileNumber: "",
    com2Email: "",
    com3Name: "",
    com3PinCode: "",
    com3address: "",
    com3OffLandLine: "",
    com3ResLandLine: "",
    com3MobileNumber: "",
    com3Email: "",
    com4Name: "",
    com4PinCode: "",
    com4address: "",
    com4OffLandLine: "",
    com4ResLandLine: "",
    com4MobileNumber: "",
    com4Email: "",
    com5Name: "",
    com5PinCode: "",
    com5address: "",
    com5OffLandLine: "",
    com5ResLandLine: "",
    com5MobileNumber: "",
    com5Email: "",
    com6Name: "",
    com6PinCode: "",
    com6address: "",
    com6OffLandLine: "",
    com6ResLandLine: "",
    com6MobileNumber: "",
    com6Email: "",
    com7Name: "",
    com7PinCode: "",
    com7address: "",
    com7OffLandLine: "",
    com7ResLandLine: "",
    com7MobileNumber: "",
    com7Email: "",
    com8Name: "",
    com8PinCode: "",
    com8address: "",
    com8OffLandLine: "",
    com8ResLandLine: "",
    com8MobileNumber: "",
    com8Email: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
    window.scrollTo(0, 0);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
    window.scrollTo(0, 0);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div>
          <Container>
            <Row>
              <Col className="custom-margin">
                <Bpage1
                  nextStep={nextStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div>
          <Container>
            <Row>
              <Col className="custom-margin">
                <Bpage2
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 3:
      return (
        <div>
          <Container>
            <Row>
              <Col className="custom-margin">
                <Bpage3
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 4 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 4:
      return (
        <div>
          <Container>
            <Row>
              <Col className="custom-margin">
                <Bpage4
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // Only formData is passed as prop to show the final value at form submit
    case 5:
      return (
        <div>
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Confirm values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // default case to show nothing
    default:
      return <div></div>;
  }
}

export default FormBApp;
