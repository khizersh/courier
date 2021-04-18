import React from "react";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";

const ServiceCardSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
  };

  const data = [1,2,3,4,5]
  return (
    <Slider {...settings}>
      {data.length &&
        data.map((m, i) => (
       <ServiceCard />
        ))}
    </Slider>
  );
};

export default ServiceCardSlider;
