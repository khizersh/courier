import React, { useEffect, useState } from "react";
import "../modules/home/home.css";
import "../modules/tracking/tracking.css";
import { Button } from "react-bootstrap";
import { getAllService, getAllCity, calculatePrice } from "../data/httpService";
import swal from "sweetalert";

const Calculator = () => {
  const [data, setData] = useState({
    cityId: "",
    serviceId: "",
    weight: null,
    volume: false,
    height: "",
    width: "",
    length: "",
  });
  const [price, setPrice] = useState(null);

  const [service, setService] = useState([]);
  const [city, setCity] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    getAllService()
      .then((r) => {
        if (r.data && r.data.statusCode == 1) {
          setService(r.data.data);
        }
      })
      .catch((e) => console.log(e));

    getAllCity()
      .then((r) => {
        if (r.data && r.data.statusCode == 1) {
          setCity(r.data.data);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onChangeService = (e) => {
    setData({ ...data, serviceId: e.target.value });
  };
  const onChangeCity = (e) => {
    setData({ ...data, cityId: e.target.value });
  };
  const onChangeCheck = (e) => {
    setData({ ...data, volume: !data.volume });
  };

  const onClick = () => {
    if (!data.weight || !data.serviceId || !data.cityId) {
      return swal({ title: "Enter all fields!", timer: 2500, icon: "error" });
    }
    calculatePrice(data).then((res) => {
      if (res && res.data.statusCode == 1 && res.data.data.rate) {
        setShow(true);
        setPrice(res.data.data.rate);
      } else {
        return swal({
          title: "No record found!",
          text: "This service is not available in this city.",
          timer: 3000,
          icon: "error",
        });
      }
    });
  };
  return (
    <div className="quotation pb-5">
      <div className="container">
        <h1 className="quot-title">Rate Calculator</h1>
        <div className="row p-4 car">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Select Courier Type</label>
              <div className="form-group">
                <select
                  className="form-control"
                  id="courier-type-box"
                  style={{ height: "53px" }}
                  onChange={onChangeService}
                >
                  <option>Select</option>
                  {service.length &&
                    service.map((m, i) => (
                      <option key={i} value={m.id}>
                        {m.service}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Ship to</label>
              <div className="form-group">
                <select
                  className="form-control"
                  id="courier-type-box"
                  style={{ height: "53px" }}
                  onChange={onChangeCity}
                >
                  <option>Select</option>
                  {city.length &&
                    city.map((m, i) => (
                      <option key={i} value={m.id}>
                        {m.city}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label for="name">Enter parcel weight(Kgs)</label>
              <input
                type="number"
                className="form-control"
                name="weight"
                placeholder="Enter weight"
                required
                onChange={onChange}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-check pt-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                value={data.volume}
                onChange={onChangeCheck}
              />
              <label className="form-check-label pt-4" for="flexCheckDefault">
                Volume
              </label>
            </div>
          </div>
          {data.volume && (
            <>
              {" "}
              <div className="col-12 col-md-6">
                {" "}
                <div className="form-group">
                  <label for="name">Height (cm)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="height"
                    value={data.height}
                    placeholder="Enter height in cm"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label for="name">Width (cm)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="width"
                    placeholder="Enter width in cm."
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label for="name">Length (cm)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="length"
                    placeholder="Enter length in cm."
                    onChange={onChange}
                  />
                </div>
              </div>
            </>
          )}
        </div>
        <div className="row car pb-3">
          <div className="col-12 text-center">
            <Button onClick={onClick}>Calculate</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 quotation-dtl text-center">
            <p>
              {" "}
              <a>
                <i className="fa fa-mobile fa-2x pr-2"></i>
              </a>
              We are available at Mon-Fri call us <a>+ 212-4000-300</a> during
              regular business hours
            </p>
          </div>
        </div>
      </div>

      {show && (
        <div id="show" className="container mt-3 card">
          <div className="row  bg p-5">
            <div className="border m-auto bg-white">
              <div className="row ">
                <div className="col-2 m-auto color-orange">
                  <i className="far fa-check-circle fa-2x "></i>
                </div>
                <div className="col-10">
                  <h4 className="text-dark">
                    Tentative amount{" "}
                    <span className="text-success"> {price}</span> Rs
                  </h4>
                  <p>
                    This is expected amount , not accurate it does't contain any
                    other circumstances
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculator;
