import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mt-1 mb-4 mx-auto">
        <Container>
          <Navbar.Brand href="#">XL Fashion</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/XuanLoan/#/">Home</Nav.Link>
              <Nav.Link href="/XuanLoan/#/aodai">Ao Dai</Nav.Link>
              <Nav.Link href="/XuanLoan/#/fabrics">Fabrics</Nav.Link>
              <Nav.Link href="/XuanLoan/#/mens">Mens</Nav.Link>
              <Nav.Link href="/XuanLoan/#/kids">Kids</Nav.Link>
              <Nav.Link href="/XuanLoan/#/products">Products</Nav.Link>
              <Nav.Link href="/XuanLoan/#/social">Social</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
