import React, { useState , useContext } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import "./home.css";
import { useHistory } from "react-router-dom";
import bg from "../../../images/homeslider/bg_map.jpg";
import { trackData } from "../../data/trackData";
import swal from "sweetalert";
import { trackOrder } from "../../data/httpService";
import { MainContext } from "../../context/MainContext";

const TrackingModal = ({ check }) => {
  const router = useHistory();
  const [show, setShow] = useState(check);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    from_city: "",
    cn_no: "",
  });
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
    setLoader(true)
    
    let from_city = data.from_city.split(">")[0].trim();
    trackOrder(from_city, data.cn_no)
    .then((res) => {
      if (res && res.data) {
          setLoader(false)
          router.push({
            pathname: "/tracking",
            state: {
              ...res.data,
              trackingNumber: data.cn_no,
            },
          });
        }
      })
      .catch((e) =>
      {  
        setLoader(false)
        swal({
          title: "Something went wrong!",
          timer: 2000,
          icon: "error",
        })}
      );
    setShow(false);
  
  };

  return (
    <>
      <div className="track-btn">
        <Button variant="success" onClick={handleShow}>
          Track <i className="fas fa-truck-moving"></i>
        </Button>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          className="marginTop"
        >
          <Modal.Body
            className="bg-tracking"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <h2>Track Your Shipment</h2>
            <InputGroup size="lg">
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Enter your tracking number"
                className="txt-class"
                onChange={onChangeCode}
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
            </InputGroup>
            <div className="text-center mt-2">
              <Button variant="success" onClick={onClick}>
                Track
              </Button>
            </div>
          </Modal.Body>

          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal>
      </div>
    </>
  );
};

export default TrackingModal;
