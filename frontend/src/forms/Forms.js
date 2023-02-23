import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import "./Response.css";

function Forms() {
  return (
    <div>
      <h1>Forms</h1>
      <p>
        <b>[✓]</b> = Complete <br />
        <b>[--]</b> = Response Pending <br />
        <b>[X]</b> = Last
      </p>
      <Row>
        <Row>
          <Link to="/login">
            <p className="Tsingle">Login Form</p>
          </Link>
        </Row>
        <Col>
          <h2>FEDERATION</h2>
          <Link to="/form/fed-idmeet">
            <p className="Tsingle">
              Federation ID Meet <b>[✓]</b>
            </p>
          </Link>
          <Link to="/form/fed-obmeet">
            <p className="Tsingle">
              Federation OB Meet <b>[✓]</b>
            </p>
          </Link>
          <Link to="/form/fed-agm">
            <p className="Tsingle">
              Federation AGM <b>[✓]</b>
            </p>
          </Link>
          <Link to="/form/fed-ccm">
            <p className="Tsingle">
              Federation CCM <b>[✓]</b>
            </p>
          </Link>
        </Col>
        <Col>
          <h2>REGION</h2>
          <Link to="/form/ragm">
            <p className="Tsingle">
              Region AGM <b>[✓]</b>
            </p>
          </Link>
          <Link to="/form/rcommitteemeet">
            <p className="Tsingle">
              Region Committee Meet <b>[✓]</b>
            </p>
          </Link>
          <Link to="/form/robmeet">
            <p className="Tsingle">
              Region OB Meet <b>[✓]</b>
            </p>
          </Link>
        </Col>
        <Col>
          <h2>SANGINI</h2>
          <Link to="/form/sgncommitteemeet">
            <p className="Tsingle">
              Sangini Committee Meet <b>[✓]</b>
            </p>
          </Link>
          <Link to="/form/sgnforumregistraion">
            <p className="Tsingle">
              Sangini Forum Registraion <b>[✓]</b>
            </p>
          </Link>
          <Link to="/form/sgnmembershipform">
            <p className="Tsingle">
              Sangini Membership Form <b>[✓]</b>
            </p>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>GROUPS</h2>
          <Link to="/form/grpagm">
            <p className="Tsingle">
              Group AGM <b>[✓]</b>{" "}
            </p>
          </Link>
          <Link to="/form/grpcommitteemeet">
            <p className="Tsingle">
              Group Committee Meet <b>[✓]</b>{" "}
            </p>
          </Link>
          <Link to="/form/grpegm">
            <p className="Tsingle">
              Group EGM <b>[✓]</b>{" "}
            </p>
          </Link>

          <Link to="/form/grp-forum-registraion">
            <p className="Tsingle">
              Group Registraion <b>[✓]</b>
            </p>
          </Link>
          <Link to="/form/grp-membership-form">
            <p className="Tsingle">
              Group Membership Form <b>[✓]</b>
            </p>
          </Link>
        </Col>
        <Col>
          <h2>JSG EDUCATION LOAN</h2>
          <Link to="/form/grpagm">
            <p className="Tsingle">
              Education Loan Application Form <b>[Download]</b>
            </p>
          </Link>
        </Col>
        <Col>
          <h2>MBS</h2>
          <Link to="/form/mbs-nomination">
            <p className="Tsingle">
              NOMINATION FORM <b>[✓]</b>
            </p>
          </Link>
          <Link to="/form/mbs-application">
            <p className="Tsingle">
              JSG WELFARE SOCIETY & MBS OF JSGIF APPLICATION FORMS{" "}
              <b>[Download]</b>
            </p>
          </Link>
        </Col>
      </Row>
      <Outlet />
    </div>
  );
}

export default Forms;
