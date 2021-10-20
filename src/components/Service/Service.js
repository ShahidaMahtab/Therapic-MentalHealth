import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { img, title, desc, id } = service;
  return (
    <div>
      <Col>
        <Card className="h-100 shadow">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="fw-bold header-text text-wrap text-uppercase">
              {title}
            </Card.Title>
            <Card.Text className="text-center text-secondary text-wrap">
              {desc}
            </Card.Text>
          </Card.Body>
          <Link to={`/service/${id}`}>
            <button className="btn btn-clr text-white mb-3">Read More</button>
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
