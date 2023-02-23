import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../components/Button.css";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Container,
  Table,
} from "react-bootstrap";
import moment from "moment";
import "../formsList.css";

import axios from "axios";
import SecurePageSection from "../../SecurePageSection";

const GroupMembership = () => {
  const [forms, setForms] = useState([]);

  const fetchForms = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/forms/group/grp-membership-form/"
    );

    console.log(response.data);
    setForms(response.data);
  };

  const navigate = useNavigate();
  const newForm = () => {
    navigate("/form/grp-membership-form");
  };

  useEffect(() => {
    fetchForms();
  }, []);

  return (
    <div>
      <Container className="body">
        <Row style={{ marginBottom: "1em" }}>
          <Col xs={10}>
            <h2> Previous Forms </h2>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className="btn--primary" onClick={newForm}>
              New Form
            </Button>
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead className="tableHead">
            <tr>
              <th>Id</th>
              <th>Group Name</th>
              <th>Member Name</th>
              <th>Spouse Name</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {forms
              .slice(0)
              .reverse()
              .map((form, index) => (
                <tr>
                  <td>{form.id}</td>
                  <td>{form.gName}</td>
                  <td>{form.memName}</td>
                  <td>{form.spsName}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default GroupMembership;
