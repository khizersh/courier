import React, { useState, useEffect } from "react";
import "./home.css";
import CountUp from "react-countup";
import { useCountUp } from "react-countup";

const CustomerCount = () => {
  const data = [
    { heading: "2150", span: "+", desc: "Satisfied Clients" },
    { heading: "100 ", span: "", desc: "Offices Worldwide" },
    { heading: "55 ", span: "", desc: "Countries Covered" },
    { heading: "4.6", span: "", desc: "Reviews" },
  ];
  const [office, setOffice] = useState(45);
  const [country, setCountry] = useState(55);
  const [review, setReview] = useState(4.3);
  let cli = Math.floor(Math.random() * 2150) + 1800;
  
  const { countUp } = useCountUp({ end: cli, delay: 0, start: 0 });
 

  return (
    <div className="facts-main-block">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="facts-block text-center">
              <h1 className="facts-heading">
              { countUp }
              </h1>
              <span>+</span>
              <div className="facts-dtl">Satisfied Clients</div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="facts-block text-center">
              <h1 className="facts-heading">{office}</h1>
              <div className="facts-dtl">Offices Worldwide</div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="facts-block text-center">
              <h1 className="facts-heading">{country}</h1>
              <div className="facts-dtl">Countries Covered</div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="facts-block text-center">
              <h1 className="facts-heading">{review}</h1>
              <div className="facts-dtl">Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCount;
