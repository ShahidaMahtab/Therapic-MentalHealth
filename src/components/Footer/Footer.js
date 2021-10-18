import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
library.add(fab, faFacebook, faGithub, faLinkedin);
const Footer = () => {
  const brainIcon = <FontAwesomeIcon icon={faBrain} className="text-white" />;
  return (
    <section className="bg-dark mt-5 p-2 w-100">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="p-4 mt-0">
            <div>
              <h3 className="fs-3 fw-bold text-white mb-0 pt-0">
                {brainIcon} Therapica
              </h3>
              <p className="p-0 m-0 fs-6 text-white">
                <small className="d-none d-lg-block">
                  we provide the best medical treatment to our patients <br />
                  we have experienced Psychatrists, we value your privacy.
                </small>
              </p>
            </div>
          </Navbar.Brand>
          <Nav className="d-flex flex-row flex-lg-none text-white justify-content-center me-lg-auto ms-5 ms-md-0 ps-md-3">
            <div>
              <Nav.Link href="#home" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Service
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                About
              </Nav.Link>
            </div>
            <div>
              <Nav.Link href="#home" className="text-light">
                Counselors
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Psychatrist
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Doctors
              </Nav.Link>
            </div>
            <div>
              <Nav.Link href="#home" className="text-light">
                Medical
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Treatment
              </Nav.Link>
              <Nav.Link href="#link" className="text-light">
                Hospital
              </Nav.Link>
            </div>
          </Nav>
          <div className="text-white me-md-auto mx-auto mt-3 mt-md-0 pe-5 pe-lg-0 text-start">
            <h3>Contact</h3>
            <p>
              <small>therapicCare@gmail.com</small>
              <br />
              +88017780409 <br />
              +88017430459
            </p>
            <span className="mt-0  pt-0">
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                className="text-white fs-5 ms-2 "
              />
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className="text-white fs-5 ms-2 "
              />
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="text-white fs-5 ms-2 "
              />
            </span>
          </div>
        </Container>
      </Navbar>
      <p className="bg-dark text-white text-center">
        <small>&copy;2021 Therapic. ALL RIGHTS RESERVED.</small>
      </p>
    </section>
  );
};

export default Footer;