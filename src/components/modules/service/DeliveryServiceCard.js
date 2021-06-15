import React from "react";
import "./service.css";
import icon1 from "../../../images/service/international.png";
import icon2 from "../../../images/service/search.png";
import icon3 from "../../../images/service/cash.png";
import icon4 from "../../../images/service/pickupreq.png";
import icon5 from "../../../images/service/pickup.png";
import icon6 from "../../../images/service/heavy.png";
import icon7 from "../../../images/service/cargo.png";
import icon8 from "../../../images/service/bulk.png";
import icon9 from "../../../images/service/sicon1.png";
import icon10 from "../../../images/service/custom.png";
import bg from "../../../images/service/bgservice.jpg";

const DeliveryServiceCard = () => {
  const data = [
    {
      icon: icon1,
      title: "International and domestic deliveries",
      desc: "We Provide International and Local (Paksitan delivery)",
    },
    {
      icon: icon2,
      title: "On line tracking system",
      desc: "You can tract your shipment on just one click.",
    },
    {
      icon: icon3,
      title: "Cash on delivery shipments",
      desc: "where the recipient pays for a good at the time of delivery rather than using credit.",
    },
    {
      icon: icon4,
      title: "Pick-up requests",
      desc: "Request a freight pickup quickly and easily with our secure platform.",
    },
    {
      icon: icon5,
      title: "Door to door delivery",
      desc: "We Provide shipping method where the product is picked up at the door of the vendor and delivered to the recipient's door",
    },
    {
      icon: icon6,
      title: "Heavy shipments",
      desc: "you can count on our services to take on the heavy lifting. ... everyone involved in the shipping process is aware that it's a heavy shipment.",
    },
    {
      icon: icon7,
      title: "Project cargo",
      desc: "Smart planning for Project Cargo. No matter the place, the complexity or the dimensions: we can transport any heavy lift or oversized cargo to its final destination.",
    },
    {
      icon: icon8,
      title: "Bulk shipments",
      desc: "Looking to ship oversized cargo shipments? ... We provide global breakbulk and out-of-gauge services,",
    },
    {
      icon: icon9,
      title: "Air & sea cargo service",
      desc: "PDHS company providing international air and sea cargo services from all over Pakistan and major cities Lahore, Islamabad, Karachi.",
    },
    {
      icon: icon10,
      title: "Custom clearance",
      desc: "Customs clearance work involves preparation and submission of documentations required to facilitate export or imports into the country.",
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
                  <img src={m.icon} alt={m.title} width="60px" />
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
