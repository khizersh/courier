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
import NewsCard from "../modules/news/NewsCard";
import NewsComp from "../modules/news/NewsComp";

export default function Home() {
  return (
    <>
      <HomePageSlider />
      <div className="container">
        <div className="row mbl-mar">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>

      <div className="container-fluid bg-777">
        <div className="container">
        <div className="row mb-3">
            <h2>Latest News</h2>
          </div>
          <div >
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
          <div className="row mb-3">
            <h2>Special Offers</h2>
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
