import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const MessageModal = ({ open, setOpen, data }) => {
  const [show, setShow] = useState(open);
  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{ marginTop: "3%" }}
      >
        <h5 className="text-center">Message Info</h5>
        <Modal.Body className="bg-tracking">
          Name : <p>{data && data.name}</p>
          Email address : <p>{data && data.email}</p>
          Contact number : <p>{data && data.contact}</p>
          Message:
          <p>{data && data.message}</p>
        </Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal>
    </div>
  );
};

export default MessageModal;
