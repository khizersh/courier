import React from "react";
import { Link } from "react-router-dom";
import "./slider.css";

const ServiceCard = () => {
  return (
    <div className="col-lg-4 col-md-12 mar-bot">
      <div className="about-block">
        <div className="about-points-block">
          <div className="about-points-icon">
            <img />
          </div>
          <div className="about-point-dtl">
            <p className="text-white">SERVICE 01</p>
            <p className="text-white">Descritpion</p>
          </div>
        </div>
      </div>
      <div className="about-type text-muted ">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content page.
        </p>
        <Link>
          Read more <i class="fas fa-arrow-right pl-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
