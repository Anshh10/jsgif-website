import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Images from "../../images/index";
import moment from "moment";

import "../Response.css";
import SecurePageSection from "../../SecurePageSection";

function GroupEGMResponse() {
  const [response, setResponses] = useState([]);
  const responseId = useParams();
  const ref = React.createRef();

  const getResponse = async () => {
    const res = await axios.get(`/api/forms/group/grp-egm/${responseId.id}/`);
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
    navigate(`/form/grpegm/${response.id}/edit/`);
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
            <li> Prayer.</li>
            <li> Recitation of Federation Sutra.</li>
            <li> Meeting called to order.</li>
            <li> Welcome address by the President.</li>
            <li> Election Commissioner's Report.</li>
            <li>
              Election if any of committee members for the year
              <span className="response"> {response.mYear} </span>.
            </li>
            {response.agendaPoint !== "" ? (
              <li>
                <span className="response">{response.agendaPoint}</span>
              </li>
            ) : (
              ""
            )}
            <li>Declaration of results by the Election Commissioner</li>
            <li> Vote of thanks.</li>
          </ol>
          <p className="Tdouble-enter">
            Members desirous of standing for the election are requested to
            submit the fully filled nomination form by{" "}
            <span className="response">{response.electionSTime}</span> on or
            before <span className="response">{response.electionSDay}</span>,
            the{" "}
            <span className="response">
              {moment(response.electionSDate).format("Do MMMM YYYY")}
            </span>
            . The last date for withdrawal of nominations is by{" "}
            <span className="response">{response.electionWTime}</span> on or
            before <span className="response">{response.electionWDay}</span>,
            the{" "}
            <span className="response">
              {moment(response.electionWDate).format("Do MMMM YYYY")}
            </span>
            .
          </p>
          <p className="Tdouble-enter">
            Contestants for the election must have been a member of JSG{" "}
            <span className="response">{response.gName}</span> for a minimum of
            2 years and must have paid the fees in full for the year{" "}
            <span className="response">{response.contestantsfeesFYear}</span>{" "}
            and should not have any outstanding dues to JSGMM. Proposer and
            seconder too must have paid their fees in full for the year{" "}
            <span className="response">{response.proposerfeesFYear}</span> and
            should not have any outstanding dues to JSGMM.
          </p>
          <p className="Tdouble-enter">Regards,</p>
          <p className="Tsingle-enter">
            JSGian <span className="response">{response.rSecretary}</span>
          </p>
          <p className="Tsingle-enter">Secretary</p>
        </div>
      </div>
    </div>
  );
}

export default GroupEGMResponse;
