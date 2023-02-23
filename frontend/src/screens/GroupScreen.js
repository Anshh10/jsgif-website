import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import "./RegionScreen.css";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";

const GroupScreen = () => {
  const [users, setUsers] = useState("");
  const [events, setEvents] = useState([]);
  const url = useParams();

  const fetchForms = async () => {
    const response = await axios.get(
      `/api/forms/group/grp-form-b/madras-main/`
    );

    console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchForms();
  }, [url.grpName]);

  const fetchEvents = async () => {
    const response2 = await axios.get(`/api/grp/events-list/${url.grpName}/`);

    console.log(response2.data);
    setEvents(response2.data);
  };

  useEffect(() => {
    fetchEvents();
  }, [url.grpName]);

  return (
    <div>
      <Row>
        <h1 className="regName">{url.grpName} Region</h1>
      </Row>
      <Row>
        <h2 className="regHead">Committee Members:</h2>
      </Row>
      <Row>
        {users.presName !== null || "" ? (
          <Col
            style={{ margin: "1em 1em", width: "250px" }}
            sm="auto"
            md="auto"
            lg="auto"
            xl="auto"
          >
            <div className="flip">
              <Card className="front">
                <Row
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                >
                  <Card.Img
                    className="cardImage1"
                    src={users.immFormerPresPhoto}
                  ></Card.Img>
                </Row>
                <Row>
                  <h2 className="userPost">President</h2>
                </Row>
                <Row>
                  <h3 className="userName">{users.presName}</h3>
                </Row>
              </Card>
              <Card className="back">
                <h2 className="userName1">{users.presName}</h2>
                <p className="userInfo2">
                  <span className="infoHead">Region : </span>
                  {users.regName} Region
                </p>
                <p className="userInfo1">
                  <span className="infoHead">Group : </span> {users.grpName}
                </p>

                <p className="userInfoEmail">
                  <span className="infoHead">Email : </span> {users.presEmail}
                </p>
                <p className="userInfo1">
                  <span className="infoHead">Contact Number : </span>
                  {users.presMobileNumber}
                </p>
                <p className="userInfo1">
                  <span className="infoHead">Whatsapp Number : </span>
                  {users.presWhatsappNumber}
                </p>
                <p className="userInfo1">
                  <span className="infoHead">Address : </span>{" "}
                  {users.presaddress}
                </p>
              </Card>
            </div>
          </Col>
        ) : (
          <></>
        )}
      </Row>

      <Row>
        <h2 className="regHead">{url.grpName} Group Events:</h2>
      </Row>
      <Row>
        {events.map((event, index) => (
          <Col
            style={{ margin: "1em 0" }}
            sm="auto"
            md="auto"
            lg="auto"
            xl="auto"
            key="{event.id}"
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
                        {event.region}
                      </span>
                      <h3 className="customCard1__title">{event.eTitle}</h3>
                      <h4 className="customCard1__date">
                        {event.eStartDate} - {event.eEndDate}
                      </h4>
                      <p className="customCard1__text">{event.eDescription}</p>
                    </div>
                  </Row>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default GroupScreen;
