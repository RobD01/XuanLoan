import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const ItemGrid = (props) => {
  return (
    <>
      <h4 className="text-center mt-5">{props.title}</h4>
      <Container fluid="md" className="mt-4">
        <Row>
          {props.list.map((item) => (
            <Col key={item} xs={12} md={4}>
              <img src={item[0]} alt={item} className="gridImage" />
              <p className="gridText">{item[1]}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ItemGrid;
