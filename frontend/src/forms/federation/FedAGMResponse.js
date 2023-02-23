import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Images from "../../images/index";
import moment from "moment";

import "../Response.css";

function FedAGMResponse() {
  const [response, setResponses] = useState([]);
  const responseId = useParams();
  const ref = React.createRef();

  const getResponse = async () => {
    const res = await axios.get(
      `/api/forms/federation/fed-agm/${responseId.id}`
    );
    setResponses(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getResponse();
  }, []);

  const navigate = useNavigate();
  const editForm = () => {
    navigate(`/form/ragm/${response.id}/edit`);
  };

  return (
    <div>
      <Row style={{ marginBottom: "1em", marginTop: "1em" }}>
        <Col className="d-flex justify-content-end">
          <Button onClick="" variant="primary">
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

            <p className="Tdouble-enter"> Dear JSGians, </p>
            <p className="Tsingle-enter"> Jai Jinendra </p>
            <p className="Tdouble-enter">
              Notice is hereby given that the Annual General Meeting of of the
              General Council Members of JSG Int. Federation would beheld as per
              details hereunder:-
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
            <li> Welcome and opening remarks by the JSGIF President.</li>
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
            <li> To submit report by the Secretary General.</li>
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
            JSGian <span className="response">{response.fedSecretary}</span>
          </p>
          <p className="Tsingle-enter">
            <span className="response">JSGIF - Secretary Generals</span>
          </p>
          <p className="Tdouble-enter">Note :- </p>
          <p className="Tsingle-enter">
            1. Only one leave of absence is allowed in a year.
          </p>
          <p className="Tsingle-enter">
            2 . Leave of absence to be notified to the President and Secretary
            General by email 24hrs before the day of meeting.
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

export default FedAGMResponse;
