import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import "../modules/tracking/tracking.css";

const Tracking = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 p-3 track">
          <div className="row mx-5">
            <div className="col-12 col-md-4 text-center pt-3">
              {" "}
              <span className="m-auto mr-2">Enter your tracking number</span>
            </div>
            <div className="col-12 col-md-8">
              {" "}
              <InputGroup size="lg">
                <FormControl
                  aria-label="Medium"
                  className=""
                  placeholder="Enter your tracking number."
                />
                <InputGroup.Append>
                  <Button><i class="fas fa-search-location"></i></Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
        <div className="row  bg p-5">
            <div className="border m-auto bg-white">
                <div className="row ">
                    <div className="col-2 m-auto color-orange">
                    <i class="far fa-check-circle fa-2x "></i>
                    </div>
                    <div className="col-10">
                        <h4>ZFDZSGDSGCGGDCVSFAS</h4>
                        <p>Sorry, your tracking attempt was not successful. Please check your tracking number. (404)</p>
                    </div>
                </div>

            </div>

        </div>
    </div>
  );
};

export default Tracking;
