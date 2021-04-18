import React from "react";
import Slider from "react-slick";
import Banner from "./Banner";
import slide1 from "../../../images/homeslider/slide1.jpg";
import slide2 from "../../../images/homeslider/slide2.jpg";
import slide3 from "../../../images/homeslider/slide3.jpg";
import "./slider.css"

const HomePageSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true
  };

  const data = [
    {
      subtitle: "Welcome To PDHS Courier",
      title: "We are Top Courier and Mover Service",
      image: slide1,
    },
    {
      subtitle: "Welcome To PDHS Courier",
      title: "We provide Best Dispatch and Parcel Service",
      image: slide2,
    },
    {
      subtitle: "Welcome To PDHS Courier",
      title: "Since 1980 we provide Quality Service",
      image: slide3,
    },
  ];
  return (
    <Slider {...settings} >
      {data.length &&
        data.map((m, i) => (
          <Banner title={m.title} subtitle={m.subtitle} image={m.image} />
        ))}
    </Slider>
  );
};

export default HomePageSlider;
