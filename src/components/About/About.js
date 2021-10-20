import React from "react";
import about from "../../images/About/About.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
const About = () => {
  const queIcon = <FontAwesomeIcon icon={faQuestion} className="header-text" />;
  return (
    <Container className="mt-5 py-lg-5">
      <div className="d-lg-flex justify-content-between align-items-center">
        <div>
          <img src={about} alt="" className="img-fluid" />
        </div>
        <div className="pb-5 ps-5">
          <p className="">
            <small className="text-clr text-capitalize fw-bold">About us</small>
          </p>
          <h2 className="text-wrap">
            We Provide the Best Psychology <br /> Therapy Treatment
          </h2>
          <p className="text-wrap">
            As a psychologists and a cognitive behavioral therapists, <br /> we
            have worked with hundreds of patients and understand the intricacies
            <br /> of various Psychologyical issues that people face.
            <br /> <br /> we are dedicated to being friendly, disciplined and
            organized yet flexible.
            <br /> We approach our patients and help them resolve their
            emotional issues <br /> of the past and the present, to open the
            door to a brighter and confident future.
          </p>
          <button className="btn btn-clr text-white">Get Appoinment</button>
        </div>
      </div>
      <div className="d-lg-flex justify-content-center p-5">
        <div className="pe-lg-5" style={{ borderLeft: "5px solid #058ea0" }}>
          <h4 className="ms-2">{queIcon} What we treat</h4>
          <p className="ms-3 text-wrap">
            we can help people learn to cope with stressful situations, <br />
            overcome addictions, manage their chronic illnesses, and <br />
            tests and assessments that can help diagnose conditionor <br /> a
            tell more about the way a person thinks, feels, and behaves.
          </p>
        </div>
        <div className="pe-lg-5" style={{ borderLeft: "5px solid #058ea0" }}>
          <h4 className="ms-2">{queIcon} How we treat</h4>
          <p className="ms-3 text-wrap">
            we assess, diagnose and treat individuals experiencing <br />
            psychological distress and mental illness. we also perform <br />
            psychotherapy and develop treatment plans. we often work <br /> in
            hospitals, mental health clinics, and private practice.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
