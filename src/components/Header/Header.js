import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
const Header = () => {
  const brainIcon = <FontAwesomeIcon icon={faBrain} className="text-danger" />;
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
      >
        <Container>
        <Navbar.Brand href="#home">
          <h3 className="fs-3 fw-bold header-text"> {brainIcon} Therapica</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="text-decoration-none">
              <h5 className="fs-5 me-3 header-text fw-bold">Home</h5>
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-decoration-none">
              <h5 className="fs-5 me-3 header-text fw-bold">About</h5>
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-decoration-none">
              <h5 className="fs-5 me-3 header-text fw-bold">Services</h5>
            </Nav.Link>
            <Nav.Link as={Link} to="/doctors" className="text-decoration-none">
              <h5 className="fs-5 me-3 header-text fw-bold">Doctors</h5>
            </Nav.Link>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
