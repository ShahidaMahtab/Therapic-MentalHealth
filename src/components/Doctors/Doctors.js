import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctor.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <Container className="my-5 mx-auto text-center pt-5">
      <div>
        <p className="pt-4 lh-1 text-center">
          <small className="text-clr text-capitalize fw-bold">
            Our Counselors
          </small>
        </p>
        <h2 className="fw-bold header-text text-center">
          Meet Our Psychiatrist
        </h2>
      </div>
      <div>
        <Row
          xs={1}
          md={3}
          lg={4}
          className="mb-4 mx-auto ps-4 ps-lg-0 py-lg-5 g-4"
        >
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Doctors;
