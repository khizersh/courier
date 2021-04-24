import React from "react";
import "../../App.css";
import CustomerCount from "../modules/home/CustomerCount";
import DeliveryServiceCard from "../modules/service/DeliveryServiceCard";
import ServiceDetailCard from "../modules/service/ServiceDetailCard";
import bgservice from "../../images/service/bgservice.jpg";

export default function Services() {
  return (
    <>
      <div className="container">
        <ServiceDetailCard />
      </div>
      <div className="container-fluid">
        <CustomerCount />
      </div>
      <div
        className="container-fluid"
        style={{ backgroundImage: `url(${bgservice})` }}
      >
        <div className="container">
          <DeliveryServiceCard />
        </div>
      </div>
    </>
  );
}
