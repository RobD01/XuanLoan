import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/font.css";
import "../style/main.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";

// images
import image3 from "../images/ao-dai/3.jpg";
import image5 from "../images/ao-dai/5.jpg";
import image7 from "../images/ao-dai/7.jpg";
import suit3 from "../images/mens-suit/3.jpg";

const gridHeight = "250px";

// Grid

// Images
const body = [
  [
    image3,
    "Áo dài may sẵn. Quần tây may sẵn. Tắt cả âu phục Nam và Nữ. Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài. Vãi may đồ Vest. Vãi may quần tay",
  ],
  [
    image5,
    `Quality fabrics and stylish clothing perfect
     for creating a casual or traditional look! Our 
     selection includes Ao Dai, Velvet, Cathay, Cotton, Polyester, and more.`,
  ],
  [
    suit3,
    `High-quality men's suits for all occasions. 
    Attending a wedding, an important job interview, 
    we've got you covered. Different colors and styles 
    to match your personal taste and style.`,
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
