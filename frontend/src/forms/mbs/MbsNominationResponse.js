import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import Images from "../../images/index";
import moment from "moment";

import "../Response.css";

function MbsNominationResponse() {
  const [response, setResponses] = useState([]);
  const responseId = useParams();

  const getResponse = async () => {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/forms/mbs-nomination/${responseId.id}`
    );
    setResponses(res.data);
  };

  const printDocument = () => {
    const input = document.getElementById("mainForm");
  };

  useEffect(() => {
    getResponse();
  });

  return (
    <div>
      <Button onClick={printDocument} variant="primary">
        Download Form
      </Button>
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
                <h2>{response.memGroup}</h2>
              </Col>
            </Row>
          </div>
          <Row>
            <p className="Tsingle-enter">From,</p>
            <p className="Tsingle-enter">
              Name : <span className="response">{response.fromName}</span>
            </p>
            <p className="Tsingle-enter">
              Address : <span className="response">{response.fromAddress}</span>
            </p>
            <p className="Tsingle-enter">
              Contact No. :{" "}
              <span className="response">{response.fromContact}</span>{" "}
            </p>
            <p className="Tsingle-enter">
              Mobile No. :{" "}
              <span className="response">{response.fromMobile}</span>{" "}
            </p>
            <p className="Tsingle-enter">
              Email ID : <span className="response">{response.fromEmail}</span>{" "}
            </p>
            <p className="Tsingle-enter">
              Date :{" "}
              <span className="response">
                {moment(response.fromDate).format("Do MMMM YYYY")}
              </span>
            </p>
          </Row>

          <Row>
            <p className="Tdouble-enter">To,</p>
            <p className="Tsingle-enter">The Chairman / Secretary,</p>
            <p className="Tsingle-enter">
              JSG Welfare Society & the Mutual Benefit Scheme of JSGIF
            </p>
            <p className="Tsingle-enter">4-p, Vijay Chambers, 4th Floor,</p>
            <p className="Tsingle-enter">Tribhuvan Road,</p>
            <p className="Tsingle-enter">Opp. Dreamland Cinema,</p>
            <p className="Tsingle-enter">Mumbai - 400 004.</p>

            <p className="Tdouble-enter">Respected Sir,</p>
            <p className="Tdouble-enter">
              Ref : JSG Welfare Society Membership No.{" "}
              <span className="response">{response.welfareMembershipNum}</span>{" "}
              & the MBS Scheme Membership No.{" "}
              <span className="response">{response.mbsMembershipNum}</span>
            </p>
            <p className="Tdouble-enter">
              Sub: Change in Nomination / New Nomination
            </p>
            <p className="Tdouble-enter">
              I, <span className="response">{response.memName}</span>, am a
              member of your MBS scheme. I am a Member of JSG{" "}
              <span className="response">{response.memGroup}</span>. With
              immediate effect, I am changing my earlier Nomination and filing
              my new nomination. I am nominating the following person(s) to whom
              in the event of my death the amount of scheme is to be paid. This
              letter supersedes and cancels all my previous nominations made by
              me time to time.
            </p>
          </Row>
          <p className="Tdouble-enter">
            New 1st Nominee Name :{" "}
            <span className="response">{response.nomineeName1}</span>
          </p>
          <p className="Tsingle-enter">
            Nominee Address:{" "}
            <span className="response">{response.nomineeAddress1}</span>
          </p>
          <p className="Tsingle-enter">
            Relationship with member, if any :{" "}
            <span className="response">{response.nomineeRelation1}</span>
          </p>
          <p className="Tdouble-enter">
            New 2nd Nominee Name :{" "}
            <span className="response">{response.nomineeName2}</span>
          </p>
          <p className="Tsingle-enter">
            Nominee Address:{" "}
            <span className="response">{response.nomineeAddress2}</span>
          </p>
          <p className="Tsingle-enter">
            Relationship with member, if any :{" "}
            <span className="response">{response.nomineeRelation2}</span>
          </p>
          <p className="Tdouble-enter">
            100% Death compensation is to be paid to 1st Nominee only. If at all
            1st Nominee is passed away, than only 2nd Nominee in entitled to
            receive 100% payment. 2nd Nominee must present death certificate of
            1st Nominee.
          </p>
          <p className="Tdouble-enter">
            This change in nomination is made on{" "}
            <span className="response">
              {moment(response.changeMadeOn).format("Do MMMM YYYY")}
            </span>{" "}
            at <span className="response">{response.changeMadeAt}</span> in
            presence off
            <span className="response">{response.changePresenceOf}</span>
          </p>
          <Row>
            <Col>
              <p className="Tsign-enter">Witness</p>
            </Col>
            <Col>
              <p className="Tsign-enter">Signature of Member</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="Tsign-enter">
                JSG <span className="response">{response.memGroup}</span> Group
              </p>
              <p className="Tsingle-enter">Name & Designation &</p>
              <p className="Tsingle-enter">Group Rubber Stamp</p>
            </Col>
            <Col>
              <p className="Tsign-enter">
                <br />
              </p>
              <p className="Tsingle-enter">
                <br />
              </p>
              <p className="Tsingle-enter">To be certified by Bank</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default MbsNominationResponse;
