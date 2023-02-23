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
import { useSelector } from "react-redux";

import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";

const RegionAGM = () => {
  const user = useSelector((state) => state.authentication.user);
  const [forms, setForms] = useState([]);

  const fetchForms = async () => {
    const response = await axios.get(
      `/api/forms/reg-agm/${user.jsgRegionName}/`
    );

    console.log(response.data);
    setForms(response.data);
  };

  const navigate = useNavigate();
  const newForm = () => {
    navigate("/form/ragm/");
  };

  useEffect(() => {
    fetchForms();
  }, []);

  return (
    <div>
      <Container className="body">
        <Row style={{ marginBottom: "1em" }}>
          <Col xs={10}>
            {/* <h2>Previous {user.jsgRegionName} Region Forms </h2> */}
          </Col>
          <Col className="d-flex justify-content-end">
            <Button className="btn--primary" onClick={newForm}>
              New Form
            </Button>
          </Col>
        </Row>
        <Table striped bordered>
          <thead className="tableHead">
            <tr>
              <th>S. No.</th>
              <th>Id</th>
              <th>City</th>
              <th>Notice Date</th>
              <th>Meeting Date</th>
              <th>Form</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {forms
              .slice(0)
              .reverse()
              .map((form, index) => (
                <tr key={form.id}>
                  <td>{(index += 1)}</td>
                  <td>{form.id}</td>
                  <td>{form.mCity}</td>
                  <td>{moment(form.nDate).format("Do MMMM YYYY")}</td>
                  <td>{moment(form.mDate).format("Do MMMM YYYY")}</td>
                  <td style={{ width: "20rem" }}>
                    <Row>
                      <Col>
                        <div style={{ textAlign: "center" }}>
                          <LinkContainer to={`/ragm-response/${form.id}`}>
                            <Button variant="light" className="btn--four">
                              View Form
                            </Button>
                          </LinkContainer>
                        </div>
                      </Col>
                      <Col>
                        <div style={{ textAlign: "center" }}>
                          <LinkContainer to={`/form/ragm/${form.id}/edit`}>
                            <Button variant="light" className="btn--four">
                              Edit Form
                            </Button>
                          </LinkContainer>
                        </div>
                      </Col>
                    </Row>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default RegionAGM;
