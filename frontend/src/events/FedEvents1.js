import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Form, Button, Container } from "react-bootstrap";
import "./events.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const FedEvents1 = () => {
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
            <Col sm="auto" md="auto" lg="auto" xl="auto">
              <Link to="" className="card_link">
                <div className="cardsX">
                  <div className="card card--1">
                    <div className="card__info-hover"></div>
                    <img className="card__img" src={event.eThumbnail}></img>
                    <img
                      className="card__img--hover"
                      src={event.eThumbnail}
                    ></img>
                    <div className="card__info">
                      <span className="card__category">Federation</span>
                      <h3 className="card__title">{event.eTitle}</h3>
                      <h4 className="card__date">
                        {event.eStartDate} - {event.eEndDate}
                      </h4>
                      <p className="card__text">{event.eDescription}</p>
                    </div>
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

export default FedEvents1;
