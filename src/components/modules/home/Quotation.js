import React, { useState } from "react";
import "./home.css";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
import { addMessage } from "../../data/httpService";

const Quotation = () => {
  const [data, setData] = useState({
    id: "",
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const onClick = () => {
    addMessage(data)
      .then((res) => {
        if (res) {
          if (res.data.statusCode == 1) {
            return swal({
              title: res.data.message,
              text:'We will contact you soon!',
              timer: 2500,
              icon: "success",
            }).then((e) =>
              setData({
                id: "",
                name: "",
                email: "",
                contact: "",
                message: "",
              })
            );
          } else {
            return swal({
              title: res.data.message,
              timer: 2500,
              icon: "error",
            });
          }
        }
      })
      .catch((e) => console.log(e));
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="quotation pb-5">
      <div className="container">
        <h1 className="quot-title">Contact Us</h1>
        <div className="row p-4 car">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={data.name}
                placeholder="Full Name"
                required
                onChange={onChange}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            {" "}
            <div className="form-group">
              <label for="name">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={data.email}
                placeholder="Email"
                required
                onChange={onChange}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label for="name">Phone No.</label>
              <input
                type="text"
                className="form-control"
                name="contact"
                value={data.contact}
                placeholder="Phone No."
                required
                onChange={onChange}
              />
            </div>
          </div>
          {/* <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Select Courier Type</label>
              <div className="form-group">
                <select
                  className="form-control"
                  id="courier-type-box"
                  style={{ height: "53px" }}
                >
                  <option>Standard</option>
                  <option>Express</option>
                  <option>International</option>
                  <option>Pallet</option>
                  <option>Ware Housing</option>
                </select>
              </div>
            </div>
          </div> */}
          <div className="col-12 col-md-12">
            <div className="form-group">
              <label for="name">Message.</label>
              <textarea
                name="message"
                value={data.message}
                className="form-control"
                rows="5"
                required=""
                placeholder="Enter your message here."
                onChange={onChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row car pb-3">
          <div className="col-12 text-center mbl-full-width">
            <Button className="mbl-full-width" onClick={onClick}>
              SEND REQUEST
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 quotation-dtl text-center">
            <p>
              {" "}
              <a>
                <i className="fa fa-mobile fa-2x pr-2"></i>
              </a>
              We are available at Mon-Fri call us <a>03082256517</a> |{" "}
              <a> 03128486210</a> during regular business hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
