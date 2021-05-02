import React from "react";
import "./Section.css";
import men from "../../../images/section/section1.png";
import fastdel from "../../../images/section/fast-del.png";
import secureservice from "../../../images/section/sec-service.png";

const Section = () => {
  return (
    <section className="woman-section pt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 text-center px-md-5">
            <h2 className="mb-4 our-service mb-md-4 mt-3 text-left">
              25+ Experiences in Courier Service
            </h2>
            <p className="text-muted ps text-left">
              There anyone who loves or pursues nor desires to obtain pain of
              itself, bet it is pain, but because occasionally can packages as
              their default.
            </p>
            <div className="about-dtl">
              <div className="row">
                <div className="col-2">
                  <div className="about-icon">
                    <img src={fastdel} className="img-fluid" alt=""/>
                  </div>
                </div>
                <div className="col-10 text-left">
                  <div className="about-sub-heading">
                    <h4>Secured Services</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content page.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row text-left">
                <div className="col-2">
                  <div className="about-icon">
                    <img src={secureservice} className="img-fluid" alt=""/>
                  </div>
                </div>
                <div className="col-10">
                  <div className="about-sub-heading">
                    <h4>Fast Delivery</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content page.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 px-md-5">
            <img className="rounded mw-100 img-con" src={men} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
