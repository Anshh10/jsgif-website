import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Images from "../../images/index";
import moment from "moment";

import "../Response.css";
import SecurePageSection from "../../SecurePageSection";

function GroupFormAResponse() {
  const [response, setResponses] = useState([]);
  const responseId = useParams();

  const getResponse = async () => {
    const res = await axios.get(`/api/forms/group/grp-form-a/${responseId.id}`);
    setResponses(res.data);
    console.log(res.data);
  };

  const printDocument = () => {
    var divContents = document.getElementById("mainForm").innerHTML;
    var a = window.open("Invoice", "Invoice", "height=1125, width=800");
    a.document.write("<html>");
    a.document.write("<link>");
    a.document
      .write(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"
    />`);
    a.document.write("</link>");

    a.document.write(`
    <title>Invoices Windzard Technologies</title>
    `);
    a.document.write("<style>");
    a.document.write(`@media print {
      @page {
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: 1em;
        margin-right: 1em;
      }
    }
    .fResponseBody {
      margin-bottom: 100px;
      padding: 20px 20px;
      width: 773px;
      min-height: 1123px;
      background: #fff;
    }

    .page{
      page-break-after: always;
    }

    .centerFormat {
      width: 800px;
      margin: 0 auto;
    }
    
    
    .section2, .section3{
      margin-top: 30px;
    }
    
    .section4{
      margin-top: 20px;
    }
    
    .bordered-col{
      padding: 3px 10px;
      border: 1px solid #000;
    }
    
    .bordered-mid-col{
      padding: 3px 10px;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
    }
    
    .bordered-row{
      padding: 3px 0;
      border: 1px solid #000;
    }
    
    .bordered-mid-row{
      padding: 3px 0px;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
    }
    
    
    
    .blueBG {
      background: rgb(185, 213, 250);
      border-radius: 8px;
      height: 20px;
      margin-bottom: 5px;
    }
    
    
    .bannerText {
      margin-top: 20px;
    }
    
    .bannerText h1 {
      font-family: "Arial-Bold";
      font-size: 24px;
      font-weight: 600;
    }
    
    .bannerText h2 {
      font-family: "Arial-Bold";
      font-size: 20px;
      font-weight: 400;
    }
    
    .toptext {
      margin: 20px 0;
    }
    
    .logoImage {
      height: 80px;
      margin: 10px;
    }
    
    .bannerYellow {
      background: #ffcc29;
      border-top: 12px solid #3e4095;
      margin-bottom: 30px;
      -webkit-print-color-adjust: exact;
    }
    
    .Tbox {
      border: 1px solid rgb(0, 0, 0);
      padding: 11px 15px;
      margin: 20px 0;
    }
    
    .Tsingle-enter {
      font-family: "Arial";
      font-size: 12px;
      margin-bottom: 0;
    }
    
    .Tdouble-enter {
      font-family: "Arial";
      margin-top: 11px;
      font-size: 12px;
      margin-bottom: 0;
    }
    
    .Tsign-enter {
      font-family: "Arial";
      margin-top: 30px;
      font-size: 12px;
      margin-bottom: 0;
    }
    
    .Hdouble-enter {
      font-family: "Arial";
      margin: 16px auto;
      font-size: 16px;
      color: #000;
      font-weight: 600;
    }
    
    .H3double-enter {
      font-family: "Arial";
      margin: 0;
      margin-top: 14px;
      font-size: 14px;
      color: #000;
      font-weight: 600;
    }
    
    .Lsingle-enter li {
      font-family: "Arial";
      font-size: 12px;
      margin-bottom: 0;
    }
    
    .Ldouble-enter li {
      font-family: "Arial";
      font-size: 12px;
      margin-bottom: 0;
      margin-top: 12px
    }
    
    .response {
      font-family: "Arial";
      font-size: 12px;
      font-weight: 600;
      text-decoration: underline;
    }
    
    .Tsingle {
      font-family: "Arial";
      font-size: 16px;
      text-decoration: none;
      font-weight: 400;
      color: rgb(0, 0, 0);
      margin-bottom: 8px;
    }
    
    .Tdouble {
      font-family: "Arial";
      font-size: 16px;
      text-decoration: none;
      font-weight: 400;
      color: rgb(0, 0, 0);
      margin-bottom: 24px;
    }`);
    a.document.write("</style>");
    a.document.write("<body>");
    a.document.write(divContents);
    a.document.write("</body></html>");
    a.document.close();
    setTimeout(function() {
      a.print();
    }, 1000);
  };

  useEffect(() => {
    getResponse();
  }, []);

  const navigate = useNavigate();
  const editForm = () => {
    navigate(`form/grp-form-a/${response.id}/edit/`);
  };

  return (
    <div>
      <Row style={{ marginBottom: "1em", marginTop: "1em" }}>
        <Col className="d-flex justify-content-end">
          <Button onClick={printDocument} variant="primary">
            Download Form
          </Button>
        </Col>
        <Col className="d-flex justify-content-start">
          <Button onClick={editForm} variant="primary">
            Edit Form
          </Button>
        </Col>
      </Row>
      <div className="centerFormat">
        <div id="mainForm" className="fResponseBody">
          <div className="page">
            <div>
              <Row className="T-Banner">
                <Col xs={4}>
                  <h3 className="Hdouble-enter">Federation Copy</h3>
                </Col>
                <Col xs={4} style={{ textAlign: "center" }}>
                  <img
                    src={Images.Logo}
                    className="logoImage"
                    alt="jsgBanner"
                  ></img>
                </Col>
                <Col xs={4}>
                  <h3 className="Hdouble-enter">Recieved Date_____________</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={11} className="bannerText text-center">
                  <h1 style={{ color: " #000" }}>
                    JAIN SOCIAL GROUP INT. FEDERATION
                  </h1>
                  <p className="Tsingle-enter" style={{ color: " #000" }}>
                    4-O/P, Vijay CHambers, Opp. Dreamland Cinema, Tribhuvan
                    Road, Mumbai - 400 004{" "}
                  </p>
                  <p className="Tsingle-enter" style={{ color: " #000" }}>
                    Tel: 022-23870724 / 23891884 Mobile: 9820402349 / 8169274400
                    E-Mail: office@jsgif.co.in www.jsgif.co.in{" "}
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  color: " #fff",
                  backgroundColor: "rgb(15, 15, 15)",
                  textAlign: "center",
                }}
              >
                <h3>FORM "A"</h3>
              </Row>
              <Row
                style={{
                  textAlign: "center",
                }}
              >
                <p
                  className="Tsingle-enter"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  ADVANCE CONTRIBUTION PAYABLE TO FEDERATION
                </p>
                <p
                  className="Tsingle-enter"
                  style={{ fontSize: "12px", fontWeight: "600" }}
                >
                  (To be filled by all groups even if contribution paid in full)
                </p>
              </Row>
            </div>
            <Row
              style={{
                border: "1px solid #000",
                padding: "20px",
                margin: "0 5px",
              }}
            >
              <Row>
                <Col className="bordered-col" xs={8}>
                  <p className="Tsingle-enter">
                    Name of the Group: JSG{" "}
                    <span className="response">{response.grpName}</span>
                  </p>
                </Col>
                <Col xs={1}></Col>
                <Col className="bordered-col" xs={3}>
                  <p className="Tsingle-enter ">
                    Group No.:{" "}
                    <span className="response ">{response.grpNumber}</span>
                  </p>
                </Col>
              </Row>
              <Row style={{ marginTop: "30px" }}>
                <Col xs={8}>
                  <Row>
                    <p className="Tsingle-enter">Group Address:</p>
                  </Row>
                  <Row className="bordered-row">
                    <p className="Tsingle-enter">
                      <span className="response">{response.grpAddress}</span>
                    </p>
                  </Row>
                </Col>
                <Col xs={1}></Col>
                <Col xs={3}>
                  <p className="Tsingle-enter">Mobile No.</p>
                  <Row className="bordered-row">
                    <Col>
                      <p
                        style={{ textAlign: "left" }}
                        className="Tsingle-enter"
                      >
                        President:
                      </p>
                    </Col>
                    <Col>
                      <p
                        style={{ textAlign: "right" }}
                        className="Tsingle-enter"
                      >
                        <span className="response">
                          {response.grpPresidentNum}
                        </span>
                      </p>
                    </Col>
                  </Row>
                  <Row className="bordered-mid-row">
                    <Col>
                      <p
                        style={{ textAlign: "left" }}
                        className="Tsingle-enter"
                      >
                        Secretary:
                      </p>
                    </Col>
                    <Col>
                      <p
                        style={{ textAlign: "right" }}
                        className="Tsingle-enter"
                      >
                        <span className="response">
                          {response.grpSecretaryNum}
                        </span>
                      </p>
                    </Col>
                  </Row>
                  <Row className="bordered-row">
                    <Col>
                      <p
                        style={{ textAlign: "left" }}
                        className="Tsingle-enter"
                      >
                        Treasurer:
                      </p>
                    </Col>
                    <Col>
                      <p
                        style={{ textAlign: "right" }}
                        className="Tsingle-enter"
                      >
                        <span className="response">
                          {response.grpTreasurerNum}
                        </span>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="section2">
                <Row>
                  <p className="Tsingle-enter">
                    Contribution payable (Advance) for 2022-23
                  </p>
                </Row>
                <Row>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter">
                      For{" "}
                      <span className="response">{response.CoupleMembers}</span>{" "}
                      Couple Members
                    </p>
                    <p className="Tsingle-enter">
                      For{" "}
                      <span className="response">{response.SingleMembers}</span>{" "}
                      Single Members
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. 5000
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-mid-col" xs={8}>
                    <p className="Tsingle-enter">Previous Dues (if any)</p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-mid-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. {response.oldDuepayable}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Gross Total
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs.{" "}
                      <span className="response">
                        {" "}
                        {5000 + +response.oldDuepayable}{" "}
                      </span>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-mid-col" xs={8}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      GST @ 18% on Total
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-mid-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. 900
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Grand Total
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. {response.totalAmtPayable}
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="section3">
                <Row>
                  <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                    Payments
                  </p>
                </Row>
                <Row>
                  <Col xs={8}>
                    <Row className="bordered-row">
                      <p className="Tsingle-enter">
                        Less Paid/ Credit with JSGIF
                      </p>
                    </Row>
                    <Row className="bordered-row" style={{ borderTop: "0" }}>
                      <p className="Tsingle-enter">Vide Reciept Number</p>
                    </Row>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs.{" "}
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter">Net Payable</p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs.{" "}
                      <span className="response">
                        {response.totalAmtPayable}
                      </span>
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="section4">
                <Row>
                  <Col
                    style={{
                      border: "1px solid #000",
                      padding: "3px 10px",
                    }}
                    xs={6}
                  >
                    <p className="Tsingle-enter">
                      Draft / Cheque No.{" "}
                      <span className="response">
                        {response.draft_chequeNum}
                      </span>
                    </p>
                  </Col>
                  <Col
                    style={{
                      borderTop: "1px solid #000",
                      borderBottom: "1px solid #000",
                      padding: "3px 10px",
                    }}
                    xs={3}
                  >
                    <p className="Tsingle-enter">
                      Date{" "}
                      <span className="response">{response.chequedate}</span>
                    </p>
                  </Col>
                  <Col
                    style={{
                      border: "1px solid #000",
                      padding: "3px 10px",
                    }}
                    xs={3}
                  >
                    <p className="Tsingle-enter">
                      For Rs.{" "}
                      <span className="response">
                        {response.totalAmtPayable}
                      </span>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      border: "1px solid #000",
                      borderTop: "0px",
                      borderRight: "0px",
                      padding: "3px 10px",
                    }}
                    xs={8}
                  >
                    <p className="Tsingle-enter">
                      Drawn On{" "}
                      <span className="response">{response.drawnOn}</span>
                    </p>
                  </Col>
                  <Col
                    style={{
                      border: "1px solid #000",
                      borderTop: "0px",
                      borderLeft: "0px",
                      padding: "3px 10px",
                    }}
                    xs={4}
                  >
                    <p className="Tsingle-enter">
                      Branch{" "}
                      <span className="response">{response.branchName}</span>
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "40px" }}>
                  <Col xs={5}></Col>
                  <Col xs={3}>
                    <p
                      className="Tsingle-enter"
                      style={{ textAlign: "right", margin: "0", padding: "0" }}
                    >
                      Jain Social Group{" "}
                    </p>
                    <p
                      className="Tsingle-enter"
                      style={{ textAlign: "right", margin: "0", padding: "0" }}
                    >
                      (with rubber stamp)
                    </p>
                  </Col>
                  <Col xs={4}>
                    <p
                      className="Tsingle-enter"
                      style={{ borderTop: "1px solid black" }}
                    >
                      President / Treasurer / Secretary
                    </p>
                  </Col>
                </Row>
              </div>
              <Row>
                <ol className="Lsingle-enter">
                  <li>
                    Please attach one set of Mailing List, E-mail ID & Whatsapp
                    No. of Members along with this Form "A"
                  </li>
                  <li>
                    Please send Blue Copy to Federation - Pink Copy to Region
                    (Chairman Elect) - Yellow copy to Zone & White copy for
                    Group.
                  </li>
                  <li>
                    Last date to send Provisional(Advance) Contribution along
                    with this form to Federation Office is 20th January 2024 and
                    Final Contribution by 30th September 2023
                  </li>
                </ol>
              </Row>
              <Row>
                <p className="Tsingle-enter">For Office use Only</p>
              </Row>
              <Row>
                <Col xs={2}>
                  <p className="Tsingle-enter">Reciept No.</p>
                </Col>
                <Col xs={2} style={{ borderBottom: "1px solid black" }}></Col>
                <Col xs={1}>
                  <p className="Tsingle-enter">Date</p>
                </Col>
                <Col xs={2} style={{ borderBottom: "1px solid black" }}></Col>
                <Col xs={5}>
                  <p className="Tsingle-enter">
                    Rs. ______________ Entered in Register
                  </p>
                </Col>
              </Row>
            </Row>
          </div>
          <div className="page">
            <div>
              <Row className="T-Banner">
                <Col xs={4}>
                  <h3 className="Hdouble-enter">Regional Copy</h3>
                </Col>
                <Col xs={4} style={{ textAlign: "center" }}>
                  <img
                    src={Images.Logo}
                    className="logoImage"
                    alt="jsgBanner"
                  ></img>
                </Col>
                <Col xs={4}>
                  <h3 className="Hdouble-enter">Recieved Date_____________</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={11} className="bannerText text-center">
                  <h1 style={{ color: " #000" }}>
                    JAIN SOCIAL GROUP INT. FEDERATION
                  </h1>
                  <p className="Tsingle-enter" style={{ color: " #000" }}>
                    4-O/P, Vijay CHambers, Opp. Dreamland Cinema, Tribhuvan
                    Road, Mumbai - 400 004{" "}
                  </p>
                  <p className="Tsingle-enter" style={{ color: " #000" }}>
                    Tel: 022-23870724 / 23891884 Mobile: 9820402349 / 8169274400
                    E-Mail: office@jsgif.co.in www.jsgif.co.in{" "}
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  color: " #fff",
                  backgroundColor: "rgb(15,15,15)",
                  textAlign: "center",
                }}
              >
                <h3>FORM "A"</h3>
              </Row>
              <Row
                style={{
                  textAlign: "center",
                }}
              >
                <p
                  className="Tsingle-enter"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  ADVANCE CONTRIBUTION PAYABLE TO FEDERATION
                </p>
                <p
                  className="Tsingle-enter"
                  style={{ fontSize: "12px", fontWeight: "600" }}
                >
                  (To be filled by all groups even if contribution paid in full)
                </p>
              </Row>
            </div>
            <Row
              style={{
                border: "1px solid #000",
                padding: "20px",
                margin: "0 5px",
              }}
            >
              <Row>
                <Col className="bordered-col" xs={8}>
                  <p className="Tsingle-enter">
                    Name of the Group: JSG{" "}
                    <span className="response">{response.grpName}</span>
                  </p>
                </Col>
                <Col xs={1}></Col>
                <Col className="bordered-col" xs={3}>
                  <p className="Tsingle-enter ">
                    Group No.:{" "}
                    <span className="response ">{response.grpNumber}</span>
                  </p>
                </Col>
              </Row>
              <Row style={{ marginTop: "30px" }}>
                <Col xs={8}>
                  <Row>
                    <p className="Tsingle-enter">Group Address:</p>
                  </Row>
                  <Row className="bordered-row">
                    <p className="Tsingle-enter">
                      <span className="response">{response.grpAddress}</span>
                    </p>
                  </Row>
                </Col>
                <Col xs={1}></Col>
                <Col xs={3}>
                  <p className="Tsingle-enter">Mobile No.</p>
                  <Row className="bordered-row">
                    <Col>
                      <p
                        style={{ textAlign: "left" }}
                        className="Tsingle-enter"
                      >
                        President:
                      </p>
                    </Col>
                    <Col>
                      <p
                        style={{ textAlign: "right" }}
                        className="Tsingle-enter"
                      >
                        <span className="response">
                          {response.grpPresidentNum}
                        </span>
                      </p>
                    </Col>
                  </Row>
                  <Row className="bordered-mid-row">
                    <Col>
                      <p
                        style={{ textAlign: "left" }}
                        className="Tsingle-enter"
                      >
                        Secretary:
                      </p>
                    </Col>
                    <Col>
                      <p
                        style={{ textAlign: "right" }}
                        className="Tsingle-enter"
                      >
                        <span className="response">
                          {response.grpSecretaryNum}
                        </span>
                      </p>
                    </Col>
                  </Row>
                  <Row className="bordered-row">
                    <Col>
                      <p
                        style={{ textAlign: "left" }}
                        className="Tsingle-enter"
                      >
                        Treasurer:
                      </p>
                    </Col>
                    <Col>
                      <p
                        style={{ textAlign: "right" }}
                        className="Tsingle-enter"
                      >
                        <span className="response">
                          {response.grpTreasurerNum}
                        </span>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="section2">
                <Row>
                  <p className="Tsingle-enter">
                    Contribution payable (Advance) for 2022-23
                  </p>
                </Row>
                <Row>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter">
                      For{" "}
                      <span className="response">{response.CoupleMembers}</span>{" "}
                      Couple Members
                    </p>
                    <p className="Tsingle-enter">
                      For{" "}
                      <span className="response">{response.SingleMembers}</span>{" "}
                      Single Members
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. 5000
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-mid-col" xs={8}>
                    <p className="Tsingle-enter">Previous Dues (if any)</p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-mid-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. {response.oldDuepayable}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Gross Total
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs.{" "}
                      <span className="response">
                        {" "}
                        {5000 + +response.oldDuepayable}{" "}
                      </span>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-mid-col" xs={8}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      GST @ 18% on Total
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-mid-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. 900
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Grand Total
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. {response.totalAmtPayable}
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="section3">
                <Row>
                  <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                    Payments
                  </p>
                </Row>
                <Row>
                  <Col xs={8}>
                    <Row className="bordered-row">
                      <p className="Tsingle-enter">
                        Less Paid/ Credit with JSGIF
                      </p>
                    </Row>
                    <Row className="bordered-row" style={{ borderTop: "0" }}>
                      <p className="Tsingle-enter">Vide Reciept Number</p>
                    </Row>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs.{" "}
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter">Net Payable</p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs.{" "}
                      <span className="response">
                        {response.totalAmtPayable}
                      </span>
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="section4">
                <Row>
                  <Col
                    style={{
                      border: "1px solid #000",
                      padding: "3px 10px",
                    }}
                    xs={6}
                  >
                    <p className="Tsingle-enter">
                      Draft / Cheque No.{" "}
                      <span className="response">
                        {response.draft_chequeNum}
                      </span>
                    </p>
                  </Col>
                  <Col
                    style={{
                      borderTop: "1px solid #000",
                      borderBottom: "1px solid #000",
                      padding: "3px 10px",
                    }}
                    xs={3}
                  >
                    <p className="Tsingle-enter">
                      Date{" "}
                      <span className="response">{response.chequedate}</span>
                    </p>
                  </Col>
                  <Col
                    style={{
                      border: "1px solid #000",
                      padding: "3px 10px",
                    }}
                    xs={3}
                  >
                    <p className="Tsingle-enter">
                      For Rs.{" "}
                      <span className="response">
                        {response.totalAmtPayable}
                      </span>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      border: "1px solid #000",
                      borderTop: "0px",
                      borderRight: "0px",
                      padding: "3px 10px",
                    }}
                    xs={8}
                  >
                    <p className="Tsingle-enter">
                      Drawn On{" "}
                      <span className="response">{response.drawnOn}</span>
                    </p>
                  </Col>
                  <Col
                    style={{
                      border: "1px solid #000",
                      borderTop: "0px",
                      borderLeft: "0px",
                      padding: "3px 10px",
                    }}
                    xs={4}
                  >
                    <p className="Tsingle-enter">
                      Branch{" "}
                      <span className="response">{response.branchName}</span>
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "40px" }}>
                  <Col xs={5}></Col>
                  <Col xs={3}>
                    <p
                      className="Tsingle-enter"
                      style={{ textAlign: "right", margin: "0", padding: "0" }}
                    >
                      Jain Social Group{" "}
                    </p>
                    <p
                      className="Tsingle-enter"
                      style={{ textAlign: "right", margin: "0", padding: "0" }}
                    >
                      (with rubber stamp)
                    </p>
                  </Col>
                  <Col xs={4}>
                    <p
                      className="Tsingle-enter"
                      style={{ borderTop: "1px solid black" }}
                    >
                      President / Treasurer / Secretary
                    </p>
                  </Col>
                </Row>
              </div>
              <Row>
                <ol className="Lsingle-enter">
                  <li>
                    Please attach one set of Mailing List, E-mail ID & Whatsapp
                    No. of Members along with this Form "A"
                  </li>
                  <li>
                    Please send Blue Copy to Federation - Pink Copy to Region
                    (Chairman Elect) - Yellow copy to Zone & White copy for
                    Group.
                  </li>
                  <li>
                    Last date to send Provisional(Advance) Contribution along
                    with this form to Federation Office is 20th January 2024 and
                    Final Contribution by 30th September 2023
                  </li>
                </ol>
              </Row>
              <Row>
                <p className="Tsingle-enter">For Office use Only</p>
              </Row>
              <Row>
                <Col xs={2}>
                  <p className="Tsingle-enter">Reciept No.</p>
                </Col>
                <Col xs={2} style={{ borderBottom: "1px solid black" }}></Col>
                <Col xs={1}>
                  <p className="Tsingle-enter">Date</p>
                </Col>
                <Col xs={2} style={{ borderBottom: "1px solid black" }}></Col>
                <Col xs={5}>
                  <p className="Tsingle-enter">
                    Rs. ______________ Entered in Register
                  </p>
                </Col>
              </Row>
            </Row>
          </div>
          <div className="page">
            <div>
              <Row className="T-Banner">
                <Col xs={4}>
                  <h3 className="Hdouble-enter">Zonal Copy</h3>
                </Col>
                <Col xs={4} style={{ textAlign: "center" }}>
                  <img
                    src={Images.Logo}
                    className="logoImage"
                    alt="jsgBanner"
                  ></img>
                </Col>
                <Col xs={4}>
                  <h3 className="Hdouble-enter">Recieved Date_____________</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={11} className="bannerText text-center">
                  <h1 style={{ color: " #000" }}>
                    JAIN SOCIAL GROUP INT. FEDERATION
                  </h1>
                  <p className="Tsingle-enter" style={{ color: " #000" }}>
                    4-O/P, Vijay CHambers, Opp. Dreamland Cinema, Tribhuvan
                    Road, Mumbai - 400 004{" "}
                  </p>
                  <p className="Tsingle-enter" style={{ color: " #000" }}>
                    Tel: 022-23870724 / 23891884 Mobile: 9820402349 / 8169274400
                    E-Mail: office@jsgif.co.in www.jsgif.co.in{" "}
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  color: " #fff",
                  backgroundColor: "rgb(15,15,15)",
                  textAlign: "center",
                }}
              >
                <h3>FORM "A"</h3>
              </Row>
              <Row
                style={{
                  textAlign: "center",
                }}
              >
                <p
                  className="Tsingle-enter"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  ADVANCE CONTRIBUTION PAYABLE TO FEDERATION
                </p>
                <p
                  className="Tsingle-enter"
                  style={{ fontSize: "12px", fontWeight: "600" }}
                >
                  (To be filled by all groups even if contribution paid in full)
                </p>
              </Row>
            </div>
            <Row
              style={{
                border: "1px solid #000",
                padding: "20px",
                margin: "0 5px",
              }}
            >
              <Row>
                <Col className="bordered-col" xs={8}>
                  <p className="Tsingle-enter">
                    Name of the Group: JSG{" "}
                    <span className="response">{response.grpName}</span>
                  </p>
                </Col>
                <Col xs={1}></Col>
                <Col className="bordered-col" xs={3}>
                  <p className="Tsingle-enter ">
                    Group No.:{" "}
                    <span className="response ">{response.grpNumber}</span>
                  </p>
                </Col>
              </Row>
              <Row style={{ marginTop: "30px" }}>
                <Col xs={8}>
                  <Row>
                    <p className="Tsingle-enter">Group Address:</p>
                  </Row>
                  <Row className="bordered-row">
                    <p className="Tsingle-enter">
                      <span className="response">{response.grpAddress}</span>
                    </p>
                  </Row>
                </Col>
                <Col xs={1}></Col>
                <Col xs={3}>
                  <p className="Tsingle-enter">Mobile No.</p>
                  <Row className="bordered-row">
                    <Col>
                      <p
                        style={{ textAlign: "left" }}
                        className="Tsingle-enter"
                      >
                        President:
                      </p>
                    </Col>
                    <Col>
                      <p
                        style={{ textAlign: "right" }}
                        className="Tsingle-enter"
                      >
                        <span className="response">
                          {response.grpPresidentNum}
                        </span>
                      </p>
                    </Col>
                  </Row>
                  <Row className="bordered-mid-row">
                    <Col>
                      <p
                        style={{ textAlign: "left" }}
                        className="Tsingle-enter"
                      >
                        Secretary:
                      </p>
                    </Col>
                    <Col>
                      <p
                        style={{ textAlign: "right" }}
                        className="Tsingle-enter"
                      >
                        <span className="response">
                          {response.grpSecretaryNum}
                        </span>
                      </p>
                    </Col>
                  </Row>
                  <Row className="bordered-row">
                    <Col>
                      <p
                        style={{ textAlign: "left" }}
                        className="Tsingle-enter"
                      >
                        Treasurer:
                      </p>
                    </Col>
                    <Col>
                      <p
                        style={{ textAlign: "right" }}
                        className="Tsingle-enter"
                      >
                        <span className="response">
                          {response.grpTreasurerNum}
                        </span>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="section2">
                <Row>
                  <p className="Tsingle-enter">
                    Contribution payable (Advance) for 2022-23
                  </p>
                </Row>
                <Row>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter">
                      For{" "}
                      <span className="response">{response.CoupleMembers}</span>{" "}
                      Couple Members
                    </p>
                    <p className="Tsingle-enter">
                      For{" "}
                      <span className="response">{response.SingleMembers}</span>{" "}
                      Single Members
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. 5000
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-mid-col" xs={8}>
                    <p className="Tsingle-enter">Previous Dues (if any)</p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-mid-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. {response.oldDuepayable}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Gross Total
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs.{" "}
                      <span className="response">
                        {" "}
                        {5000 + +response.oldDuepayable}{" "}
                      </span>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-mid-col" xs={8}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      GST @ 18% on Total
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-mid-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. 900
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Grand Total
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. {response.totalAmtPayable}
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="section3">
                <Row>
                  <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                    Payments
                  </p>
                </Row>
                <Row>
                  <Col xs={8}>
                    <Row className="bordered-row">
                      <p className="Tsingle-enter">
                        Less Paid/ Credit with JSGIF
                      </p>
                    </Row>
                    <Row className="bordered-row" style={{ borderTop: "0" }}>
                      <p className="Tsingle-enter">Vide Reciept Number</p>
                    </Row>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs.{" "}
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter">Net Payable</p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs.{" "}
                      <span className="response">
                        {response.totalAmtPayable}
                      </span>
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="section4">
                <Row>
                  <Col
                    style={{
                      border: "1px solid #000",
                      padding: "3px 10px",
                    }}
                    xs={6}
                  >
                    <p className="Tsingle-enter">
                      Draft / Cheque No.{" "}
                      <span className="response">
                        {response.draft_chequeNum}
                      </span>
                    </p>
                  </Col>
                  <Col
                    style={{
                      borderTop: "1px solid #000",
                      borderBottom: "1px solid #000",
                      padding: "3px 10px",
                    }}
                    xs={3}
                  >
                    <p className="Tsingle-enter">
                      Date{" "}
                      <span className="response">{response.chequedate}</span>
                    </p>
                  </Col>
                  <Col
                    style={{
                      border: "1px solid #000",
                      padding: "3px 10px",
                    }}
                    xs={3}
                  >
                    <p className="Tsingle-enter">
                      For Rs.{" "}
                      <span className="response">
                        {response.totalAmtPayable}
                      </span>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      border: "1px solid #000",
                      borderTop: "0px",
                      borderRight: "0px",
                      padding: "3px 10px",
                    }}
                    xs={8}
                  >
                    <p className="Tsingle-enter">
                      Drawn On{" "}
                      <span className="response">{response.drawnOn}</span>
                    </p>
                  </Col>
                  <Col
                    style={{
                      border: "1px solid #000",
                      borderTop: "0px",
                      borderLeft: "0px",
                      padding: "3px 10px",
                    }}
                    xs={4}
                  >
                    <p className="Tsingle-enter">
                      Branch{" "}
                      <span className="response">{response.branchName}</span>
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "40px" }}>
                  <Col xs={5}></Col>
                  <Col xs={3}>
                    <p
                      className="Tsingle-enter"
                      style={{ textAlign: "right", margin: "0", padding: "0" }}
                    >
                      Jain Social Group{" "}
                    </p>
                    <p
                      className="Tsingle-enter"
                      style={{ textAlign: "right", margin: "0", padding: "0" }}
                    >
                      (with rubber stamp)
                    </p>
                  </Col>
                  <Col xs={4}>
                    <p
                      className="Tsingle-enter"
                      style={{ borderTop: "1px solid black" }}
                    >
                      President / Treasurer / Secretary
                    </p>
                  </Col>
                </Row>
              </div>
              <Row>
                <ol className="Lsingle-enter">
                  <li>
                    Please attach one set of Mailing List, E-mail ID & Whatsapp
                    No. of Members along with this Form "A"
                  </li>
                  <li>
                    Please send Blue Copy to Federation - Pink Copy to Region
                    (Chairman Elect) - Yellow copy to Zone & White copy for
                    Group.
                  </li>
                  <li>
                    Last date to send Provisional(Advance) Contribution along
                    with this form to Federation Office is 20th January 2024 and
                    Final Contribution by 30th September 2023
                  </li>
                </ol>
              </Row>
              <Row>
                <p className="Tsingle-enter">For Office use Only</p>
              </Row>
              <Row>
                <Col xs={2}>
                  <p className="Tsingle-enter">Reciept No.</p>
                </Col>
                <Col xs={2} style={{ borderBottom: "1px solid black" }}></Col>
                <Col xs={1}>
                  <p className="Tsingle-enter">Date</p>
                </Col>
                <Col xs={2} style={{ borderBottom: "1px solid black" }}></Col>
                <Col xs={5}>
                  <p className="Tsingle-enter">
                    Rs. ______________ Entered in Register
                  </p>
                </Col>
              </Row>
            </Row>
          </div>
          <div className="page">
            <div>
              <Row className="T-Banner">
                <Col xs={4}>
                  <h3 className="Hdouble-enter">Group Copy</h3>
                </Col>
                <Col xs={4} style={{ textAlign: "center" }}>
                  <img
                    src={Images.Logo}
                    className="logoImage"
                    alt="jsgBanner"
                  ></img>
                </Col>
                <Col xs={4}>
                  <h3 className="Hdouble-enter">Recieved Date_____________</h3>
                </Col>
              </Row>
              <Row>
                <Col xs={11} className="bannerText text-center">
                  <h1 style={{ color: " #000" }}>
                    JAIN SOCIAL GROUP INT. FEDERATION
                  </h1>
                  <p className="Tsingle-enter" style={{ color: " #000" }}>
                    4-O/P, Vijay CHambers, Opp. Dreamland Cinema, Tribhuvan
                    Road, Mumbai - 400 004{" "}
                  </p>
                  <p className="Tsingle-enter" style={{ color: " #000" }}>
                    Tel: 022-23870724 / 23891884 Mobile: 9820402349 / 8169274400
                    E-Mail: office@jsgif.co.in www.jsgif.co.in{" "}
                  </p>
                </Col>
              </Row>
              <Row
                style={{
                  color: " #fff",
                  backgroundColor: "rgb(15,15,15)",
                  textAlign: "center",
                }}
              >
                <h3>FORM "A"</h3>
              </Row>
              <Row
                style={{
                  textAlign: "center",
                }}
              >
                <p
                  className="Tsingle-enter"
                  style={{ fontSize: "14px", fontWeight: "600" }}
                >
                  ADVANCE CONTRIBUTION PAYABLE TO FEDERATION
                </p>
                <p
                  className="Tsingle-enter"
                  style={{ fontSize: "12px", fontWeight: "600" }}
                >
                  (To be filled by all groups even if contribution paid in full)
                </p>
              </Row>
            </div>
            <Row
              style={{
                border: "1px solid #000",
                padding: "20px",
                margin: "0 5px",
              }}
            >
              <Row>
                <Col className="bordered-col" xs={8}>
                  <p className="Tsingle-enter">
                    Name of the Group: JSG{" "}
                    <span className="response">{response.grpName}</span>
                  </p>
                </Col>
                <Col xs={1}></Col>
                <Col className="bordered-col" xs={3}>
                  <p className="Tsingle-enter ">
                    Group No.:{" "}
                    <span className="response ">{response.grpNumber}</span>
                  </p>
                </Col>
              </Row>
              <Row style={{ marginTop: "30px" }}>
                <Col xs={8}>
                  <Row>
                    <p className="Tsingle-enter">Group Address:</p>
                  </Row>
                  <Row className="bordered-row">
                    <p className="Tsingle-enter">
                      <span className="response">{response.grpAddress}</span>
                    </p>
                  </Row>
                </Col>
                <Col xs={1}></Col>
                <Col xs={3}>
                  <p className="Tsingle-enter">Mobile No.</p>
                  <Row className="bordered-row">
                    <Col>
                      <p
                        style={{ textAlign: "left" }}
                        className="Tsingle-enter"
                      >
                        President:
                      </p>
                    </Col>
                    <Col>
                      <p
                        style={{ textAlign: "right" }}
                        className="Tsingle-enter"
                      >
                        <span className="response">
                          {response.grpPresidentNum}
                        </span>
                      </p>
                    </Col>
                  </Row>
                  <Row className="bordered-mid-row">
                    <Col>
                      <p
                        style={{ textAlign: "left" }}
                        className="Tsingle-enter"
                      >
                        Secretary:
                      </p>
                    </Col>
                    <Col>
                      <p
                        style={{ textAlign: "right" }}
                        className="Tsingle-enter"
                      >
                        <span className="response">
                          {response.grpSecretaryNum}
                        </span>
                      </p>
                    </Col>
                  </Row>
                  <Row className="bordered-row">
                    <Col>
                      <p
                        style={{ textAlign: "left" }}
                        className="Tsingle-enter"
                      >
                        Treasurer:
                      </p>
                    </Col>
                    <Col>
                      <p
                        style={{ textAlign: "right" }}
                        className="Tsingle-enter"
                      >
                        <span className="response">
                          {response.grpTreasurerNum}
                        </span>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="section2">
                <Row>
                  <p className="Tsingle-enter">
                    Contribution payable (Advance) for 2022-23
                  </p>
                </Row>
                <Row>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter">
                      For{" "}
                      <span className="response">{response.CoupleMembers}</span>{" "}
                      Couple Members
                    </p>
                    <p className="Tsingle-enter">
                      For{" "}
                      <span className="response">{response.SingleMembers}</span>{" "}
                      Single Members
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. 5000
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-mid-col" xs={8}>
                    <p className="Tsingle-enter">Previous Dues (if any)</p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-mid-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. {response.oldDuepayable}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Gross Total
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs.{" "}
                      <span className="response">
                        {" "}
                        {5000 + +response.oldDuepayable}{" "}
                      </span>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-mid-col" xs={8}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      GST @ 18% on Total
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-mid-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. 900
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Grand Total
                    </p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs. {response.totalAmtPayable}
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="section3">
                <Row>
                  <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                    Payments
                  </p>
                </Row>
                <Row>
                  <Col xs={8}>
                    <Row className="bordered-row">
                      <p className="Tsingle-enter">
                        Less Paid/ Credit with JSGIF
                      </p>
                    </Row>
                    <Row className="bordered-row" style={{ borderTop: "0" }}>
                      <p className="Tsingle-enter">Vide Reciept Number</p>
                    </Row>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs.{" "}
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col className="bordered-col" xs={8}>
                    <p className="Tsingle-enter">Net Payable</p>
                  </Col>
                  <Col xs={1}></Col>
                  <Col className="bordered-col" xs={3}>
                    <p className="Tsingle-enter" style={{ fontWeight: "600" }}>
                      Rs.{" "}
                      <span className="response">
                        {response.totalAmtPayable}
                      </span>
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="section4">
                <Row>
                  <Col
                    style={{
                      border: "1px solid #000",
                      padding: "3px 10px",
                    }}
                    xs={6}
                  >
                    <p className="Tsingle-enter">
                      Draft / Cheque No.{" "}
                      <span className="response">
                        {response.draft_chequeNum}
                      </span>
                    </p>
                  </Col>
                  <Col
                    style={{
                      borderTop: "1px solid #000",
                      borderBottom: "1px solid #000",
                      padding: "3px 10px",
                    }}
                    xs={3}
                  >
                    <p className="Tsingle-enter">
                      Date{" "}
                      <span className="response">{response.chequedate}</span>
                    </p>
                  </Col>
                  <Col
                    style={{
                      border: "1px solid #000",
                      padding: "3px 10px",
                    }}
                    xs={3}
                  >
                    <p className="Tsingle-enter">
                      For Rs.{" "}
                      <span className="response">
                        {response.totalAmtPayable}
                      </span>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{
                      border: "1px solid #000",
                      borderTop: "0px",
                      borderRight: "0px",
                      padding: "3px 10px",
                    }}
                    xs={8}
                  >
                    <p className="Tsingle-enter">
                      Drawn On{" "}
                      <span className="response">{response.drawnOn}</span>
                    </p>
                  </Col>
                  <Col
                    style={{
                      border: "1px solid #000",
                      borderTop: "0px",
                      borderLeft: "0px",
                      padding: "3px 10px",
                    }}
                    xs={4}
                  >
                    <p className="Tsingle-enter">
                      Branch{" "}
                      <span className="response">{response.branchName}</span>
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "40px" }}>
                  <Col xs={5}></Col>
                  <Col xs={3}>
                    <p
                      className="Tsingle-enter"
                      style={{ textAlign: "right", margin: "0", padding: "0" }}
                    >
                      Jain Social Group{" "}
                    </p>
                    <p
                      className="Tsingle-enter"
                      style={{ textAlign: "right", margin: "0", padding: "0" }}
                    >
                      (with rubber stamp)
                    </p>
                  </Col>
                  <Col xs={4}>
                    <p
                      className="Tsingle-enter"
                      style={{ borderTop: "1px solid black" }}
                    >
                      President / Treasurer / Secretary
                    </p>
                  </Col>
                </Row>
              </div>
              <Row>
                <ol className="Lsingle-enter">
                  <li>
                    Please attach one set of Mailing List, E-mail ID & Whatsapp
                    No. of Members along with this Form "A"
                  </li>
                  <li>
                    Please send Blue Copy to Federation - Pink Copy to Region
                    (Chairman Elect) - Yellow copy to Zone & White copy for
                    Group.
                  </li>
                  <li>
                    Last date to send Provisional(Advance) Contribution along
                    with this form to Federation Office is 20th January 2024 and
                    Final Contribution by 30th September 2023
                  </li>
                </ol>
              </Row>
              <Row>
                <p className="Tsingle-enter">For Office use Only</p>
              </Row>
              <Row>
                <Col xs={2}>
                  <p className="Tsingle-enter">Reciept No.</p>
                </Col>
                <Col xs={2} style={{ borderBottom: "1px solid black" }}></Col>
                <Col xs={1}>
                  <p className="Tsingle-enter">Date</p>
                </Col>
                <Col xs={2} style={{ borderBottom: "1px solid black" }}></Col>
                <Col xs={5}>
                  <p className="Tsingle-enter">
                    Rs. ______________ Entered in Register
                  </p>
                </Col>
              </Row>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupFormAResponse;
