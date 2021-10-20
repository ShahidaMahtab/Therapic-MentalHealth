import React from "react";
import { Card, CarouselItem, Col, Nav } from "react-bootstrap";

const News = ({ article }) => {
  const { img, title, date } = article;
  return (
    <div>
      <Col>
        <Card className="h-100 shadow-lg">
          <Card.Img variant="top" src={img} className="img-fluid" />
          <Card.Body>
            <Card.Text className="text-secondary text-success fw-bold my-0">
              Mental Health News
            </Card.Text>
            <Card.Title className="text-wrap fw-bold">{title}</Card.Title>
            <Card.Text href="#blog" className="text-secondary px-0 mx-0">
              <span className="me-4 text-dark">{date}</span>
              <span className="text-secondary"> Read More &gt;&gt;</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default News;
