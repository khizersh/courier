import React from "react";
import { Link } from "react-router-dom";
import "./slider.css";

const Banner = ({ subtitle, title, image, url }) => {
  return (
    <div className="container-fluid">
      <div
        className="row home-slider-bg"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="container z-999 m-auto">
          <div className="row">
            <div className="col-12 col-md-8">
              <h5 className="slider-subtitle">{subtitle}</h5>
              <h1 className="slider-heading">{title}</h1>
              <Link to={url} className="btn-dark bg-white">
                Contact us <i className="fas fa-arrow-right pl-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
