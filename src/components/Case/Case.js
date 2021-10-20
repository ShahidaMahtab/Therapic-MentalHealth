import React from "react";
import { Card, Col } from "react-bootstrap";

const Case = ({ cases }) => {
  const { title, img, desc } = cases;
  return (
    <div>
      <Col>
        <Card className="border border-0 mx-auto" style={{ width: "16rem" }}>
          <div className="btn-clr w-25 ms-3 rounded">
            <img src={img} alt="" className="img-fluid py-1 ps-3" />
          </div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="text-secondary text-wrap">{desc}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Case;
