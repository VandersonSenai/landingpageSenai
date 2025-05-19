// Live demo
// A modal with header, body, and set of actions in the footer. Use <Modal/> in combination with other components to show or hide your Modal. The <Modal/> Component comes with a few convenient "sub components": <Modal.Header/>, <Modal.Title/>, <Modal.Body/>, and <Modal.Footer/>, which you can use to build the Modal content.

import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Header from 'react-bootstrap/ModalHeader';
import Title from 'react-bootstrap/ModalHeader';
import Body from 'react-bootstrap/ModalHeader';
import Footer from 'react-bootstrap/ModalHeader';

function ModalLogin() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>       */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLogin;