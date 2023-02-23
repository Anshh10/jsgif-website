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

const RegionScreen = () => {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [groups, setGroups] = useState([]);
  const url = useParams();

  const fetchUsers = async () => {
    const usersResponse = await axios.get(
      `http://localhost:8000/user/region/${url.regName}/True`
    );

    console.log(usersResponse.data);
    setUsers(usersResponse.data);
  };

  const fetchEvents = async () => {
    const eventsResponse = await axios.get(
      `http://localhost:8000/api/reg/events-list/${url.regName}`
    );
    console.log(eventsResponse.data);
    setEvents(eventsResponse.data);
  };

  const fetchGroups = async () => {
    const groupsResponse = await axios.get(
      `http://localhost:8000/user/${url.regName}/groups`
    );

    console.log(groupsResponse.data);
    setGroups(groupsResponse.data);
  };

  useEffect(() => {
    fetchUsers();
    fetchEvents();
    fetchGroups();
  }, [url.regName]);

  return (
    <div>
      <Row>
        <h1 className="regName">{url.regName} Region</h1>
      </Row>
      <Row>
        <h2 className="regHead">Team:</h2>
      </Row>
      <Row>
        {users.map((user) => (
          <Col
            style={{ margin: "1em 1em", width: "250px" }}
            sm="auto"
            md="auto"
            lg="auto"
            xl="auto"
            key={user.id}
          >
            <div className="flip">
              <Card className="front">
                <Row
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                >
                  <Card.Img className="cardImage1" src={user.img}></Card.Img>
                </Row>
                <Row>
                  <h2 className="userPost">{user.post}</h2>
                </Row>
                <Row>
                  <h3 className="userName">
                    {user.first_name} {user.last_name}
                  </h3>
                </Row>
              </Card>
              <Card className="back">
                <h2 className="userName1">
                  {user.first_name} {user.last_name}
                </h2>
                <p className="userInfo2">
                  <span className="infoHead">Region : </span>
                  {user.jsgRegionName} Region
                </p>
                <p className="userInfo1">
                  <span className="infoHead">Group : </span> {user.jsgGroupName}
                </p>

                <p className="userInfoEmail">
                  <span className="infoHead">Email : </span> {user.email}
                </p>
                <p className="userInfo1">
                  <span className="infoHead">Contact Number : </span>
                  {user.contactNumber}
                </p>
                <p className="userInfo1">
                  <span className="infoHead">Whatsapp Number : </span>
                  {user.whatsappNumber}
                </p>
                <p className="userInfo1">
                  <span className="infoHead">Address : </span> {user.address}
                </p>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        <h2 className="regHead">Groupwise List:</h2>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead className="tableHead">
            <tr>
              <th>S. No.</th>
              <th>Group Id</th>
              <th>Group Name</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }} className="tableBody">
            {groups.map((group, index) => (
              <LinkContainer to={`/group/${group.groupLink}`}>
                <tr key={group.id}>
                  <td>{(index += 1)}</td>
                  <td>{group.id}</td>
                  <td>{group.group}</td>
                  <td style={{ textTransform: "Capitalize" }}>
                    {group.region}
                  </td>
                </tr>
              </LinkContainer>
            ))}
          </tbody>
        </Table>
      </Row>
      <Row>
        <h2 className="regHead">{url.regName} Region Events:</h2>
      </Row>
      <Row>
        {events.map((event, index) => (
          <Col
            style={{ margin: "1em 0" }}
            sm="auto"
            md="auto"
            lg="auto"
            xl="auto"
            key={event.id}
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

export default RegionScreen;
