import React , { useState } from 'react'
import Pirate from './pirate';
import './Movie.scss'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function Example(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    return (
      <>
        
        <p align="left"  > <button className="learn-more" onClick={handleShow}  ><h3>DOwNLOAD</h3></button></p>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title><h1 align = "center">LIST OF LINKS</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body><h1> <Pirate title = {props.title}/>  </h1></Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Example