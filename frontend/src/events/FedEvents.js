import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "./events.css";

import axios from "axios";

const FedEvents = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const response = await axios.get("http://localhost:8000/api/fed/events/");

    console.log(response.data);
    setEvents(response.data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <Container className="body">
        <Row>
          {events.map((event, index) => (
            <Col
              style={{ marginBottom: "2em" }}
              sm="auto"
              md="auto"
              lg="auto"
              xl="auto"
            >
              <Link to="" className="customCard1_link">
                <div className="cardsX">
                  <div className="customCard1 customCard1--1">
                    <div className="customCard1__info-hover"></div>
                    <Row className="customRow">
                      <img
                        className="customCard1__img"
                        src={event.eThumbnail}
                      ></img>
                      <img
                        className="customCard1__img--hover"
                        src={event.eThumbnail}
                      ></img>
                    </Row>
                    <Row className="customRow">
                      <div className="customCard1__info">
                        <span className="customCard1__category">
                          Federation
                        </span>
                        <h3 className="customCard1__title">{event.eTitle}</h3>
                        <h4 className="customCard1__date">
                          {event.eStartDate} - {event.eEndDate}
                        </h4>
                        <p className="customCard1__text">
                          {event.eDescription}
                        </p>
                      </div>
                    </Row>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FedEvents;
