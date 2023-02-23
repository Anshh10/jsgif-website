import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import JsgNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import ChatBot from "react-simple-chatbot";
import RegionList from "../components/ChatBot/RegionList";

const Layout = () => {
  const [regions, setRegions] = useState([]);
  const [opened, setOpened] = useState(false);

  const toggleFloating = ({ opened }) => {
    setOpened(opened);
  };

  useEffect(() => {
    const fetchRegions = async () => {
      const response = await axios.get("http://localhost:8000/user/region");

      setRegions(response.data);
    };
    fetchRegions();
  }, []);

  return (
    <div>
      <JsgNavbar />
      <div>
        <div className="layout">
          <Container
            style={{
              minHeight: "100vh",
              paddingBottom: "2em",
              paddingTop: "9em",
            }}
          >
            <ChatBot
              floating={true}
              opened={opened}
              toggleFloating={toggleFloating}
              steps={[
                {
                  id: "1",
                  message: "Welcome To JSGIF",
                  trigger: "2",
                },
                {
                  id: "2",
                  options: [
                    {
                      value: 1,
                      label: "Who is the Fedration's President",
                      trigger: "3",
                    },
                    {
                      value: 2,
                      label: "Who is the President of my Region",
                      trigger: "4",
                    },
                    {
                      value: 3,
                      label: "Who is the President of my Group",
                      trigger: "5",
                    },
                  ],
                },
                {
                  id: "3",
                  message: "Amish Doshi amish@vadilaljewels.com",
                  trigger: "2",
                },
                {
                  id: "4",
                  message: "Which Region does your group belong to?",
                  trigger: "5",
                },
                {
                  id: "5",
                  options: [
                    {
                      value: "North",
                      label: "North",
                      trigger: "6",
                    },
                    {
                      value: "South",
                      label: "South",
                      trigger: "6",
                    },
                    {
                      value: "Maharashtra",
                      label: "Maharashtra",
                      trigger: "6",
                    },
                  ],
                },
                {
                  id: "6",
                  message: "What is the name of your group?",
                  trigger: "7",
                },
                {
                  id: "7",
                  options: [
                    {
                      value: "Jaipur",
                      label: "Jaipur",
                      trigger: "6",
                    },
                    {
                      value: "Udaipur",
                      label: "Udaipur",
                      trigger: "6",
                    },
                    {
                      value: "Maharashtra",
                      label: "Maharashtra",
                      trigger: "6",
                    },
                  ],
                },
              ]}
            />
            <Outlet />
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
