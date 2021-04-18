import React from "react";
import PricingCard from "./PricingCard";
import Slider from "react-slick";

const PricingSection = () => {
  const data = [
    {
      package: "Basic",
      price: "$50",
      array: [
        { title: "Product weight", value: "3KG - 5Kg" },
        { title: "Country", value: "All" },
        { title: "Duration", value: "7-14 days" },
      ],
    },
    {
      package: "Premium",
      price: "$100",
      array: [
        { title: "Product weight", value: "3KG - 5Kg" },
        { title: "Country", value: "All" },
        { title: "Duration", value: "7-14 days" },
      ],
    },
    {
      package: "Standard",
      price: "$30",
      array: [
        { title: "Product weight", value: "3KG - 5Kg" },
        { title: "Country", value: "All" },
        { title: "Duration", value: "7-14 days" },
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
