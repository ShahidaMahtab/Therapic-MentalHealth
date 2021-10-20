import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import News from "../News/News";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <Container className="mx-auto text-center py-5">
      <div>
        <p className="pt-4 lh-1 text-center">
          <small className="text-clr text-capitalize fw-bold">updates</small>
        </p>
        <h2 className="fw-bold header-text text-center">Our Latest News</h2>
      </div>
      <div className="my-5 mx-auto px-5">
        <Row xs={1} md={2} lg={3} className="mx-auto gy-5">
          {articles.map((article) => (
            <News article={article} key={article.id}></News>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Blog;
