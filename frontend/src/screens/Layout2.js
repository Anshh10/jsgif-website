import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import JsgNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import FOG from "vanta/dist/vanta.fog.min";

const Layout2 = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          highlightColor: 0xefff00,
          midtoneColor: 0xefff00,
          lowlightColor: 0xefff00,
          blurFactor: 0.42,
          speed: 0.7,
          zoom: 0.6,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div>
      <JsgNavbar />
      <div>
        <div className="layout" ref={myRef}>
          <Container
            style={{
              minHeight: "100vh",
              paddingBottom: "2em",
              paddingTop: "9em",
            }}
          >
            <Outlet />
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout2;
