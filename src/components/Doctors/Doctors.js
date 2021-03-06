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
    <Container className="my-5 mx-auto text-center py-5">
      <div className="pb-5">
        <p className="lh-1 text-center">
          <small className="text-clr text-capitalize fw-bold">
            Our Counselors
          </small>
        </p>
        <h2 className="fw-bold header-text text-center">
          Meet Our Psychiatrist Team
        </h2>
      </div>
      <div>
        <Row xs={1} md={3} lg={4} className="mb-4 mx-auto g-4">
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Doctors;
