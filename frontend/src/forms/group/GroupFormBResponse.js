import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Images from "../../images/index";
import moment from "moment";

import "../Response.css";
import SecurePageSection from "../../SecurePageSection";

function GroupFormBResponse() {
  const [response, setResponses] = useState([]);
  const responseId = useParams();

  const getResponse = async () => {
    const res = await axios.get(`/api/forms/group/grp-form-a/${responseId.id}`);
    setResponses(res.data);
    console.log(res.data);
  };

  const printDocument = () => {
    var divContents = document.getElementById("mainForm").innerHTML;
    var a = window.open("", "blank", "height=1123,width=800,scrollbars=yes,");
    a.document.write("<html>");
    a.document.write("<link>");
    a.document
      .write(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"
    />`);
    a.document.write("</link>");

    a.document.write(`
    <title>Form B</title>
    `);
    a.document.write("<style>");
    a.document.write(`@media print {
      @page {
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 20px;
        margin-right: 20px;
      }
    }

    html {
      overflow-y: auto;
    }

    fResponseBody {
      padding: 20px 20px;
      margin: 0px 20px;
      width: 800px;
      height: 1123px;
      background: #fff;
      overflow-y: auto;
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
    
    .bordered-col-b{
      padding: 3px 5px;
      border: 1px solid #000;
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
    
    .Tsingle-enter-label {
      font-family: "Arial";
      font-size: 12px;
      margin-top: 3px;
      margin-bottom: 0;
      line-height: 97%;
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
    
    .H3single-enter {
      font-family: "Arial";
      margin: 0;
      font-size: 14px;
      color: #000;
      font-weight: 600;
    }
    
    .H4single-enter {
      font-family: "Arial";
      margin: 0;
      font-size: 12px;
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
    navigate(`form/grp-form-b/${response.id}/edit/`);
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
      <div id="mainForm" className="centerFormat">
        <div className="fResponseBody">
          <div
            className="page"
            style={{
              textAlign: "center",
              padding: "0 15px",
              pageBreakAfter: "always",
            }}
          >
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "2px 2px 2px 2px",
                padding: "10px",
              }}
            >
              <Col>
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
                    <h3 className="Hdouble-enter">
                      Recieved Date_____________
                    </h3>
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
                      Tel: 022-23870724 / 23891884 Mobile: 9820402349 /
                      8169274400 E-Mail: office@jsgif.co.in www.jsgif.co.in{" "}
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
                  <h3>FORM "B"</h3>
                </Row>
                <Row
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Col xs={2} style={{ padding: "0 2px", margin: "0" }}>
                    <Row>
                      <p className="Tsingle-enter">STD Code</p>
                    </Row>
                    <Row
                      className="bordered-row"
                      style={{ padding: "5px 0", margin: "0" }}
                    >
                      <p className="Tsingle-enter">044</p>
                    </Row>
                  </Col>
                  <Col xs={2} style={{ padding: "0 2px", margin: "0" }}>
                    <Row>
                      <p className="Tsingle-enter">Region</p>
                    </Row>
                    <Row
                      className="bordered-row"
                      style={{ padding: "5px 0", margin: "0" }}
                    >
                      <p className="Tsingle-enter">South</p>
                    </Row>
                  </Col>
                  <Col xs={2} style={{ padding: "0 2px", margin: "0" }}>
                    <Row>
                      <p className="Tsingle-enter">Date of Inaugration</p>
                    </Row>
                    <Row
                      className="bordered-row"
                      style={{ padding: "5px 0", margin: "0" }}
                    >
                      <p className="Tsingle-enter">Date</p>
                    </Row>
                  </Col>
                  <Col xs={2} style={{ padding: "0 2px", margin: "0" }}>
                    <Row>
                      <p className="Tsingle-enter">Date of Charter</p>
                    </Row>
                    <Row
                      className="bordered-row"
                      style={{ padding: "5px 0", margin: "0" }}
                    >
                      <p className="Tsingle-enter">Date</p>
                    </Row>
                  </Col>
                  <Col xs={4} style={{ padding: "0 2px", margin: "0" }}>
                    <Row>
                      <p className="Tsingle-enter">Name of Sponsoring Group</p>
                    </Row>
                    <Row
                      className="bordered-row"
                      style={{ padding: "5px 0", margin: "0" }}
                    >
                      <p className="Tsingle-enter">Date</p>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={8} style={{ padding: "0 2px", margin: "0" }}>
                    <Row style={{ textAlign: "center" }}>
                      <p className="Tsingle-enter">Name of the Group</p>
                    </Row>
                    <Row
                      className="bordered-row"
                      style={{ padding: "5px 0", margin: "0" }}
                    >
                      <h3 className="H3single-enter">
                        Jain Social Group Madras Main
                      </h3>
                    </Row>
                  </Col>
                  <Col xs={4} style={{ padding: "0 2px", margin: "0" }}>
                    <Row style={{ textAlign: "center" }}>
                      <p className="Tsingle-enter">Group Number</p>
                    </Row>
                    <Row
                      className="bordered-row"
                      style={{ padding: "5px 0", margin: "0" }}
                    >
                      <p className="Tsingle-enter">18</p>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Row>
                      <p className="Tsingle-enter">Correspondance Address</p>
                    </Row>
                    <Row
                      className="bordered-row"
                      style={{
                        borderColor: "#000",
                        borderStyle: "solid",
                        borderWidth: "1px 1px 0px 1px",
                        height: "60px",
                      }}
                    >
                      <p className="Tsingle-enter">Address</p>
                    </Row>
                    <Row style={{ height: "30px" }}>
                      <Col
                        className="bordered-col-b"
                        style={{
                          padding: "0 2px",
                          borderColor: "#000",
                          borderStyle: "solid",
                          borderWidth: "0px 1px 1px 1px",
                        }}
                      >
                        <p className="Tsingle-enter">PinCode : 600112</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "10px",
              }}
            >
              <Col>
                <Row>
                  <h3 className="H3single-enter">
                    Details of General Council Members and Managing Committee
                    Members for 2023 - 2025
                  </h3>
                </Row>
                <Row
                  style={{
                    marginTop: "2px",
                    marginBottom: "2px",
                  }}
                >
                  <Col xs={9}>
                    <p className="Tsingle-enter">
                      General Meeting for Election of out Group was held on Date
                    </p>
                  </Col>
                  <Col xs={3} className="bordered-col-b">
                    <p className="Tsingle-enter">10/12/2022</p>
                  </Col>
                </Row>
                <Row
                  style={{
                    marginTop: "2px",
                    marginBottom: "2px",
                  }}
                >
                  <Col xs={9}>
                    <p className="Tsingle-enter">
                      Following Office Bearers of our Group were elected on Date
                    </p>
                  </Col>
                  <Col xs={3} className="bordered-col-b">
                    <p className="Tsingle-enter">10/12/2022</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={9}>
                    <Row>
                      <h4 className="H4single-enter">(1) President</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        height: "60px",
                      }}
                    >
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col xs={1} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Whatsapp No.</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Occupation Details
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">
                          12341234123412341234123412341234
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Spouse Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">XXXXXXXXXXXXXXX</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Spouse Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Col
                        style={{
                          borderColor: "#000",
                          borderStyle: "solid",
                          borderWidth: "1px 1px 1px 1px",
                          marginLeft: "6px",
                          maxWidth: "120px",
                          height: "160px",
                        }}
                      ></Col>
                    </Row>
                    <Row style={{ marginTop: "7px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Marraige Date</p>
                      </Col>
                      <Col xs={8} className="bordered-col-b">
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Signature</p>
                      </Col>
                      <Col
                        xs={8}
                        className="bordered-col-b"
                        style={{ height: "52px" }}
                      ></Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={9}>
                    <Row>
                      <h4 className="H4single-enter">
                        (2) Immediate Former President
                      </h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        height: "60px",
                      }}
                    >
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col xs={1} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Whatsapp No.</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Occupation Details
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">
                          12341234123412341234123412341234
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Spouse Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">XXXXXXXXXXXXXXX</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Spouse Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Col
                        style={{
                          borderColor: "#000",
                          borderStyle: "solid",
                          borderWidth: "1px 1px 1px 1px",
                          marginLeft: "6px",
                          maxWidth: "120px",
                          height: "160px",
                        }}
                      ></Col>
                    </Row>
                    <Row style={{ marginTop: "7px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Marraige Date</p>
                      </Col>
                      <Col xs={8} className="bordered-col-b">
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Signature</p>
                      </Col>
                      <Col
                        xs={8}
                        className="bordered-col-b"
                        style={{ height: "52px" }}
                      ></Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div
            className="page"
            style={{
              textAlign: "center",
              padding: "0 15px",
              marginTop: "22px",
              pageBreakAfter: "always",
            }}
          >
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "2px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={9}>
                    <Row>
                      <h4 className="H4single-enter">(3) Founder President</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        height: "60px",
                      }}
                    >
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col xs={1} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Whatsapp No.</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Occupation Details
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">
                          12341234123412341234123412341234
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Spouse Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">XXXXXXXXXXXXXXX</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Spouse Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Col
                        style={{
                          borderColor: "#000",
                          borderStyle: "solid",
                          borderWidth: "1px 1px 1px 1px",
                          marginLeft: "6px",
                          maxWidth: "120px",
                          height: "160px",
                        }}
                      ></Col>
                    </Row>
                    <Row style={{ marginTop: "7px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Marraige Date</p>
                      </Col>
                      <Col xs={8} className="bordered-col-b">
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Signature</p>
                      </Col>
                      <Col
                        xs={8}
                        className="bordered-col-b"
                        style={{ height: "52px" }}
                      ></Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={9}>
                    <Row>
                      <h4 className="H4single-enter">
                        (4) Nominated Former President
                      </h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        height: "60px",
                      }}
                    >
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col xs={1} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Whatsapp No.</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Occupation Details
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">
                          12341234123412341234123412341234
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Spouse Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">XXXXXXXXXXXXXXX</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Spouse Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Col
                        style={{
                          borderColor: "#000",
                          borderStyle: "solid",
                          borderWidth: "1px 1px 1px 1px",
                          marginLeft: "6px",
                          maxWidth: "120px",
                          height: "160px",
                        }}
                      ></Col>
                    </Row>
                    <Row style={{ marginTop: "7px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Marraige Date</p>
                      </Col>
                      <Col xs={8} className="bordered-col-b">
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Signature</p>
                      </Col>
                      <Col
                        xs={8}
                        className="bordered-col-b"
                        style={{ height: "52px" }}
                      ></Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={9}>
                    <Row>
                      <h4 className="H4single-enter">
                        (5) Nominated Former President
                      </h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        height: "60px",
                      }}
                    >
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col xs={1} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Whatsapp No.</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Occupation Details
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">
                          12341234123412341234123412341234
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Spouse Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">XXXXXXXXXXXXXXX</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Spouse Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Col
                        style={{
                          borderColor: "#000",
                          borderStyle: "solid",
                          borderWidth: "1px 1px 1px 1px",
                          marginLeft: "6px",
                          maxWidth: "120px",
                          height: "160px",
                        }}
                      ></Col>
                    </Row>
                    <Row style={{ marginTop: "7px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Marraige Date</p>
                      </Col>
                      <Col xs={8} className="bordered-col-b">
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Signature</p>
                      </Col>
                      <Col
                        xs={8}
                        className="bordered-col-b"
                        style={{ height: "52px" }}
                      ></Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={9}>
                    <Row>
                      <h4 className="H4single-enter">
                        (6) Nominated Former President
                      </h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        height: "60px",
                      }}
                    >
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col xs={1} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Whatsapp No.</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Occupation Details
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">
                          12341234123412341234123412341234
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Spouse Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">XXXXXXXXXXXXXXX</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Spouse Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Col
                        style={{
                          borderColor: "#000",
                          borderStyle: "solid",
                          borderWidth: "1px 1px 1px 1px",
                          marginLeft: "6px",
                          maxWidth: "120px",
                          height: "160px",
                        }}
                      ></Col>
                    </Row>
                    <Row style={{ marginTop: "7px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Marraige Date</p>
                      </Col>
                      <Col xs={8} className="bordered-col-b">
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Signature</p>
                      </Col>
                      <Col
                        xs={8}
                        className="bordered-col-b"
                        style={{ height: "52px" }}
                      ></Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div
            className="page"
            style={{
              textAlign: "center",
              padding: "0 15px",
              marginTop: "22px",
              pageBreakAfter: "always",
            }}
          >
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "2px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={9}>
                    <Row>
                      <h4 className="H4single-enter">(7) Vice President</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        height: "60px",
                      }}
                    >
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col xs={1} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Whatsapp No.</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Occupation Details
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">
                          12341234123412341234123412341234
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Spouse Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">XXXXXXXXXXXXXXX</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Spouse Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Col
                        style={{
                          borderColor: "#000",
                          borderStyle: "solid",
                          borderWidth: "1px 1px 1px 1px",
                          marginLeft: "6px",
                          maxWidth: "120px",
                          height: "160px",
                        }}
                      ></Col>
                    </Row>
                    <Row style={{ marginTop: "7px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Marraige Date</p>
                      </Col>
                      <Col xs={8} className="bordered-col-b">
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Signature</p>
                      </Col>
                      <Col
                        xs={8}
                        className="bordered-col-b"
                        style={{ height: "52px" }}
                      ></Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={9}>
                    <Row>
                      <h4 className="H4single-enter">(8) Secretary</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        height: "60px",
                      }}
                    >
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col xs={1} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Whatsapp No.</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Occupation Details
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">
                          12341234123412341234123412341234
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Spouse Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">XXXXXXXXXXXXXXX</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Spouse Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Col
                        style={{
                          borderColor: "#000",
                          borderStyle: "solid",
                          borderWidth: "1px 1px 1px 1px",
                          marginLeft: "6px",
                          maxWidth: "120px",
                          height: "160px",
                        }}
                      ></Col>
                    </Row>
                    <Row style={{ marginTop: "7px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Marraige Date</p>
                      </Col>
                      <Col xs={8} className="bordered-col-b">
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Signature</p>
                      </Col>
                      <Col
                        xs={8}
                        className="bordered-col-b"
                        style={{ height: "52px" }}
                      ></Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={9}>
                    <Row>
                      <h4 className="H4single-enter">(9) Joint Secretary</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        height: "60px",
                      }}
                    >
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col xs={1} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Whatsapp No.</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Occupation Details
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">
                          12341234123412341234123412341234
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Spouse Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">XXXXXXXXXXXXXXX</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Spouse Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Col
                        style={{
                          borderColor: "#000",
                          borderStyle: "solid",
                          borderWidth: "1px 1px 1px 1px",
                          marginLeft: "6px",
                          maxWidth: "120px",
                          height: "160px",
                        }}
                      ></Col>
                    </Row>
                    <Row style={{ marginTop: "7px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Marraige Date</p>
                      </Col>
                      <Col xs={8} className="bordered-col-b">
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Signature</p>
                      </Col>
                      <Col
                        xs={8}
                        className="bordered-col-b"
                        style={{ height: "52px" }}
                      ></Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={9}>
                    <Row>
                      <h4 className="H4single-enter">(10) Treasurer</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        height: "60px",
                      }}
                    >
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col xs={1} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Whatsapp No.</p>
                      </Col>
                      <Col xs={3} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">
                          Occupation Details
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={9}>
                        <p className="Tsingle-enter">
                          12341234123412341234123412341234
                        </p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={3}>
                        <p className="Tsingle-enter-label">Spouse Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">XXXXXXXXXXXXXXX</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Spouse Birth Date</p>
                      </Col>
                      <Col className="bordered-col-b" xs={4}>
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={3}>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Col
                        style={{
                          borderColor: "#000",
                          borderStyle: "solid",
                          borderWidth: "1px 1px 1px 1px",
                          marginLeft: "6px",
                          maxWidth: "120px",
                          height: "160px",
                        }}
                      ></Col>
                    </Row>
                    <Row style={{ marginTop: "7px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Marraige Date</p>
                      </Col>
                      <Col xs={8} className="bordered-col-b">
                        <p className="Tsingle-enter">10/12/2022</p>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={4} style={{ margin: "0", padding: "2px" }}>
                        <p className="Tsingle-enter-label">Signature</p>
                      </Col>
                      <Col
                        xs={8}
                        className="bordered-col-b"
                        style={{ height: "52px" }}
                      ></Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div
            className="page"
            style={{
              textAlign: "center",
              padding: "0 15px",
              marginTop: "22px",
              pageBreakAfter: "always",
            }}
          >
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "2px 2px 2px 2px",
                textAlign: "left",
              }}
            >
              <h5>Managing Committee Members</h5>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={12}>
                    <Row
                      style={{
                        padding: "0",
                        marginTop: "0px",
                        marginBottom: "0px",
                      }}
                    >
                      <h4 className="H4single-enter">(1)</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={2}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                      }}
                    >
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={10}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={2}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col
                        xs={1}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1} style={{ padding: "10px 4px 0px 4px" }}>
                        <p className="Tsingle-enter">Signature</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b" />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={12}>
                    <Row
                      style={{
                        padding: "0",
                        marginTop: "0px",
                        marginBottom: "0px",
                      }}
                    >
                      <h4 className="H4single-enter">(2)</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={2}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                      }}
                    >
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={10}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={2}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col
                        xs={1}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1} style={{ padding: "10px 4px 0px 4px" }}>
                        <p className="Tsingle-enter">Signature</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b" />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={12}>
                    <Row
                      style={{
                        padding: "0",
                        marginTop: "0px",
                        marginBottom: "0px",
                      }}
                    >
                      <h4 className="H4single-enter">(3)</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={2}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                      }}
                    >
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={10}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={2}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col
                        xs={1}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1} style={{ padding: "10px 4px 0px 4px" }}>
                        <p className="Tsingle-enter">Signature</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b" />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={12}>
                    <Row
                      style={{
                        padding: "0",
                        marginTop: "0px",
                        marginBottom: "0px",
                      }}
                    >
                      <h4 className="H4single-enter">(4)</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={2}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                      }}
                    >
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={10}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={2}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col
                        xs={1}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1} style={{ padding: "10px 4px 0px 4px" }}>
                        <p className="Tsingle-enter">Signature</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b" />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={12}>
                    <Row
                      style={{
                        padding: "0",
                        marginTop: "0px",
                        marginBottom: "0px",
                      }}
                    >
                      <h4 className="H4single-enter">(5)</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={2}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                      }}
                    >
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={10}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={2}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col
                        xs={1}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1} style={{ padding: "10px 4px 0px 4px" }}>
                        <p className="Tsingle-enter">Signature</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b" />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={12}>
                    <Row
                      style={{
                        padding: "0",
                        marginTop: "0px",
                        marginBottom: "0px",
                      }}
                    >
                      <h4 className="H4single-enter">(6)</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={2}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                      }}
                    >
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={10}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={2}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col
                        xs={1}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1} style={{ padding: "10px 4px 0px 4px" }}>
                        <p className="Tsingle-enter">Signature</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b" />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={12}>
                    <Row
                      style={{
                        padding: "0",
                        marginTop: "0px",
                        marginBottom: "0px",
                      }}
                    >
                      <h4 className="H4single-enter">(7)</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={2}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                      }}
                    >
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={10}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={2}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col
                        xs={1}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1} style={{ padding: "10px 4px 0px 4px" }}>
                        <p className="Tsingle-enter">Signature</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b" />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col>
                <Row>
                  <Col xs={12}>
                    <Row
                      style={{
                        padding: "0",
                        marginTop: "0px",
                        marginBottom: "0px",
                      }}
                    >
                      <h4 className="H4single-enter">(8)</h4>
                    </Row>
                    <Row style={{ marginTop: "2px", marginBottom: "2px" }}>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Name</p>
                      </Col>
                      <Col className="bordered-col-b" xs={2}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">Email Id</p>
                      </Col>
                      <Col className="bordered-col-b" xs={3}>
                        <p className="Tsingle-enter">1234123412341234123</p>
                      </Col>
                      <Col xs={1}>
                        <p className="Tsingle-enter-label">Mobile</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b">
                        <p className="Tsingle-enter">9638520741</p>
                      </Col>
                    </Row>
                    <Row
                      style={{
                        marginTop: "2px",
                        marginBottom: "2px",
                      }}
                    >
                      <Col xs={2}>
                        <p className="Tsingle-enter-label">
                          Correspondance Address
                        </p>
                      </Col>
                      <Col className="bordered-col-b" xs={10}>
                        <p className="Tsingle-enter">1234</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        xs={2}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">Phone</p>
                      </Col>
                      <Col
                        xs={1}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(O)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col
                        xs={1}
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter-label">(R)</p>
                      </Col>
                      <Col
                        xs={2}
                        className="bordered-col-b"
                        style={{ marginTop: "2px", marginBottom: "0px" }}
                      >
                        <p className="Tsingle-enter">(1234)</p>
                      </Col>
                      <Col xs={1} style={{ padding: "10px 4px 0px 4px" }}>
                        <p className="Tsingle-enter">Signature</p>
                      </Col>
                      <Col xs={2} className="bordered-col-b" />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <Col xs={12}>
                <Row
                  style={{
                    marginTop: "10px",
                    marginBottom: "0",
                    textAlign: "right",
                  }}
                >
                  <Col xs={6}></Col>
                  <Col xs={6}>
                    <p className="Tsingle-enter">
                      For Jain Social Group Madras Main
                    </p>
                  </Col>
                </Row>
                <Row style={{ marginTop: "22px", marginBottom: "0" }}>
                  <Col>
                    <p className="Tsingle-enter">Date</p>
                  </Col>
                  <Col>
                    <p className="Tsingle-enter">President</p>
                  </Col>
                  <Col>
                    <p className="Tsingle-enter">Secretary</p>
                  </Col>
                  <Col>
                    <p className="Tsingle-enter">Joint Secretary</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row
              style={{
                borderColor: "#000",
                borderStyle: "solid",
                borderWidth: "0px 2px 2px 2px",
                padding: "1px 10px",
                textAlign: "left",
              }}
            >
              <p className="Tsingle-enter">Note: </p>
              <ol className="Lsingle-enter">
                <li>
                  Please Full up complete details of Office Bearers & Managing
                  Committee Members
                </li>
                <li>
                  To be signed by President OR Secretary & Joint Secretary of
                  the Group
                </li>
                <li>
                  Please Ensure the receipt of this Form to Federation Office on
                  or before 20th January 2023
                </li>
              </ol>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupFormBResponse;
