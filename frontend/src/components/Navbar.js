import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../_actions";
import Images from "../images/index";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";

function JsgNavbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication.user);

  const [regions, setRegions] = useState([]);
  const fetchRegions = async () => {
    const response = await axios.get("http://localhost:8000/user/region");

    setRegions(response.data);
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  const [groups, setGroups] = useState([]);
  const fetchGroups = async () => {
    const response = await axios.get("http://localhost:8000/user/group");

    setGroups(response.data);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const signoutSession = () => {
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");
    dispatch(userActions.login({}));
  };

  const navigate = useNavigate();

  return (
    <div>
      <Navbar
        fixed="top"
        collapseOnSelect
        className="navbarBg"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                alt=""
                src={Images.Logo}
                width="75"
                height="75"
                className="d-inline-block align-top brandImage"
              />{" "}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/aboutus">
                <Nav.Link>About Us</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Federation" id="collasible-nav-dropdown">
                <NavDropdown.Header>Other Links</NavDropdown.Header>

                <LinkContainer to="/fed/events">
                  <NavDropdown.Item>JSGIF Founders</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/fed/events">
                  <NavDropdown.Item>JSGIF Former Presidents</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/fed/ob/23-25">
                  <NavDropdown.Item>JSGIF Office Bearers</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/fed/id/23-25">
                  <NavDropdown.Item>
                    JSGIF International Directors
                  </NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/fed/constitution">
                  <NavDropdown.Item>JSGIF Constitution</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/fed/events">
                  <NavDropdown.Item>Events</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/mangalyatra">
                  <NavDropdown.Item>Mangalyatra</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown title="Region" id="collasible-nav-dropdown">
                <NavDropdown.Header>Regions</NavDropdown.Header>
                {regions.map((region) => (
                  <LinkContainer
                    to={`/region/${region.region}`}
                    key={region.id}
                  >
                    <NavDropdown.Item key={region.id}>
                      {region.region}
                    </NavDropdown.Item>
                  </LinkContainer>
                ))}
              </NavDropdown>

              <NavDropdown title="Forms" id="collasible-nav-dropdown">
                <Row className="customDropdown1 overflow-auto">
                  <Col xs={12} md={6} className="customDropdownItem1">
                    {/* {(() => {
                      if (
                        typeof user !== "undefined" &&
                        typeof user.username !== "undefined" &&
                        (user.accessGroup === "admin" ||
                          user.accessGroup === "fed")
                      ) {
                        return ( */}
                    <div>
                      <NavDropdown.Header>Federation</NavDropdown.Header>
                      <LinkContainer to="/fed-agm">
                        <NavDropdown.Item>AGM</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/fed-ccm">
                        <NavDropdown.Item>CCM</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/fed-idmeet">
                        <NavDropdown.Item>ID Meet</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/fed-obmeet">
                        <NavDropdown.Item>OB Meet</NavDropdown.Item>
                      </LinkContainer>
                    </div>
                    {/* );
                      }
                    })()} */}
                  </Col>
                  <Col xs={12} md={6}>
                    {/* {(() => {
                      if (
                        typeof user !== "undefined" &&
                        typeof user.username !== "undefined" &&
                        user.accessGroup === "admin"
                      ) {
                        return ( */}
                    <div>
                      <NavDropdown.Header>Region</NavDropdown.Header>
                      <LinkContainer to="/reg-agm">
                        <NavDropdown.Item>AGM</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to="/reg-obmeet">
                        <NavDropdown.Item>OB Meet</NavDropdown.Item>
                      </LinkContainer>

                      <LinkContainer to="/reg-committee-meet">
                        <NavDropdown.Item>Committee Meet</NavDropdown.Item>
                      </LinkContainer>
                    </div>
                    {/* );
                      }
                    })()} */}
                  </Col>
                </Row>
                <Row className="customDropdown2">
                  <Col xs={12} md={6} className="customDropdownItem1">
                    {/* {(() => {
                      if (
                        typeof user !== "undefined" &&
                        typeof user.username !== "undefined" &&
                        user.accessGroup === "admin"
                      ) {
                        return ( */}
                    <div>
                      <NavDropdown.Header>Group</NavDropdown.Header>
                      <LinkContainer to="/grpagm">
                        <NavDropdown.Item>AGM</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/grpegm">
                        <NavDropdown.Item>EGM</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/grpcommitteemeet">
                        <NavDropdown.Item>Committee Meet</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/grp-forum-registraion">
                        <NavDropdown.Item>Group Registration</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/grp-membership-form">
                        <NavDropdown.Item>Membership Form</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/grp-form-a">
                        <NavDropdown.Item>Form A</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/form/grp-form-b">
                        <NavDropdown.Item>Form B</NavDropdown.Item>
                      </LinkContainer>
                    </div>
                    {/* );
                      }
                    })()} */}
                  </Col>
                  <Col xs={12} md={6}>
                    {/* {(() => {
                      if (
                        typeof user !== "undefined" &&
                        typeof user.username !== "undefined" &&
                        user.accessGroup === "admin"
                      ) {
                        return ( */}
                    <div>
                      <NavDropdown.Header>Sangini</NavDropdown.Header>
                      <LinkContainer to="/sgn-committee-meet">
                        <NavDropdown.Item>Committee Meet</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/sgn-forum-registraion">
                        <NavDropdown.Item>Forum Registraion</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/sgn-membership-form">
                        <NavDropdown.Item>Membership Form</NavDropdown.Item>
                      </LinkContainer>
                    </div>
                    {/* );
                      }
                    })()} */}
                  </Col>
                </Row>
              </NavDropdown>
              <NavDropdown title="Sangini" id="collasible-nav-dropdown">
                <NavDropdown.Header>Other Links</NavDropdown.Header>
                <NavDropdown.Item href="">Committee Members</NavDropdown.Item>
              </NavDropdown>
              {(() => {
                if (
                  typeof user !== "undefined" &&
                  typeof user.username !== "undefined" &&
                  user.accessGroup === "admin"
                ) {
                  return (
                    <LinkContainer to="/forms">
                      <Nav.Link href="/forms">Forms</Nav.Link>
                    </LinkContainer>
                  );
                }
              })()}
              {(() => {
                if (
                  typeof user !== "undefined" &&
                  typeof user.username !== "undefined"
                ) {
                  return (
                    <LinkContainer to="/">
                      <Nav.Link onClick={signoutSession}>Sign Out</Nav.Link>
                    </LinkContainer>
                  );
                } else
                  return (
                    <LinkContainer to="/login">
                      <Nav.Link>Sign In</Nav.Link>
                    </LinkContainer>
                  );
              })()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default JsgNavbar;
