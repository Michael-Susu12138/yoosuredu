import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import { Navbar, Container } from "react-bootstrap";
import Logo from "./NavInner/Logo";
import NavItems from "./NavInner/NavItems";

const Nav = () => {
  return (
    <Navbar bg="light" expand="lg" className="custom-nav">
      <Container fluid>
        <Navbar.Brand href="/" className="brand">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <NavItems />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
