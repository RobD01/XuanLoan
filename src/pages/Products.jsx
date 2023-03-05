import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/font.css";
import "../style/main.css";

const Products = () => {
  // Images

  const products = [
    [
      "https://m.media-amazon.com/images/I/81X1biOsyAL.jpg",
      "Áo dài may sẵn. Quần tay may sẵn. Tắt cả âu phục Nam và Nữ",
    ],
    [
      "https://cdn.shopify.com/s/files/1/0071/9663/9302/collections/yezi-tea-raw-yunnan-puerh-cake-with-knife_1024x1024_b21d73a9-a0ee-4b48-9b67-5e81d3f15c9d_1600x.jpg?v=1554701325",
      "Đầy đũ vãi may quần áo Đàn Ba và Đàn Ông. Vãi may áo dài",
    ],
    [
      "https://i5.walmartimages.com/asr/10e7ac54-034a-4d23-8091-ebed9d13b6c0.5a678cd7e36190797a0621dc66b67d4a.jpeg",
      "Vãi may đồ Vest. Vãi may quần tay",
    ],
  ];

  return (
    <div className="container">
      <Navigation />
      <h2 className="text-center">Products</h2>

      {/* Mens Suits */}
      <Container fluid="md" className="mt-4">
        <Row>
          {products.map((item) => (
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

export default Products;
