import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./slider.css";

const ServiceCard = ({ data }) => {
  const [more, setMore] = useState(false);

  const onClickMore = () => {
    setMore(!more);
  };

  return (
    <div className="col-lg-4 col-md-12 mar-bot">
      <div className="about-block">
        <div className="about-points-block">
          <div className="about-points-icon">
            <img />
          </div>
          <div className="about-point-dtl">
            <p className="text-white">{data.title}</p>
            <p className="text-white">{data.description}</p>
            <p
              className="text-white"
              style={{ marginTop: "-17px", fontSize: "13px" }}
            >
              {data.subDesc}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="about-type text-muted ">
        <p> {more ? data.para : data.para.slice(0, 70) + "..."} </p>
        <a className="cursor-pointer" onClick={onClickMore}>
          Read more <i className="fas fa-arrow-right pl-2"></i>
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
