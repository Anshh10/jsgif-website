import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { Row, Col, Container, Card, ListGroup } from "react-bootstrap";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import axios from "axios";

const HeroSection = () => {
  const [info, setInfos] = useState([]);
  const user = useSelector((state) => state.authentication.user);

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:8000/user/user/${user.user_id}`
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
                    <div className="customCardImg">
                      <img src={info.img} />
                    </div>
                    <Card.Body>
                      <Card.Title className="customTitle">
                        {info.first_name} {info.last_name}
                      </Card.Title>
                      <Row>
                        <Card.Text
                          className="customLink"
                          href={`mailto:${info.email}`}
                        >
                          <i className="fa-solid fa-envelope"></i> :{" "}
                          {info.email}
                        </Card.Text>
                      </Row>
                      <Row>
                        <Card.Text
                          className="customLink"
                          href={`tel:+${info.contactNumber}`}
                        >
                          <i className="fa-solid fa-mobile-button"></i> :{" "}
                          {info.contactNumber}
                        </Card.Text>
                      </Row>
                      <Row>
                        <Card.Text
                          className="customLink"
                          href={`https://wa.me/:${info.contactNumber}`}
                        >
                          <i className="fa-brands fa-whatsapp"></i> :{" "}
                          {info.whatsappNumber}
                        </Card.Text>
                      </Row>
                      <Row>
                        <Card.Text className="customLink2" href={``}>
                          Edit Profile
                        </Card.Text>
                      </Row>
                    </Card.Body>
                    <ListGroup>
                      <ListGroup.Item className="customItem">
                        Post : {info.post}
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

export default HeroSection;
