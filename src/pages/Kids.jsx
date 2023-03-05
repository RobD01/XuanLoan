import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";

const Kids = () => {
  // Images

  const menSuit = [
    [
      "https://images.pexels.com/photos/5520327/pexels-photo-5520327.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Áo dài may sẵn. Quần tay may sẵn. Tắt cả âu phục Nam và Nữ",
    ],
    [
      "https://images.pexels.com/photos/5520289/pexels-photo-5520289.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
    ],
    [
      "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=600",
      "Vãi may đồ Vest. Vãi may quần tay",
    ],
  ];

  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Kids</h2>

      {/* Mens Suits */}
      <h4 className="text-center mt-5">Mens Suits</h4>
      <Container fluid="md" className="mt-4">
        <Row>
          {menSuit.map((item) => (
            <Col key={item} xs={12} md={4}>
              <img src={item[0]} alt={item} className="gridImage" />
              <p className="gridText">{item[1]}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Kids;
