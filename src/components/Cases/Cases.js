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
    <Container className="my-lg-5 mx-auto pt-lg-5">
      <div className="mb-5">
        <p className="pt-4 lh-1 text-center">
          <small className="text-clr text-capitalize fw-bold">
            cases that we solved
          </small>
        </p>
        <h2 className="header-text fw-bold text-center pb-3">
          We have Solved More Than 90 % Sases Successfully
        </h2>
      </div>
      <div className="">
        <Row xs={1} md={2} lg={4} className="mx-auto g-lg-4">
          {cases.map((cs) => (
            <Case cases={cs} key={cs.id}></Case>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Cases;
