import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Images from "../../images/index";
import moment from "moment";

import "../Response.css";
import SecurePageSection from "../../SecurePageSection";

function GroupForumRegistrationResponse() {
  const [response, setResponses] = useState([]);
  const responseId = useParams();

  const getResponse = async () => {
    const res = await axios.get(
      `/api/forms/group/grp-forum-registraion/${responseId.id}`
    );
    setResponses(res.data);
  };

  const printDocument = () => {
    const input = document.getElementById("mainForm");
  };

  useEffect(() => {
    getResponse();
  }, []);

  const navigate = useNavigate();
  const editForm = () => {
    navigate(`form/grp-forum-registraion/${response.id}/edit/`);
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
          <div className="bannerYellow">
            <Row className="T-Banner">
              <Col xs={1}>
                <img
                  src={Images.Logo}
                  className="logoImage"
                  alt="jsgBanner"
                ></img>
              </Col>
              <Col xs={11} className="bannerText text-center">
                <h1>JAIN SOCIAL GROUP INT. FEDERATION</h1>
                <h2>{response.grpName}</h2>
              </Col>
            </Row>
          </div>
          <Row>
            <p className="Tsingle-enter">
              <span className="response">
                {moment(response.formDate).format("Do MMMM YYYY")}
              </span>
            </p>
          </Row>
          <Row className="text-center">
            <h2 className="Hdouble-enter text-center">
              GROUP FORUM REGISTRATION FORM
            </h2>
          </Row>

          <ol className="Ldouble-enter">
            <li>
              Name of Group -{" "}
              <span className="response">{response.grpName}</span>{" "}
            </li>
            <li>
              Sponsor Group -{" "}
              <span className="response">{response.parentgName}</span>{" "}
            </li>
            <li>
              Name of co-ordinator/s appointed by sponsor group with copy of
              resolution passed by sponsor group.
            </li>
            <Row>
              <Col>
                <p className="Tsingle-enter">
                  Name - <span className="response">{response.cordName1}</span>
                </p>
              </Col>
              <Col>
                <p className="Tsingle-enter">
                  Post - <span className="response">{response.cordpost1}</span>
                </p>
              </Col>
            </Row>
            <li>
              Date of formation -{" "}
              <span className="response">
                {moment(response.formationDate).format("Do MMMM YYYY")}
              </span>{" "}
            </li>
            <li>Name of office bearers - </li>
            <Row>
              <Col>
                <p className="Tsingle-enter">
                  President -{" "}
                  <span className="response">{response.presName}</span>{" "}
                </p>
              </Col>
              <Col>
                <p className="Tsingle-enter">
                  V.P. - <span className="response">{response.vPresName}</span>{" "}
                </p>
              </Col>
              <Col>
                <p className="Tsingle-enter">
                  Secretary -{" "}
                  <span className="response">{response.secName}</span>{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="Tsingle-enter">
                  Jt. Secretary -{" "}
                  <span className="response">{response.jtSecName}</span>{" "}
                </p>
              </Col>
              <Col>
                <p className="Tsingle-enter">
                  Treasurer -{" "}
                  <span className="response">{response.tresName}</span>{" "}
                </p>
              </Col>
              <Col>
                <p className="Tsingle-enter"> </p>
              </Col>
            </Row>
            <li>Committee Member - </li>
            <Row>
              <Col>
                <p className="Tsingle-enter">
                  1. <span className="response">{response.commName1}</span>
                </p>
              </Col>
              <Col>
                <p className="Tsingle-enter">
                  2. <span className="response">{response.commName2}</span>
                </p>
              </Col>
              <Col>
                <p className="Tsingle-enter">
                  3. <span className="response">{response.commName3}</span>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="Tsingle-enter">
                  4. <span className="response">{response.commName4}</span>
                </p>
              </Col>
              <Col>
                <p className="Tsingle-enter">
                  5. <span className="response">{response.commName5}</span>
                </p>
              </Col>
              <Col>
                <p className="Tsingle-enter"> </p>
              </Col>
            </Row>
            <li>
              List of members along with address, mobile & email (Please attach
              list separately)
            </li>

            <li>
              Attach DD/UTR of Rs.1180/- (Rs.1000/- yearly registration and
              Rs.180 GST on it) to be paid every year. DD/UTR Number -{" "}
              <span className="response">{response.ddNumber}</span> Bank -{" "}
              <span className="response">{response.bankName}</span> Dated -{" "}
              <span className="response">{response.ddDate}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default GroupForumRegistrationResponse;
