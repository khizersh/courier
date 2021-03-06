import React from "react";
import "../../App.css";
import DealCard from "../modules/home/DealCard";
import HomePageSlider from "../modules/home/HomePageSlider";
import Section from "../modules/home/Section";
import ServiceCard from "../modules/home/ServiceCard";
import PricingSection from "../modules/home/PricingSection";
import CustomerCount from "../modules/home/CustomerCount";
import Testimonials from "../modules/home/Testimonials";
import Quotation from "../modules/home/Quotation";
import Clients from "../modules/home/Clients";
import DealSlider from "../modules/home/DealSlider";
import NewsComp from "../modules/news/NewsComp";
import { homePageService } from "../data/serviceDetail";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pdhscourier</title>
        <meta name="title" content="Courier" />
      </Helmet>

      <HomePageSlider />
      <div className="container">
        <div className="row mbl-mar">
          {homePageService.length
            ? homePageService.map((m, i) => <ServiceCard data={m} key={i} />)
            : ""}
        </div>
      </div>

      <div className="container-fluid bg-777 neg-top-margin">
        <div className="container">
          <div className="row mb-3 text-center-mbl">
            <h2 className="text-center-mbl">Latest News</h2>
          </div>
          <div>
            <NewsComp />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <Section />
        </div>
      </div>
      <div className="mt-5 bg-777">
        <div className="container ">
          <div className="row mb-3 ">
            <h2 className="text-center-mbl">Special Offers</h2>
          </div>
          <div>
            <DealSlider />
          </div>
        </div>
      </div>

      <div className="container my-5">
        <PricingSection />
      </div>

      <CustomerCount />
      <Testimonials />
      <Clients />
      <Quotation />

      {/* <h1 className="home">EPIC</h1> */}
    </>
  );
}
