import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container className="mx-auto text-center pb-5">
      <div className="py-5">
        <p className="lh-1 pt-4">
          <small className="text-clr text-capitalize fw-bold">
            peace of mind
          </small>
        </p>
        <h2 className="fw-bold header-text">Popular Psychological Services</h2>
      </div>
      <div>
        <Row xs={1} md={2} lg={3} className="mx-auto g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Services;
