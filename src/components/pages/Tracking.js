import React, { useEffect, useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { trackData } from "../data/trackData";
import "../modules/tracking/tracking.css";

const Tracking = () => {
  const [data, setData] = useState({
    from_city: "",
    cn_no: "",
  });

  const onChangeCity = (e) => {
    console.log("e.  :", e.target.value);
    setData({ ...data, from_city: e.target.value });
  };
  const onChangeCode = (e) => {
    console.log("e.  :", e.target.value);
    setData({ ...data, cn_no: e.target.value });
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 p-3 track">
          <div className="row mar-x">
            <div className="col-12 col-md-4 text-center pt-3">
              {" "}
              <span className="m-auto mr-2" style={{fontSize:'14px'}}>Enter your tracking number</span>
            </div>
            <div className="col-12 col-md-8">
              {" "}
              <InputGroup size="lg">
                <InputGroup size="lg">
                  <FormControl
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder="xxxxxxxx"
                    onChange={onChangeCode}
                    className="txt-class"

                  />
                  <select
                    name="from_city"
                    className="form-control txt-class"
                    onChange={onChangeCity}

                  >
                    {trackData && trackData.length
                      ? trackData.map((m, i) => (
                          <option key={i} value={m}>
                            {m}
                          </option>
                        ))
                      : null}
                  </select>
                </InputGroup>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
      <div className="row  bg pad-5">
        <div className="border m-auto bg-white">
          <div className="row ">
            <div className="col-2 color-orange">
              <i className="far fa-check-circle fa-2x "></i>
            </div>
            <div className="col-10 ">
              <h4 className="text-muted">ZFDZSGDSGCGGDCVSFAS</h4>
              <p>
                Sorry, your tracking attempt was not successful. Please check
                your tracking number. (404)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
