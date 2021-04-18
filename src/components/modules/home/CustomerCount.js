import React from "react";
import "./home.css";

const CustomerCount = () => {
  const data = [
    { heading: "2150", span: "+", desc: "Satisfied Clients" },
    { heading: "100 ", span: "", desc: "Offices Worldwide" },
    { heading: "55 ", span: "", desc: "Countries Covered" },
    { heading: "4.6", span: "", desc: "Reviews" },
  ];
  return (
    <div className="facts-main-block">
      <div className="container">
        <div className="row">
          {data.length &&
            data.map((m, i) => (
              <div key={i} className="col-12 col-md-3">
                <div className="facts-block text-center">
                  <h1 className="facts-heading">{m.heading}</h1>
                  <span>{m.span}</span>
                  <div class="facts-dtl">{m.desc}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerCount;
