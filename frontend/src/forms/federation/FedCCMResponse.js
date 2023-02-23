import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Images from "../../images/index";
import moment from "moment";

import "../Response.css";
import SecurePageSection from "../../SecurePageSection";

function FedCCMResponse() {
  const [response, setResponse] = useState([]);
  const responseId = useParams();
  const ref = React.createRef();

  const getResponse = async () => {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/forms/federation/fed-ccm/${responseId.id}`
    );
    setResponse(res.data);
  };

  useEffect(() => {
    getResponse();
  }, []);

  const navigate = useNavigate();

  const editForm = () => {
    navigate(`/form/fed-ccm/${response.id}/edit`);
  };

  const printDocument = () => {
    const input = document.getElementById("mainForm");
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
        <div ref={ref} id="mainForm" className="fResponseBody">
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
                <p>{response.gName}</p>
              </Col>
            </Row>
          </div>

          <Row>
            <p className="Tsingle-enter">
              <span className="response">{response.nDate}</span>
            </p>
            <p className="Tdouble-enter">To,</p>
            <p className="Tsingle-enter">All Central Council Members</p>
            <p className="Tsingle-enter">Jain Social Groups Int. Federation</p>
            <p className="Tdouble-enter">Dear JSGians,</p>
            <p className="Tsingle-enter">Jai Jinendra</p>
            <p className="Tdouble-enter">
              NOTICE is hereby given for a Meeting of Central Council Members of
              Jain Social Groups Int. Federation for the Year{" "}
              <span className="response">{response.mYear}</span> will be held on{" "}
              <span className="response">{response.mDay}</span>, the{" "}
              <span className="response">
                {moment(response.mDate).format("Do MMMM YYYY")} at{" "}
              </span>
              <span className="response">{response.mTime} at </span>
              <span className="response">{response.mAddress}, </span>
              <span className="response">{response.mCity}, </span>
              <span className="response">{response.mState}, </span>
              <span className="response">{response.mZip}</span>, to transact the
              following business:
            </p>
          </Row>

          <Row>
            <h3 className="Hdouble-enter text-center">AGENDA</h3>
          </Row>
          <ol className="Lsingle-enter">
            <li>Recitation of Namaskar Mahamantra & Federation Sutra.</li>
            <li>
              Welcome & Presidential Remark by JSGian{" "}
              <span className="response">
                {response.presName} - International President
              </span>
              -International President, JSGIF:{" "}
              <span className="response">{response.presyear}</span>.
            </li>
            <li>
              To Read & Pass the Minutes of last Central Council Meeting on{" "}
              <span className="response">
                {moment(response.lastyearMinutesFYear).format("Do MMMM YYYY")}
              </span>
              .
            </li>
            <li>
              Secretarial Report by JSGian{" "}
              <span className="response">
                {response.fedSecretaryGen} - Secretary General
              </span>
              , JSGIF: <span className="response">{response.secyear}</span>.
            </li>
            <li>
              Present & approve the Unaudited Accounts of{" "}
              <span className="response">{response.unAuditedAccFYear}</span>.
            </li>
            <li>
              To approve the amount of Group Contribution for{" "}
              <span className="response">{response.grpContibutionFYear}</span>.
            </li>
            <li>Any other matter with the permission of the Chair.</li>
            <li>Presentation of forthcoming events 5 minutes</li>
            {response.agendaPoint !== "" ? (
              <li>
                <span className="response">{response.agendaPoint}</span>
              </li>
            ) : (
              ""
            )}
            <li>
              Vote of Thanks by JSGian{" "}
              <span className="response">
                {response.fedSecretaryGen} - Secretary General
              </span>
              , JSGIF: <span className="response">{response.secyear}</span>.
            </li>
          </ol>

          <Row>
            <h3 className="H3double-enter text-center">
              Yours in JSG Movement
            </h3>
          </Row>
          <Row>
            <Col className="text-center">
              <p className="Tdouble-enter">
                <span className="response">
                  JSGian {response.fedSecretaryGen}
                </span>{" "}
              </p>
              <p className="Tsingle-enter">Secretary General</p>
            </Col>
            <Col className="text-center">
              <p className="Tdouble-enter">
                <span className="response">
                  {" "}
                  JSGian {response.fedSecretary}
                </span>{" "}
              </p>
              <p className="Tsingle-enter">Secretary</p>
            </Col>
            <Col className="text-center">
              <p className="Tdouble-enter">
                <span className="response">
                  JSGian {response.fedJtSecretary}{" "}
                </span>{" "}
              </p>
              <p className="Tsingle-enter">Jt. Secretary</p>
            </Col>
          </Row>
          <Row>
            <h3 className="H3double-enter text-center">
              Jain Social Groups Int. Federation
            </h3>
          </Row>
          <p className="Tsingle-enter"> Note :</p>
          <p className="Tsingle-enter">
            Any queries / questions regarding the unaudited accounts, Central
            Council members are requested to send mail or letter to Federation
            Office on or before 10-02-2022, 5.00 p.m.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FedCCMResponse;
