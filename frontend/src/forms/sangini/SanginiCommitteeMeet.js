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

const SanginiCommitteeMeet = () => {
  const [forms, setForms] = useState([]);

  const fetchForms = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/forms/sangini/sgncommitteemeet/"
    );

    console.log(response.data);
    setForms(response.data);
  };

  const navigate = useNavigate();
  const newForm = () => {
    navigate("/form/sgn-committee-meet");
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
              <th>City</th>
              <th>Notice Date</th>
              <th>Meeting Date</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {forms
              .slice(0)
              .reverse()
              .map((form, index) => (
                <tr>
                  <td>{form.id}</td>
                  <td>{form.mCity}</td>
                  <td>{moment(form.nDate).format("Do MMMM YYYY")}</td>
                  <td>{moment(form.mDate).format("Do MMMM YYYY")}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default SanginiCommitteeMeet;
