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
import { useSelector } from "react-redux";
import moment from "moment";
import "../formsList.css";

import axios from "axios";
import SecurePageSection from "../../SecurePageSection";
import { LinkContainer } from "react-router-bootstrap";

const GroupFormA = () => {
  const user = useSelector((state) => state.authentication.user);
  const [forms, setForms] = useState([]);
  const [gName, setGName] = useState("");

  const fetchForms = async () => {
    const response = await axios.get(
      `/api/forms/${user.jsgGroupName}/grp-form-a/`
    );

    console.log(response.data);
    setForms(response.data);
    setGName(response.data[0].gName);
  };

  const navigate = useNavigate();
  const newForm = () => {
    navigate("/form/grp-form-a");
  };

  useEffect(() => {
    fetchForms();
  }, []);

  return (
    <div>
      <SecurePageSection accessableUsers={"admin, grp"} />
      <Container className="body">
        <Row style={{ marginBottom: "1em" }}>
          <Col xs={10}>
            <h2>Previous {gName} Forms </h2>
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
              <th>Id</th>
              <th>Group Name</th>
              <th>Old Dues</th>
              <th>Amount Payable</th>
              <th>Amount Paid</th>
              <th>Current Dues</th>
              <th>Publish Date</th>
              <th>Form</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {forms
              .slice(0)
              .reverse()
              .map((form, index) => (
                <tr key={form.id}>
                  <td>{form.id}</td>
                  <td>{form.grpName}</td>
                  <td>{form.oldDuepayable}</td>
                  <td>{form.totalAmtPayable}</td>
                  <td>{form.amtPaid}</td>
                  <td>{form.newDuepayable}</td>
                  <td>{form.chequedate}</td>
                  <td style={{ width: "20rem" }}>
                    <Row>
                      <Col>
                        <div style={{ textAlign: "center" }}>
                          <LinkContainer to={`/grp-form-a-response/${form.id}`}>
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
                                  to={`/form/grp-form-a/${form.id}/edit`}
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

export default GroupFormA;
