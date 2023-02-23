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
import SecurePageSection from "../../SecurePageSection";
import { LinkContainer } from "react-router-bootstrap";

const FedCCM = () => {
  const user = useSelector((state) => state.authentication.user);
  const [forms, setForms] = useState([]);

  const fetchForms = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/forms/federation/fed-ccm/"
    );

    console.log(response.data);
    setForms(response.data);
  };

  const navigate = useNavigate();
  const newForm = () => {
    navigate("/form/fed-ccm");
  };

  useEffect(() => {
    fetchForms();
  }, []);

  return (
    <div>
      <SecurePageSection accessableUsers={"admin"} />
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
              <th>Form</th>
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
                  <td style={{ width: "20rem" }}>
                    <Row>
                      <Col>
                        <div style={{ textAlign: "center" }}>
                          <LinkContainer
                            to={`/grpcommitteemeet-response/${form.id}`}
                          >
                            <Button variant="light" className="btn--four">
                              View Form
                            </Button>
                          </LinkContainer>
                        </div>
                      </Col>
                      {(() => {
                        if (form.user === user.user_id) {
                          return (
                            <Col>
                              <div style={{ textAlign: "center" }}>
                                <LinkContainer
                                  to={`/form/grpcommitteemeet/${form.id}/edit`}
                                >
                                  <Button variant="light" className="btn--four">
                                    Edit Form
                                  </Button>
                                </LinkContainer>
                              </div>
                            </Col>
                          );
                        }
                      })()}
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

export default FedCCM;
