import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { Row, Col, Container, Card, ListGroup } from "react-bootstrap";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import axios from "axios";

const HeroSection2 = () => {
  const [info, setInfos] = useState([]);
  const user = useSelector((state) => state.authentication.user);

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:8000/user/list/${user.user_id}`
    );
    setInfos(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {(() => {
            if (
              typeof user !== "undefined" &&
              typeof user.username !== "undefined" &&
              user.accessGroup === "admin"
            ) {
              return (
                <Col md={6} xs={12}>
                  <Card className="customCard">
                    <Card.Header className="customHeader">
                      User Profile - "{info.username}"
                    </Card.Header>
                    <Card.Img variant="top" src={info.photo} />
                    <Card.Body>
                      <Card.Title className="customTitle">
                        Name - {info.first_name} {info.last_name}
                      </Card.Title>
                      <Row>
                        <Card.Link
                          className="customLink"
                          href={`mailto:${info.email}`}
                        >
                          Email address: {info.email}
                        </Card.Link>
                      </Row>
                      <Row>
                        <Card.Link
                          className="customLink"
                          href={`tel:+${info.contactNumber}`}
                        >
                          Contact Number: {info.contactNumber}
                        </Card.Link>
                      </Row>
                      <Row>
                        <Card.Link
                          className="customLink"
                          href={`https://wa.me/:${info.contactNumber}`}
                        >
                          Whatsapp Number: {info.whatsappNumber}
                        </Card.Link>
                      </Row>
                    </Card.Body>
                    <ListGroup>
                      <ListGroup.Item className="customItem">
                        Post : {info.postName}
                      </ListGroup.Item>
                      <ListGroup.Item className="customItem">
                        Group Name : {info.jsgGroupName}
                      </ListGroup.Item>
                      <ListGroup.Item className="customItem">
                        Region Name : {info.jsgRegionName}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              );
            } else return <Col></Col>;
          })()}

          <Col md={6} xs={12} className="col-md-auto">
            <div className="hero-text">
              <h1>JSG Int Federation</h1>
              <p>
                Welcome to one of the largest associations of JAINS in the world
              </p>
            </div>
            <div className="hero-btns">
              <Link to="aboutus">
                <Button
                  className="btns"
                  buttonStyle="btn--secondary"
                  buttonSize="btn--large"
                  pagelink={"aboutus"}
                >
                  About us
                </Button>
              </Link>
              <Link to="events">
                <Button
                  className="btns"
                  buttonStyle="btn--primary"
                  buttonSize="btn--large"
                  pagelink={"events"}
                >
                  Latest Events
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection2;
