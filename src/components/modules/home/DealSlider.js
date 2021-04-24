import React from "react";
import dubai from "../../../images/section/dubai.jpg";
import uk from "../../../images/section/uk.jpg";
import ca from "../../../images/section/ca.jpg";
import DealCard from "./DealCard";
import Slider from "react-slick";

const DealSlider = () => {
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

  const data = [
    {
      bg: dubai,
      title: "50% off for Dubai",
      desc: "Send your parcle for 50% off to Dubai",
    },
    {
      bg: uk,
      title: "50% off for Uk",
      desc: "Send your package for 50% off to UK",
    },
    {
      bg: ca,
      title: "50% off for US and Canada",
      desc: "50% off for parcles to US and Canada",
    },
    {
      bg: dubai,
      title: "50% off for Dubai",
      desc: "Send your parcle for 50% off to Dubai",
    },
    {
      bg: uk,
      title: "50% off for Uk",
      desc: "Send your package for 50% off to UK",
    },
  ];

  return (
    <div>
      <Slider {...settings}>
        {data.length &&
          data.map((m, i) => (
            <DealCard key={i} bg={m.bg} title={m.title} desc={m.desc} />
          ))}
      </Slider>
    </div>
  );
};

export default DealSlider;
