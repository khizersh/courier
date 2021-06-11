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
              More than +25 Years of Experience in the field.
            </h2>
            <p className="text-muted ps text-left">
              Almost three decades into its existence the PDHS brand has evolved
              into a symbol of trust & reliability. PDHS provides domestic &
              international express services to its customers, With a view to
              enlarging its presence globally.
            </p>
            <div className="about-dtl">
              <div className="row">
                <div className="col-2">
                  <div className="about-icon">
                    <img src={fastdel} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-10 text-left">
                  <div className="about-sub-heading">
                    <h4>3,500 Destinations</h4>
                    <p>
                      PDHS providing access to its customers to over 3,500
                      destinations worldwide
                    </p>
                  </div>
                </div>
              </div>
              <div className="row text-left">
                <div className="col-2">
                  <div className="about-icon">
                    <img src={secureservice} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-10">
                  <div className="about-sub-heading">
                    <h4>Customer Satisfaction</h4>
                    <p>
                      Realizing the customer needs and expectations have always
                      been the driving principles in the milestones that PDHS
                      has achieved over the years. This has resulted in setting
                      benchmarks to improve the overall quality and standards of
                      the express courier industry
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
