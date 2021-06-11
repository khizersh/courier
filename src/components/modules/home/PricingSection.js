import React from "react";
import PricingCard from "./PricingCard";
import Slider from "react-slick";

const PricingSection = () => {
  const data = [
    {
      package: "Basic",
      price: "Rs 280.00",
      subtitle:"Overnight",
      array: [
        { title: "Product weight", value: "Per Kg" },
        { title: "Country", value: "All" },
        { title: "Duration", value: "Next Day" },
      ],
    },
    {
      package: "Standard",
      price: "Rs 220.00",
      subtitle: "Cargo",
      array: [
        { title: "Product weight", value: "Per Kg" },
        { title: "Country", value: "All" },
        { title: "Duration", value: "1 Day+" },
      ],
    },
    {
      package: "Basic",
      price: "Rs 80.00",
      subtitle: "Detain",
      array: [
        { title: "Product weight", value: "Min 5Kg" },
        { title: "Country", value: "All" },
        { title: "Duration", value: "36 to 72 Hours" },
      ],
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
        <div className="mb-4">
            <h2 className="text-center ">
                Pricing & Plans
            </h2>
        </div>
      <Slider {...settings}>
        {data.length &&
          data.map((m, i) => (
            <PricingCard
              key={i}
              title={m.package}
              price={m.price}
              array={m.array}
            />
          ))}
      </Slider>
    </div>
  );
};

export default PricingSection;
