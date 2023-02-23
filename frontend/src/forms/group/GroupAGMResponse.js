import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Images from "../../images/index";
import moment from "moment";

import "../Response.css";
import SecurePageSection from "../../SecurePageSection";

function GroupAGMResponse() {
  const [response, setResponses] = useState([]);
  const responseId = useParams();
  const ref = React.createRef();

  const getResponse = async () => {
    const res = await axios.get(`/api/forms/group/grp-agm/${responseId.id}`);
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
    navigate(`/form/grpagm/${response.id}/edit`);
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
              Notice is hereby given that the 40th Annual General Body Meeting
              of Jain Social Group{" "}
              <span className="response">{response.gName}</span> will be held on{" "}
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
            <li> Prayer</li>
            <li> Welcome address by the President.</li>
            <li> To read and confirm the minutes of the previous meeting.</li>
            <li>
              {" "}
              To adopt the Secretary's report for the year{" "}
              <span className="response">{response.secReportYear}</span>
            </li>
            <li> Matters arising out of the minutes.</li>
            <li>
              To adopt the accounts for the year
              <span className="response"> {response.mYear} </span>.
            </li>
            <li>
              To appoint auditor for the year{" "}
              <span className="response">{response.auditorFYear}</span>.
            </li>
            {response.agendaPoint !== null && "" ? (
              <li>
                <span className="response">{response.agendaPoint}</span>
              </li>
            ) : (
              ""
            )}
            <li>
              {" "}
              To transact any other matter with the permission of the chair.
            </li>
            <li> Vote of thanks.</li>
          </ol>

          <p className="Tdouble-enter">For JSG Madras Main</p>
          <p className="Tsingle-enter">
            JSGian <span className="response">{response.rSecretary}</span>
          </p>
          <p className="Tsingle-enter">Secretary</p>
          <p className="Tdouble-enter">Note :- </p>
          <ol className="Lsingle-enter">
            <li>All members are requested to be present on time.</li>
            <li>Guests and children are not allowed in the AGM.</li>
            <li>
              Member(s) desirous of taking up a matter in point 7 are requested
              to inform the point(s) in detail to the President and Secretary of
              the group by email 24 hours before the date of the AGM.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default GroupAGMResponse;
