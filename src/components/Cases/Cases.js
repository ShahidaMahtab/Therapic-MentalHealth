import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import icon from "../../images/medical.png";
import Case from "../Case/Case";
const Cases = () => {
  const [cases, setCases] = useState([]);
  useEffect(() => {
    fetch("cases.json")
      .then((res) => res.json())
      .then((data) => setCases(data));
  }, []);
  return (
    <Container className="mb-5 px-4 mx-auto">
      <div className="mb-5">
        <h2 className="header-text fw-bold text-center">
          We have solved More than 90 % cases Successfully
        </h2>
      </div>
      <div className="">
        <Row xs={1} md={2} lg={4} className="my-4 mx-auto">
          {cases.map((cs) => (
            <Case cases={cs} key={cs.id}></Case>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Cases;
