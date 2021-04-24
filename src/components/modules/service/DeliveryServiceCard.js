import React from "react";
import "./service.css";
import icon1 from "../../../images/service/sicon1.png";
import icon2 from "../../../images/service/sicon2.png";
import icon3 from "../../../images/service/sicon3.png";
import icon4 from "../../../images/service/sicon4.png";
import icon5 from "../../../images/service/sicon5.png";
import icon6 from "../../../images/service/sicon6.png";
import bg from "../../../images/service/bgservice.jpg";

const DeliveryServiceCard = () => {
  const data = [
    {
      icon: icon1,
      title: "Residential Movers",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: icon2,
      title: "Packaging Goods",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: icon3,
      title: "Storage Solution",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: icon4,
      title: "Furniture Assets",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: icon5,
      title: "Machinery Items",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      icon: icon6,
      title: "Documents Papers",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
  return (
    <>
      <div className="row py-4">
          <div className="col-12 text-center">
              <h1 className="section-heading">Delivery Services</h1>
          </div>
        {data.length &&
          data.map((m, i) => (
            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-service-item">
                <div className="icon">
                  <img src={m.icon} alt={m.title} />
                </div>
                <h4>{m.title}</h4>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default DeliveryServiceCard;
