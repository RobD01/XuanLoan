import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ItemGrid = (props) => {
  return (
    <>
      <h4 className="text-center mt-3">{props.title}</h4>
      <Container fluid="md" className="mt-2">
        <Row>
          {props.list.map((item) => (
            <Col key={item.id} xs={12} md={4} className="mb-3">
              <LazyLoadImage
                src={item.image}
                alt={item.id}
                className="gridImage"
                effect="blur"
              />
              {item.text ? (
                <div className="gridText">
                  <p>{item.text}</p>
                </div>
              ) : null}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ItemGrid;
