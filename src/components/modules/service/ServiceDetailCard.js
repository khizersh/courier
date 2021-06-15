import React from "react";
import "./service.css";
import { Link } from "react-router-dom";
import s2 from "../../../images/service/service1.jpg";
import s3 from "../../../images/service/service2.jpg";
import s4 from "../../../images/service/service3.jpg";
import s5 from "../../../images/service/service4.jpg";
import s6 from "../../../images/service/service5.jpg";
import s1 from "../../../images/service/service6.jpg";
import s7 from "../../../images/service/gift.jpg";
import s8 from "../../../images/service/customClear.jpg";

const ServiceDetailCard = () => {
  const data = [
    {
      image: s1,
      num: "01",
      title: "Same Day Service",
      link: "same-day-service",
      description:
        "<p>PDHS is providing same day delivery service within respective locations this service is for time sensitive consignments</p>",
    },
    {
      image: s2,
      num: "02",
      title: "Overnight service",
      link: "overnight-service",
      description:
        "<p>PDHS is providing next day delivery service to round about 240 locations in Pakistan. All consignments are moved by cargo Airlines by the respective locations.</p>",
    },
    {
      image: s3,
      num: "03",
      title: "Detain Service",
      link: "detain-service",
      description:
        "<p>This service is provided on heavy consignment movement which is not time sensitive, the detained shipments are delivered in 48 to 72 hours around country in this segment the rates are very competitive for bulk shippers</p>",
    },
    {
      image: s7,
      num: "04",
      title: "Feelings Express (Gift Delivery Service)",
      description:
        "<p>Since last 7 years PDHS have established gift delivery service where we send our customers feelings to their love ones or business associates in gift delivery service we have different products like 5 star hotel cake delivery in different floured different sizes of flowers and bouquets or other gift items can be send through this gift delivery service this divisions handles our customers feelings to their ones.</p>",
      link: "gift-service",
    },
    {
      image: s5,
      num: "05",
      title: "LOGISTICS SERVICE",
      link: "logistic-service",
      description:
        "<p>PDHS COURIER & LOGISTIC is one of the growing packer & movers and developing cargo company in Pakistan, providing wide range of services all over the world. We know how to serve customers in the best possible way. Our expert staff enables us to monitor and control the movement of goods from origin to destination. The company has been established to deliver value to our esteemed customers by focusing on their business needs, & to satisfying our clients by providing services like: PACKING & MOVING, FREIGHT FORWARDING AIR & SEA, CUSTOM CLEARENCE IMPORT & EXPORT. We provide our full support from purchase order to final delivery</p>",
    },
    {
      image: s6,
      num: "06",
      title: "PACKING & MOVING",
      link: "packing-moving",
      description:
        "<p>We offer professional packing by our experienced team who will handle and take care of your precious items with care and will pack them just the way you want it to be. We have a wide range of packing materials to meet your needs, be it for fragile items, bulks, household items etc.</p>" +
        "<ul><li>Professional consultant supervision and assistance for each step of the process</li><li>•	Highly skilled professional dismantling and packing using only the best materials</li>" +
        "<li>Careful handling and container loading</li>" +
        "<li>Secure and insured warehouse storage</li>" +
        "<li>Commitment to excellent service</li>" +
        "<li>Tracking of shipment</li>" +
        "</ul>",
    },
    {
      image: s4,
      num: "07",
      title: "FREIGHT FORWARDING",
      link: "frieght-forwarding",
      description:
        "<p>We entrust our cargo only with good hands, therefore together with our trusted, reliable and efficient overseas agents we will forward any cargo to all destination worldwide in the most effective way, at the economical price.</p>",
    },
    {
      image: s8,
      num: "08",
      title: "CUSTOM CLEARENCE",
      link: "custom-clearance",
      description:
        "<p>PDHS COURIER & LOGISTICS is made to measure your needs and create the perfect item for your expectations. Therefore our services offer includes customs clearance which will enable you to send any cargo at any point in the world stress free. Our company provides best custom clearance services in the industry. Through our custom clearing services we manage import & export consignments clearance. We have a competent experienced staff. We are fully aware of custom rules & regulation. Whether your company is multinational or a smaller enterprise serving international markets. We facilitate shipment of import & export in a shorter time span. We’re specialized in the clearance of:</p>" +
        "<ul><li>Industrial equipment</li>" +
        "<li>Machinery</li>" +
        "<li>Hand tools</li>" +
        "<li>Electronic goods</li>" +
        "<li>Hardware items</li>" +
        "<li>House hold goods</li>" +
        "<li>Office equipments</li>" +
        "<li>Diplomats goods</li>" +
        "</ul>",
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
            <Link to={`/service-detail/${m.link}`}>
              <div className="about-block">
                <div>
                  <img src={m.image} width="100%" />
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <a className="num">{m.num}</a>
                  <h4 className="title">{m.title}</h4>
                  <a className="text-muted">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: m.description.slice(0, 70) + "...",
                      }}
                    />
                    Read more <i className="fas fa-arrow-right pl-2"></i>
                  </a>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ServiceDetailCard;
