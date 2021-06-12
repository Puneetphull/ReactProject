import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Modal, Button } from "react-bootstrap";

export default function PortalModal() {
  const [show, setshow] = useState(true);

  const onhide = () => {
    setshow(false);
  };

  return ReactDOM.createPortal(
    <div>
      <Modal
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
      >
        <Modal.Header>IsloggedIn</Modal.Header>
        <Modal.Body>suceesfully loggedin </Modal.Body>
        <Modal.Footer>
          <Button onClick={onhide}>okay</Button>
        </Modal.Footer>
      </Modal>
    </div>,
    document.getElementById("portalmodal")
  );
}
