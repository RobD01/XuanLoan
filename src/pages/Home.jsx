import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";
import Navigation from "../components/Navbar";

const gridHeight = "250px";

// Grid

// Images
const grid1 = [
  [
    "https://images.pexels.com/photos/15587185/pexels-photo-15587185.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Áo dài may sẵn. Quần tay may sẵn. Tắt cả âu phục Nam và Nữ",
  ],
  [
    "https://images.pexels.com/photos/15570650/pexels-photo-15570650.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
  ],
  [
    "https://images.pexels.com/photos/15587226/pexels-photo-15587226.jpeg?auto=compress&cs=tinysrgb&w=600",
    "Vãi may đồ Vest. Vãi may quần tay",
  ],
];

const socialLink = [
  [
    "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    "https://www.youtube.com/watch?v=aWIRSRMmdN0",
  ],
  [
    "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png",
    "https://www.instagram.com/xuanloanfabrics/",
  ],
];

const Home = () => {
  return (
    <div className="container">
      <Navigation />

      {/* Title */}

      <div className="titleImage"></div>
      <h2 className="titleText">XL Fashion</h2>

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
      <Container fluid="md" className="mt-4">
        <Row>
          {grid1.map((item) => (
            <Col key={item} xs={12} md={4}>
              <img src={item[0]} alt={item} className="gridImage" />
              <p className="gridText">{item[1]}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* social media */}
      <div class="d-flex justify-content-center">
        {socialLink.map((item) => (
          <a
            href={item[1]}
            target="_blank"
            rel="noreferrer"
            className="flexItem"
          >
            <img src={item[0]} alt={item} width="100%" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
