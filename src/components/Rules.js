import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./Rules.css";

function Rules() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <div className="rules">
        <button type="button" className="btn rules-button" onClick={handleShow}>RULES</button>
        <Modal className="modal-container custom-map-modal" show={show} onHide={handleClose} centered >
        <Modal.Header closeButton>
          <h1 className="rules-text">RULES</h1>
        </Modal.Header>
        <Modal.Body>
        <img className="rules-img" src="./images/image-rules.svg" alt="Rules Diagram"/></Modal.Body>
      </Modal>
    </div>
}

export default Rules;