import React from "react";
import "./home.css";
import { Button } from "react-bootstrap";
const Quotation = () => {
  return (
    <div className="quotation pb-5">
      <div className="container">
        <h1 className="quot-title">Get Quotation</h1>
        <div className="row p-4 car">
          <div className="col-12 col-md-6">
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Full Name"
                required=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            {" "}
            <div class="form-group">
              <label for="name">Email</label>
              <input
                type="email"
                class="form-control"
                id="name"
                placeholder="Email"
                required=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div class="form-group">
              <label for="name">Phone No.</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Phone No."
                required=""
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div class="form-group">
              <label>Select Courier Type</label>
              <div class="form-group">
                <select
                  class="form-control"
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
          </div>
        </div>
        <div className="row car pb-3">
          <div className="col-12 text-center">
            <Button>SEND REQUEST</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 quotation-dtl text-center">
            <p> <a><i className="fa fa-mobile fa-2x pr-2"></i></a> 
              We are available at Mon-Fri call us <a>+ 212-4000-300</a>  during regular
              business hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
