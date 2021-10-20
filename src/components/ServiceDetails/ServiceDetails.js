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
  return (
    <Container className="mt-5 h-100">
      <h2 className="pt-5 header-text fw-bold text-center mb-5 text-uppercase">
        {matchedId?.title}
      </h2>
      <div className="d-flex justify-content-center">
        <img src={matchedId?.img} alt="" className="img-fluid" />
      </div>
      <p className="p-0 m-0 text-center">
        <small>{matchedId?.title} treatment</small>
      </p>
      <div className="mt-5">
        <h2 className="text-dark text-center text-lg-start">
          What is {matchedId?.title} ?
        </h2>
        <p className="my-lg-4 text-wrap">{matchedId?.def}</p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="">
          <h2 className="text-dark text-center text-lg-start ">Causes:</h2>
          <p className="my-lg-4 text-wrap"> {matchedId?.causes}</p>
          <h2 className="text-dark  text-center text-lg-start">Treatment:</h2>
          <p className="my-lg-4 text-wrap"> {matchedId?.treatment}</p>
        </div>
      </div>
    </Container>
  );
};

export default ServiceDetails;
