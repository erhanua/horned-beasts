import React from "react";
import { Modal, Button } from "react-bootstrap";

function SelectedBeast({ show, handleClose, beast }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{beast?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={beast?.image_url} alt={beast?.title} width="100%" />
        <p>{beast?.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SelectedBeast;
