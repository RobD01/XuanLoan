import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import Navigation from "../components/Navbar";

// Styles

const titleImageUrl =
  "https://images.pexels.com/photos/1789925/pexels-photo-1789925.jpeg?auto=compress&cs=tinysrgb&w=600";

const titleImage = {
  backgroundImage: `url(${titleImageUrl})`,
  backgroundColor: "coral",
  width: "100%",
  height: "300px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  filter: "blur(2px)",
  // -webkit-filter: blur(8px);
};

const Titletext = {
  backgroundColor: "rgba(0,0,0, 0.4)" /* Black w/opacity/see-through */,
  color: "white",
  fontWeight: "bold",
  border: "3px solid #f1f1f1",
  position: "relative",
  transform: "translate(50%, -150%)",
  width: "50%",
  padding: "20px",
  textAlign: "center",
  fontSize: "5vw",
  fontFamily: "Tangerine",
};

const gridHeight = "300px";

const address = {
  backgroundColor: "rgba(150,150,150, 0.1)" /* Black w/opacity/see-through */,
  border: "3px solid #f1f1f1",
  paddingTop: "10%",
  textAlign: "center",
  fontSize: "1.5rem",
  height: gridHeight,
};

const gridText = {
  // background: "linear-gradient(0.15turn, #ff9966,#ff5e62)",
  backgroundColor: "rgba(150,150,150, 0.1)" /* Black w/opacity/see-through */,
  // color: "white",
  // fontWeight: "bold",
  border: "3px solid #f1f1f1",
  textAlign: "center",
  fontSize: "1.5rem",
  height: "150px",
  padding: "2%",
  marginTop: "0.5rem",
  marginBottom: "1rem",
};

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

// Text
// const grid2 = [
//   "Áo dài may sẵn. Quần tay may sẵn",
//   "Tắt cả âu phục",
//   "Nam và Nữ",
// ];

const grid3 = ["", "", "", ""];

const Home = () => {
  return (
    <div className="container">
      <Navigation />

      {/* Title */}

      <div style={titleImage}></div>
      <h2 style={Titletext}>XL Fashion</h2>

      {/* Body */}

      {/* Address, Phone */}

      <Container fluid="md">
        <Row>
          <Col xs={12} md={6}>
            <div style={address}>
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
              <img src={item[0]} alt={item} width="100%" />
              <p style={gridText}>{item[1]}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Grid 3, text */}
      <Container fluid="md" className="mt-4">
        <Row>
          {grid3.map((item) => (
            <Col key={item} xs={12} md={4} style={gridText}>
              <p>{item}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
