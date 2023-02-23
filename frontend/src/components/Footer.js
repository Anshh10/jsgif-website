import React from "react";
import "./Footer.css";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer-section">
      <Row className="justify-content-center">
        <Col className="col-md-auto">
          <h2>Footer</h2>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
