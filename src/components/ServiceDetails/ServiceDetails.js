import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { serviceid } = useParams();
  const [serviceDetail, setServiceDetail] = useState([]);
  useEffect(() => {
    fetch("/servicedetail.json")
      .then((res) => res.json())
      .then((data) => setServiceDetail(data));
  }, []);
  const matchedId = serviceDetail.find(
    (service) => service.id === parseInt(serviceid)
  );
  console.log(matchedId);
  return (
    <Container className="mt-5">
      <div className="pt-5">
        <h2 className="header-text text-center fw-bold">
          What is {matchedId?.title} ?
        </h2>
        <p className="text-dark text-center my-4">{matchedId?.def}</p>
      </div>
      <div className="d-lg-flex justify-content-center">
        <div className="pe-5">
          <h2 className="header-text fw-bold">Causes:</h2>
          <p> {matchedId?.causes}</p>
          <br />
          <br />
          <h2 className="header-text fw-bold">Treatment:</h2>
          {matchedId?.treatment}
        </div>
        <div className="ps-5 pt-5">
          <img src={matchedId?.img} alt="" />
          <p className="text-center">
            <small>{matchedId?.title} treatment</small>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ServiceDetails;
