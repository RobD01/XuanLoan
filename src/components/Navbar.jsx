import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <>
      <Navbar sticky="top" expand="lg" className="mt-1 mb-4 mx-4 navStyle">
        <Container>
          <Navbar.Brand href="#">XL Fashion</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/#/">Home</Nav.Link>
              <Nav.Link href="/#/aodai">Ao Dai</Nav.Link>
              <Nav.Link href="/#/fabrics">Fabrics</Nav.Link>
              <Nav.Link href="/#/mens">Mens</Nav.Link>
              <Nav.Link href="/#/kids">Kids</Nav.Link>
              <Nav.Link href="/#/products">Products</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
