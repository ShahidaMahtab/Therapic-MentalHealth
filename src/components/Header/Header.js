import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import useAuth from "../../hooks/useAuth";
const Header = () => {
  const { user, logOut } = useAuth();
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
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link as={Link} to="/home" className="text-decoration-none">
                <h5 className="fs-5 me-3 header-text fw-bold">Home</h5>
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-decoration-none">
                <h5 className="fs-5 me-3 header-text fw-bold">About</h5>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/services"
                className="text-decoration-none"
              >
                <h5 className="fs-5 me-3 header-text fw-bold">Services</h5>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/doctors"
                className="text-decoration-none"
              >
                <h5 className="fs-5 me-3 header-text fw-bold">Doctors</h5>
              </Nav.Link>
              <Nav.Link as={Link} to="/blog" className="text-decoration-none">
                <h5 className="fs-5 me-3 header-text fw-bold">Blog</h5>
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/register"
                className="text-decoration-none"
              >
                <h5 className="fs-5 me-3 header-text fw-bold">Signup</h5>
              </Nav.Link>
              {user?.email ? (
                <button
                  onClick={logOut}
                  className="border border-0 rounded py-1 header-btn d-block mb-1  me-3"
                >
                  <span className="text-white"> logout</span>
                </button>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="text-decoration-none"
                >
                  <h5 className="fs-5 me-3 header-text fw-bold">Login</h5>
                </Nav.Link>
              )}
              {user.email && (
                <Navbar.Text className="text-center">
                  <span className="header-text ">
                    Signed in as : {user.displayName || user.email}
                  </span>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
