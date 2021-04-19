import React from "react";
import "../../App.css";
import DealCard from "../modules/home/DealCard";
import HomePageSlider from "../modules/home/HomePageSlider";
import Section from "../modules/home/Section";
import ServiceCard from "../modules/home/ServiceCard";
import Slider from "react-slick";
import PricingSection from "../modules/home/PricingSection";
import CustomerCount from "../modules/home/CustomerCount";
import Testimonials from "../modules/home/Testimonials";
import Quotation from "../modules/home/Quotation";
import Clients from "../modules/home/Clients";

export default function Home() {
  const data = [1, 2, 3, 4, 5, 6];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      <div className="container">
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
            <Slider {...settings}>
              {data.length && data.map((m, i) => <DealCard />)}
            </Slider>
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
