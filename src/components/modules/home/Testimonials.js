import React from "react";
import bgImage from "../../../images/section/clients.jpg";
import client1 from "../../../images/section/client1.png";
import client2 from "../../../images/section/client2.png";
import "./home.css";
import Slider from "react-slick";

const Testimonials = () => {
  const data = [
    {
      image: client1,
      comment:
        "PDHS arranged the transportation of a heavy Anchor from Aberdeen to Somerset for me. Delivery took around 30 hrs and cost less than fifteen pounds, fully insured. I will have no hesitation in using PDHS next time",
      name: "Akif Ahmed",
    },
    {
      image: client2,
      comment:
        "I have been PDHS monkey for a while now and I have to say they are one of the best! They get you the best deals, nothing ever gets lost, no problems, just book, pay, print the label, stick it on the parcel, job done!",
      name: "Zeeshan pasha",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };
  return (
    <div
      className="container-fluid mb-sm-5"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container testimonials text-center">
        <h1 className="section-heading mb-3">Customer Feedback</h1>

        <Slider {...settings}>
          {data.length &&
            data.map((m, i) => (
              <div className="">
                {/* <img
                    className="testimonial-client-img m-auto"
                    src={m.image}
                    alt=""
                  /> */}
                <i className="fa fa-quote"></i>

                <p className="testimonial-text text-muted">“ {m.comment} ”</p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <h5 className="pt-2">{m.name}</h5>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
