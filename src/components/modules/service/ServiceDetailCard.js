import React from "react";
import "./service.css";
import { Link } from "react-router-dom";
import s2 from "../../../images/service/service1.jpg";
import s3 from "../../../images/service/service2.jpg";
import s4 from "../../../images/service/service3.jpg";
import s5 from "../../../images/service/service4.jpg";
import s6 from "../../../images/service/service5.jpg";
import s1 from "../../../images/service/service6.jpg";

const ServiceDetailCard = () => {
  const data = [
    {
      image: s1,
      num: "01",
      title: "Standard Courier",
      link: "standard-courier",
    },
    {
      image: s2,
      num: "02",
      title: "Door to Door",
      link: "door-to-door",
    },
    {
      image: s3,
      num: "03",
      title: "Express Courier",
      link: "express-courier",
    },
    {
      image: s4,
      num: "04",
      title: "Ware House",
      link: "ware-house",
    },
    {
      image: s5,
      num: "05",
      title: "Pallet",
      link: "pallet",
    },
    {
      image: s6,
      num: "06",
      title: "International Courier",
      link: "international-courier",
    },
  ];

  return (
    <div className="row mt-3">
      <div className="col-12 text-center">
        <h1 className="section-heading">Courier Services</h1>
      </div>
      {data.length &&
        data.map((m, i) => (
          <div key={i} className="col-lg-4 col-md-12 mb-3 ">
            <Link to={`/service-detail/pdhs-courier`}>
              <div className="about-block">
                <div>
                  <img src={m.image} width="100%" />
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <a className="num">{m.num}</a>
                  <h4 className="title">{m.title}</h4>
                  <div className=" text-muted ">
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content page.
                    </p>
                    Read more <i className="fas fa-arrow-right pl-2"></i>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ServiceDetailCard;
