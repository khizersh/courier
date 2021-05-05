import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import "./news.css";
import Slider from "react-slick";
import { getAllNews } from "../../data/httpService";

const NewsComp = () => {
  const [row, setRow] = useState([]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
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

  useEffect(() => {
    getAllNews()
      .then((r) => {
        if (r.data && r.data.statusCode == 1) {
          setRow(r.data.data);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Slider {...settings}>
        {row.length &&
          row.map((m, i) => (
            <NewsCard key={i} title={m.title} desc={m.description} />
          ))}
      </Slider>
    </div>
  );
};

export default NewsComp;
