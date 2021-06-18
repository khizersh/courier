import React from "react";
import "../../App.css";
import CustomerCount from "../modules/home/CustomerCount";
import DeliveryServiceCard from "../modules/service/DeliveryServiceCard";
import ServiceDetailCard from "../modules/service/ServiceDetailCard";
import bgservice from "../../images/service/bgservice.jpg";
import { Helmet } from "react-helmet";

export default function Services() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pdhscourier | Services</title>
        <meta name="delivery services" content="Pdhs delivery service" />
      </Helmet>
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
