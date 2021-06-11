import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import "./home.css";
import { useHistory } from "react-router-dom";
import bg from "../../../images/homeslider/bg_map.jpg";
import { trackData } from "../../data/trackData";

const TrackingModal = ({ check }) => {
  const [show, setShow] = useState(check);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useHistory();

  const onClick = () => {
    setShow(false);
    router.push("/tracking/123");
  };
  return (
    <>
      <div className="track-btn">
        <Button variant="primary" onClick={handleShow}>
          Track <i className="fas fa-truck-moving"></i>
        </Button>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
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
                placeholder="Enter your tracking number."
              />
              <InputGroup.Append>
                {/* <select
                  name="from_city"
                  className="from_city"
                  style={{ width: "180x", height: "20px" }}
                >
                  {trackData && trackData.length
                    ? trackData.map((m, i) => <option key={i}>{m}</option>)
                    : null}
                </select> */}
                <Button onClick={onClick}>Track</Button>
              </InputGroup.Append>
            </InputGroup>
          </Modal.Body>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal>
      </div>
    </>
  );
};

export default TrackingModal;
