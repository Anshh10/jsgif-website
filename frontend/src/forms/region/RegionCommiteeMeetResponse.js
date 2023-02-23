import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Images from "../../images/index";
import moment from "moment";

import "../Response.css";

function RegionCommiteeMeetResponse() {
  const [response, setResponses] = useState([]);
  const responseId = useParams();

  const getResponse = async () => {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/forms/region/reg-committee-meet/${responseId.id}`
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
    navigate(`/form/rcommitteemeet/${response.id}/edit`);
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
                <h2>{response.rName}</h2>
              </Col>
            </Row>
          </div>
          <Row>
            <p className="Tdouble-enter">Dear members,</p>
            <p className="Tsingle-enter">Jai Jinendra</p>
            <p className="Tdouble-enter">
              Notice is hereby given that a meeting of the committee members of
              Jain Social Groups Int. Federation{" "}
              <span className="response">{response.rName}</span> will be held on{" "}
              <span className="response">{response.mDay},</span> the{" "}
              <span className="response">
                {moment(response.mDate).format("Do MMMM YYYY")}
              </span>{" "}
              at <span className="response">{response.mTime}</span> at{" "}
              <span className="response">{response.mVenue}</span> to transact
              the following business.
            </p>
          </Row>

          <Row className="text-center">
            <h2 className="Hdouble-enter text-center">AGENDA</h2>
          </Row>
          <ol className="Lsingle-enter">
            <li>
              Recitation of Namaskar Mahamantra & Federation Sutra 1 minute.
            </li>
            <li>Welcome address by the Region Chairman 5 minutes.</li>
            <li>
              To read and confirm the minutes of the previous meeting 3 minutes
            </li>
            <li>Matters arising out of the minutes 3 minutes</li>
            <li>
              Presentation of the budget for the year{" "}
              <span className="response">{response.budgetYear}</span> by the
              Treasurer 2 minutes
            </li>
            <li>
              Secretarial report by Secretary & both Jt. Secretaries 2 minutes
            </li>
            <li>
              Report presentation by Editor
              <span className="response"> {response.reporterName} </span>1
              minute
            </li>
            <li>Report presentation by P.R.O. Admin 1 minute.</li>
            <li>Report presentation by P.R.O. Greetings 1 minute</li>
            <li>Report presentation by Sangini coordinator 1 minute</li>
            <li>Report presentation by Mangalyatra coordinator 1 minute</li>
            <li>Presentation of events planned. 5 minutes</li>
            {response.agendaPoint !== "" ? (
              <li>
                <span className="response">{response.agendaPoint}</span>
              </li>
            ) : (
              ""
            )}
            <li>
              To transact any other matter with the permission of the chair 5
              minutes
            </li>
            <li>Vote of Thanks 1 minute.</li>
          </ol>

          <p className="Tdouble-enter">
            For Jain Social Groups Int. Federation{" "}
            <span className="response">{response.rName}</span>
          </p>
          <Row>
            <Col className="text-center">
              <p className="Tdouble-enter">
                JSGian <span className="response">{response.rSecretary}</span>{" "}
              </p>
              <p className="Tsingle-enter">Secretary</p>
            </Col>
            <Col>
              <p className="Tdouble-enter">
                JSGian{" "}
                <span className="response">{response.rJtSecretary1}</span>{" "}
              </p>
              <p className="Tsingle-enter">Jt. Secretary</p>
            </Col>
            <Col>
              <p className="Tdouble-enter">
                JSGian{" "}
                <span className="response">{response.rJtSecretary2} </span>{" "}
              </p>
              <p className="Tsingle-enter">Jt. Secretary</p>
            </Col>
          </Row>
          <p className="Tdouble-enter"> Note :- </p>
          <p className="Tsingle-enter">
            All members are requested to be present on time.
          </p>
          <p className="Tsingle-enter">
            Member(s) desirous of taking up a matter in any other matter are
            requested to inform the point(s) in detail to the Chairman and
            Secretary by email 24 hours before the date of the meeting.
          </p>
          <p className="Tsingle-enter">
            Total planned duration of the meeting is 32 minutes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegionCommiteeMeetResponse;
