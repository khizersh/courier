import React, { useEffect, useState, useContext } from "react";
import Slider from "react-slick";
import Banner from "./Banner";
import slide1 from "../../../images/homeslider/slide1.jpg";
import slide2 from "../../../images/homeslider/slide2.jpg";
import slide3 from "../../../images/homeslider/slide3.jpg";
import "./slider.css";
import { getAllBanner } from "../../data/httpService";
import { MainContext } from "../../context/MainContext";

const HomePageSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const { setLoader } = useContext(MainContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoader(true);
    getAllBanner()
      .then((r) => {
        if (r.data && r.data.statusCode == 1) {
          setData(r.data.data);
        }
        setLoader(false);
      })
      .catch((e) => {
        setLoader(false);
        setData(staticdata);
      });
  }, []);

  const staticdata = [
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
    <Slider {...settings}>
      {data.length &&
        data.map((m, i) => (
          <Banner
            title={m.title}
            subtitle={m.description}
            image={m.image}
            url={"/contact-us"}
          />
        ))}
    </Slider>
  );
};

export default HomePageSlider;
