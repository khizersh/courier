import React, { useEffect, useState, useContext } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { trackData } from "../data/trackData";
import "../modules/tracking/tracking.css";
import { useHistory } from "react-router-dom";
import { trackOrder } from "../data/httpService";
import swal from "sweetalert";
import { MainContext } from "../context/MainContext";

const Tracking = () => {
  const router = useHistory();
  const [data, setData] = useState({
    from_city: "",
    cn_no: "",
  });
  const [showData, setShowData] = useState(null);
  const [error, setError] = useState(false);
  const [newReq, setNewReq] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [cnNumber, setcnNumber] = useState("");

  const { setLoader } = useContext(MainContext);

  const onChangeCity = (e) => {
    setData({ ...data, from_city: e.target.value });
  };
  const onChangeCode = (e) => {
    setData({ ...data, cn_no: e.target.value });
  };

  const onClick = () => {
    if (!data.cn_no || !data.from_city) {
      return swal({
        title: "Please enter all fields!",
        timer: 2000,
        icon: "error",
      });
    }
    setLoader(true);
    let from_city = data.from_city.split(">")[0].trim();
    trackOrder(from_city, data.cn_no)
      .then((res) => {
        if (res && res.data.data) {
          setShowData(res.data.data);
          setcnNumber(data.cn_no);
          setNewReq(false);
          setError(false);
          setLoader(false);
        } else if (res && res.data.message) {
          setError(true);
          setcnNumber(data.cn_no);
          setShowData(null);
          setErrorMessage(res.data.message);
          setNewReq(false);
          setLoader(false);
        }
      })
      .catch((e) => {
        setLoader(false);
        swal({
          title: "Something went wrong!",
          timer: 2000,
          icon: "error",
        });
      });
  };

  useEffect(() => {
    if (
      router.location &&
      router.location.state &&
      router.location.state.data
    ) {
      setShowData(router.location.state.data);
      setcnNumber(router.location.state.trackingNumber);
    } else if (
      router.location &&
      router.location.state &&
      router.location.state.message
    ) {
      setError(true);
      setcnNumber(router.location.state.trackingNumber);
      setErrorMessage(router.location.state.message);
    } else {
      setNewReq(true);
    }
  }, [router.location]);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 p-3 track">
          <div className="row mar-x">
            <div className="col-12 col-md-4 text-center pt-3">
              {" "}
              <span className="m-auto mr-2" style={{ fontSize: "14px" }}>
                Enter your tracking number
              </span>
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
                    <option>Select City</option>
                    {trackData && trackData.length
                      ? trackData.map((m, i) => (
                          <option key={i} value={m}>
                            {m}
                          </option>
                        ))
                      : null}
                  </select>
                  <Button variant="success" onClick={onClick}>
                    Track <i className="fas fa-truck-moving"></i>
                  </Button>
                </InputGroup>
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
      {newReq ? null : (
        <div className="row  bg pad-5">
          <div className="col-12 border m-auto bg-white">
            <div className="row ">
              <div className="col-2  m-auto">
                {error ? (
                  <i className="color-red far fa-times-circle fa-2x"></i>
                ) : (
                  <i className="color-orange far  fa-check-circle fa-2x "></i>
                )}
              </div>

              <div className="col-10 ">
                <h4 className="text-muted">
                  <span style={{ color: "black" }}>Tracking # </span>
                  {cnNumber}
                </h4>
                {showData ? (
                  <table class="table table-borderless table-responsive">
                    <thead>
                      <tr>
                        <td scope="col">From City:</td>
                        <td scope="col">To City</td>
                        <td scope="col">Weight</td>
                        <td scope="col">Packet Type</td>
                        <td scope="col">Service Type</td>
                        <td scope="col">Branch Code</td>
                        <td scope="col">Pcs</td>
                        <td scope="col">Date</td>
                        <td scope="col">Status</td>
                        <td scope="col">Receiver</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="info">
                        <td>{showData.from_city}</td>
                        <td>--</td>
                        <td>{showData.weight}</td>
                        <td>{showData.packet_type}</td>
                        <td>{showData.service_type}</td>
                        <td>{showData.branch_code}</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                      </tr>
                    </tbody>
                  </table>
                ) : error ? (
                  <p>{errorMessage}</p>
                ) : (
                  <p>
                    Sorry, your tracking attempt was not successful. Please
                    check your tracking number. (404)etwet
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default Tracking;
