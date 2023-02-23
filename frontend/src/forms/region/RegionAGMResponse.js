import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Images from "../../images/index";
import moment from "moment";

import "../Response.css";

function RegionAGMResponse() {
  const [response, setResponses] = useState([]);
  const responseId = useParams();
  const ref = React.createRef();

  const getResponse = async () => {
    const res = await axios.get(`/api/forms/region/reg-agm/${responseId.id}`);
    setResponses(res.data);
  };

  useEffect(() => {
    getResponse();
  }, []);

  const printDocument = () => {
    const input = document.getElementById("mainForm");
  };

  const navigate = useNavigate();
  const editForm = () => {
    navigate(`/form/ragm/${response.id}/edit`);
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
                <h2>{response.rName}</h2>
              </Col>
            </Row>
          </div>

          <Row className="toptext">
            <Col className="text-center">
              <p className="Tsingle-enter">
                Chairman - JSGian ________________
              </p>
              <p className="Tdouble-enter">
                Email ID - _________________________
              </p>
              <p className="Tdouble-enter"> Phone Number - _________________</p>
            </Col>

            <Col className="text-center">
              <p className="Tsingle-enter">
                Secretary - JSGian ________________
              </p>
              <p className="Tdouble-enter">
                Email ID - _________________________
              </p>
              <p className="Tdouble-enter"> Phone Number - _________________</p>
            </Col>
          </Row>

          <Row>
            <p className="Tsingle-enter">
              <span className="response">{response.nDate}</span>
            </p>
            <p className="Tdouble-enter"> To, </p>
            <p className="Tsingle-enter"> All General Council Members,</p>

            <p className="Tsingle-enter">
              {" "}
              Jain Social Groups Int. Federation{" "}
            </p>
            <p className="Tsingle-enter">
              Region - <span className="response">{response.rName}</span>
            </p>
            <p className="Tdouble-enter"> Dear JSGians, </p>
            <p className="Tsingle-enter"> Jai Jinendra </p>
            <p className="Tdouble-enter">
              Notice is hereby given that the Annual General Meeting of{" "}
              <span className="response">{response.rName}</span> of JSG Int.
              Federation would be held as per details hereunder:-
            </p>
          </Row>

          <div className="Tbox">
            <p className="Tsingle-enter">
              Day : <span className="response">{response.mDay}</span>{" "}
            </p>
            <p className="Tsingle-enter">
              Date:{" "}
              <span className="response">
                {moment(response.mDate).format("Do MMMM YYYY")}
              </span>
            </p>
            <p className="Tsingle-enter">
              Time: <span className="response"> {response.mTime} </span>
            </p>
            <p className="Tsingle-enter">
              Place:{" "}
              <span className="response">
                {" "}
                {response.mAddress}, {response.mCity} -{response.mState} -{" "}
                {response.mZip}{" "}
              </span>
            </p>
          </div>
          <Row>
            <h2 className="Hdouble-enter text-center">AGENDA</h2>
          </Row>
          <ol className="Lsingle-enter">
            <li> Recitation of Namaskar Mahamantra and Federation Sutra.</li>
            <li> Welcome and opening remarks by the Region Chairman.</li>
            <li> Leave of absence if any.</li>
            <li> Read and approve minutes of the previous AGM.</li>
            <li> Matters arising out of the minutes.</li>
            <li>
              To approve & pass the audited accounts for the year
              <span className="response"> {response.mYear} </span>.
            </li>
            <li>
              To appoint auditor for the year{" "}
              <span className="response">{response.auditorFYear}</span> and fix
              their remuneration.
            </li>
            <li> To submit report by the Secretary.</li>
            {response.agendaPoint !== "" ? (
              <li>
                <span className="response">{response.agendaPoint}</span>
              </li>
            ) : (
              ""
            )}
            <li> Any other matter with the permission of the Chair.</li>
            <li> Vote of thanks.</li>
          </ol>

          <p className="Tdouble-enter">Yours in JSG Movement</p>
          <p className="Tsingle-enter">
            JSGian <span className="response">{response.rSecretary}</span>
          </p>
          <p className="Tsingle-enter">
            JSGIF -
            <span className="response">{response.rName} - Secretary</span>
          </p>
          <p className="Tdouble-enter">Note :- </p>
          <p className="Tsingle-enter">
            1. Only one leave of absence is allowed in a year.
          </p>
          <p className="Tsingle-enter">
            2 . Leave of absence to be notified to the Chairman and Secretary by
            email 24hrs before the day of meeting.
          </p>
          <p className="Tsingle-enter">
            3. Member(s) desirous of taking up a point in any other matter must
            inform the Chairman and Secretary by email with details of the point
            48hrs before the date of meeting.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegionAGMResponse;
