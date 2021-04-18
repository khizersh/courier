import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import "./home.css";

const TrackingModal = ({ check }) => {
  const [show, setShow] = useState(check);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="track-btn">
        <Button variant="primary" onClick={handleShow}>
          Track <i class="fas fa-truck-moving"></i>
        </Button>
      </div>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body className="bg-tracking" >
            <h2>Track Your Shipment</h2>
            <InputGroup size="lg">
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
              <InputGroup.Append>
                <Button>Track</Button>
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
