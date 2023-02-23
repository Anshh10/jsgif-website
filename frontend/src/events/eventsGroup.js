import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Form, Button, Container } from "react-bootstrap";
import "./events.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const EventUploadGroup = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/events/group/add-event/"
    );

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
              <Card className="cardsX">
                <Card.Img
                  className="card__image"
                  variant="bottom"
                  src={event.eThumbnail}
                />
                <Card.Body className="card__overlay">
                  <div className="card__header">
                    <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                      <path />
                    </svg>
                    <Card.Title className="card__title">
                      <h3>{event.eTitle}</h3>
                    </Card.Title>

                    <Card.Subtitle className="card__status">
                      <p>{event.grpName}</p>
                    </Card.Subtitle>
                    <Card.Text className="card__date">
                      <p>
                        {event.eStartDate} -{event.eEndDate}
                      </p>
                    </Card.Text>
                  </div>
                  <Card.Text>
                    <p className="card__description">{event.eDescription}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default EventUploadGroup;
