import React from "react";
import "../home/slider.css";

const ServiceDetailBanner = ({ image }) => {
  return <div className="row">
       <img src={image} width="100%" height="500px"/>
  </div>;
};

export default ServiceDetailBanner;
