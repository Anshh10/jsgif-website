import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Images from "../../images/index";
import moment from "moment";

import "../Response.css";
import SecurePageSection from "../../SecurePageSection";

function FedOBMeetResponse() {
  const [response, setResponses] = useState([]);
  const responseId = useParams();
  const ref = React.createRef();

  const getResponse = async () => {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/forms/federation/fed-obmeet/${responseId.id}`
    );
    setResponses(res.data);
  };

  const navigate = useNavigate();
  const editForm = () => {
    navigate(`/form/fed-obmeet/${response.id}/edit`);
  };

  useEffect(() => {
    getResponse();
  }, []);

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
                <h2>{response.gName}</h2>
              </Col>
            </Row>
          </div>

          <Row>
            <p className="Tsingle-enter">
              <span className="response">{response.nDate}</span>
            </p>
            <p className="Tdouble-enter"> Dear JSGians, </p>
            <p className="Tsingle-enter"> Jai Jinendra </p>
            <p className="Tdouble-enter">
              Notice is hereby given that a meeting of the International
              Directors of Jain Social Groups Int. Federation will be held on{" "}
              <span className="response">{response.mDay}</span>, the{" "}
              <span className="response">
                {moment(response.mDate).format("Do MMMM YYYY")}
              </span>{" "}
              at <span className="response">{response.mTime}</span> at{" "}
              <span className="response">{response.mAddress}</span>,{" "}
              <span className="response">{response.mCity}</span>,{" "}
              <span className="response">{response.mState}</span>,{" "}
              <span className="response">{response.mZip}</span>, to transact the
              following business.
            </p>
          </Row>

          <Row>
            <h2 className="Hdouble-enter text-center">AGENDA</h2>
          </Row>
          <ol className="Lsingle-enter">
            <li>
              Recitation of Namaskar Mahamantra & Federation Sutra 1 minute.
            </li>
            <li>Welcome address by the JSGIF President 5 minutes.</li>
            <li>
              To read and confirm the minutes of the previous meeting 3 minutes.
            </li>
            <li>Matters arising out of the minutes 3 minutes.</li>
            <li>Presentation of the budget for the year 2023-24 3 minutes.</li>
            <li>Presentation of the future events 3 minutes.</li>
            {response.agendaPoint !== "" ? (
              <li>
                <span className="response">{response.agendaPoint}</span>
              </li>
            ) : (
              ""
            )}
            <li>
              To transact any other matter with the permission of the chair 5
              minutes.
            </li>
            <li> Vote of thanks.</li>
          </ol>
          <p className="Tdouble-enter">
            For Jain Social Groups Int. Federation
          </p>
          <Row>
            <Col className="text-center">
              <p className="Tdouble-enter">
                JSGian <span className="response">{response.secretaryGen}</span>{" "}
              </p>
              <p className="Tsingle-enter">Secretary General</p>
            </Col>
            <Col>
              <p className="Tdouble-enter">
                JSGian <span className="response">{response.secretary}</span>{" "}
              </p>
              <p className="Tsingle-enter">Secretary</p>
            </Col>
            <Col>
              <p className="Tdouble-enter">
                JSGian <span className="response">{response.jtSecretary} </span>{" "}
              </p>
              <p className="Tsingle-enter">Jt. Secretary</p>
            </Col>
          </Row>
          <p className="Tdouble-enter"> Note :- </p>
          <ol className="Lsingle-enter">
            <li>All members are requested to be present on time.</li>
            <li>
              Member(s) desirous of taking up a matter in any other matter are
              requested to inform the point(s) in detail to the President and
              Secretary General of the Federation by email 24 hours before the
              date of the meeting.
            </li>
            <li>Total planned duration of the meeting is 48 minutes.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FedOBMeetResponse;
