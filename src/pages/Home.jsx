import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/font.css";
import "../style/main.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import { body } from "../services/Home";
import SocialComponent from "../components/Social";

const gridHeight = "250px";

const Home = () => {
  return (
    <div className="container">
      <Navigation />

      {/* Title */}

      <div className="titleImage"></div>
      <div className="titleText">
        <p className="titleHeading">Xuan Loan Fashion</p>
      </div>

      {/* Body */}

      {/* Address, Phone */}

      <Container fluid="md">
        <Row>
          <Col xs={12} md={6}>
            <div className="address">
              <p> Westland Plaza</p>
              <p> 8560 Wesminster Blvd, Westminster, CA</p>
              <p> 714-891-7856</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <iframe
              className="gridImage"
              width="100%"
              height={gridHeight}
              src="https://www.youtube.com/embed/aWIRSRMmdN0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
      </Container>

      {/* Grid 1, images */}
      <ItemGrid list={body} />

      {/* social media */}
      <SocialComponent />
    </div>
  );
};

export default Home;
