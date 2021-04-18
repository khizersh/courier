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
        "There anyone who loves or pursues nor desires to obtain pain ofitself, bet it is pain, but because occasionally can packages as their default all the Lorem Ipsum generators on the Internet tend to repeat predefined. ",
      name: "Akif Ahmed",
    },
    {
      image: client2,
      comment:
        "There anyone who loves or pursues nor desires to obtain pain ofitself, bet it is pain, but because occasionally can packages as their default all the Lorem Ipsum generators on the Internet tend to repeat predefined. ",
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
      className="container-fluid"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container testimonials text-center">
        <h1 className="section-heading mb-5">Customer Feedback</h1>

        <Slider {...settings}>
          {data.length &&
            data.map((m, i) => (
              <div className="">
                <div className="">
                  <img
                    className="testimonial-client-img m-auto"
                    src={m.image}
                    alt=""
                  />
                  <i className="fa fa-quote"></i>
                </div>
                <p className="testimonial-text text-muted">“ {m.comment} ”</p>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <h5 className="pt-2">{m.name}</h5>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
