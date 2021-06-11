import React, { useState, useEffect } from "react";
import "./home.css";
import CountUp from "react-countup";
import { useCountUp } from "react-countup";

const CustomerCount = () => {
  const data = [
    { heading: "220 ", span: "+", desc: "Worldwide Destinations" },
    { heading: "3500 ", span: "+", desc: "Nationwide Destinations" },
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
              <h1 className="facts-heading">{countUp}</h1>
              <span>+</span>
              <div className="facts-dtl">Satisfied Customer</div>
            </div>
          </div>
          {data.length
            ? data.map((m, i) => (
                <div className="col-12 col-md-3">
                  <div className="facts-block text-center">
                    <h1 className="facts-heading">{m.heading}</h1>
                    <span>{m.span}</span>
                    <div className="facts-dtl">{m.desc}</div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default CustomerCount;
