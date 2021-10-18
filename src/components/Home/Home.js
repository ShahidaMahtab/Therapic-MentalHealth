import React from "react";
import banner from "../../images/Banner/background.png";
import About from "../About/About";
import Cases from "../Cases/Cases";
import Doctors from "../Doctors/Doctors";
const Home = () => {
  return (
    <>
      <div className="d-lg-flex justify-content-center align-items-center py-5">
        <div className="d-sm-block d-lg-none">
          <img src={banner} alt="" className="img-fluid" />
        </div>
        <div className="pt-4 ps-lg-5 ps-3">
          <small className="text-danger">
            In every problem there is a master key
          </small>
          <h2 className="fw-bold fs-1 header-text">
            Heal Your Mind And Soul With Our Therapy Services
          </h2>
          <p>
            <small className="fs-6">
              Discover mysteries of your inner self and
              <br />
              find solution of your personal problems with
              <br /> the help of our psychologists
            </small>
          </p>
          <button className="btn btn-clr text-white">Book Now</button>
        </div>
        <div className="d-lg-block d-none">
          <img src={banner} alt="" className="img-fluid" />
        </div>
      </div>
      <Cases></Cases>
      <About></About>
      <Doctors></Doctors>
    </>
  );
};

export default Home;
