import React from "react";
import { Card, Col } from "react-bootstrap";

const Doctor = ({ doctor }) => {
  const { img, name } = doctor;
  return (
    <div>
      <Col>
        <Card className="h-100 mx-auto shadow" style={{ width: "16rem" }}>
          <Card.Img variant="top" src={img} className="img-fluid" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-secondary">
              Clinical Psychologist
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Doctor;
