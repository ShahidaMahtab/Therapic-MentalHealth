import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Case from "../Case/Case";
const Cases = () => {
  const [cases, setCases] = useState([]);
  useEffect(() => {
    fetch("cases.json")
      .then((res) => res.json())
      .then((data) => setCases(data));
  }, []);
  return (
    <Container className="mx-auto pt-lg-5">
      <div className="mb-5">
        <h2 className="header-text fw-bold text-center pb-3">
          We have Solved More Than 90% Cases Successfully
        </h2>
      </div>
      <div className="mx-auto">
        <Row xs={1} md={2} lg={4} className="mx-auto">
          {cases.map((cs) => (
            <Case cases={cs} key={cs.id}></Case>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Cases;
