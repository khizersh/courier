import React from "react";
import NewsCard from "./NewsCard";
import "./news.css";
import Slider from "react-slick";

const NewsComp = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      title: "Preminum document delivery.",
      desc:
        "Your document will be reviewed by our team neatly organzied,packaged,and sipped directly to you.",
    },
    {
      title: "Preminum document delivery.",
      desc:
        "Your document will be reviewed by our team neatly organzied,packaged,and sipped directly to you.",
    },
    {
      title: "Preminum document delivery.",
      desc:
        "Your document will be reviewed by our team neatly organzied,packaged,and sipped directly to you.",
    },
    {
      title: "Preminum document delivery.",
      desc:
        "Your document will be reviewed by our team neatly organzied,packaged,and sipped directly to you.",
    },
    
  ];
  return (
    <div >
      <Slider {...settings}>
        {data.length &&
          data.map((m, i) => (
            <NewsCard key={i}  title={m.title} desc={m.desc} />
          ))}
      </Slider>
     

    </div>
  );
};

export default NewsComp;
