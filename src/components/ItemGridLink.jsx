import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import OrderForm from "./OrderForm";

const ItemGridLink = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h4 className="text-center mt-5">{props.title}</h4>
      <Container fluid="md" className="mt-4">
        <Row>
          {props.list.map((item) => (
            <Col key={item.id} xs={12} md={4}>
              <LazyLoadImage
                src={item.image}
                alt={item.id}
                className="gridImage"
                effect="blur"
              />
              <div className="gridText">
                <p>{item.text}</p>
                <p>$ {item.price}</p>

                <Link to={`/${props.section}/${item.id}`}>
                  <div className="d-grid">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="text-center"
                      onClick={() => setShow(true)}
                    >
                      Order
                    </Button>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ItemGridLink;
