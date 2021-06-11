import React from "react";
import Slider from "react-slick";
import image1 from "../../../images/homeslider/c1.jpg";
import image2 from "../../../images/homeslider/c2.png";
import image3 from "../../../images/homeslider/c3.jpg";
import image4 from "../../../images/homeslider/c4.jpg";
import image5 from "../../../images/homeslider/c5.png";
import image6 from "../../../images/homeslider/c6.png";
import image7 from "../../../images/homeslider/c7.jpg";
import image8 from "../../../images/homeslider/c8.png";
import "./home.css";

const Clients = () => {
  const data = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
    {
      url: image5,
    },
    {
      url: image6,
    },
    {
      url: image7,
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-5">
      <div className="mb-5">
        <h2 className="text-center">Out Clients</h2>
      </div>
      <div className="container">
        <Slider {...settings}>
          {data.length &&
            data.map((m, i) => (
              <div key={i} className="cursor-pointer m-auto text-center">
                <img src={m.url} alt="" style={{ width: '90px' , height:'70px'}} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clients;
