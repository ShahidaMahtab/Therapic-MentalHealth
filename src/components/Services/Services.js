import React from "react";
import { Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <Container className="my-5 mx-auto text-center">
      <div>
        <p className="pt-4 lh-1">
          <small className="text-clr text-capitalize fw-bold">
            peace of mind
          </small>
        </p>
        <h2 className="fw-bold header-text">Popular Psychological Services</h2>
      </div>
      <div>
        <Row xs={1} md={2} lg={3} className="my-4 mx-auto">
         
        </Row>
      </div>
    </Container>
  );
};

export default Services;
