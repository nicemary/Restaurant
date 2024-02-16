import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';
import RestReview from '../Components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function RestView() {
    const {id}=useParams();
console.log(id)
    const allRestaurant=useSelector(state=>state.restuarantSlice.allRestaurant);
    console.log(allRestaurant);
    const selectedRestuarant=allRestaurant?.filter(item=>item.id==id)
    console.log(selectedRestuarant);
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        
        <>
            <Row className='mt-5 mb-2'>
                <Col md={1}>

                </Col>
                <Col md={3}>
                    <img
                       width={'100%'} className='rounded'
                        src={selectedRestuarant[0]?.photograph} alt=""></img>
                </Col>
                <Col md={7} className='px-5'>
                    <hr />
                    <h4 className='text-center'>
                        <span className='text-warning'> Restaurant</span>  Details
                    </h4>
                    <hr />
                    <ListGroup>
                        <ListGroup.Item className='text-center p-3'>Restaurant Name:<span className='ms-2 text-primary'>{selectedRestuarant[0].name}</span></ListGroup.Item>
                        <ListGroup.Item>Neibourhood:<span className='ms-3 text-primary'>{selectedRestuarant[0].neighborhood}</span></ListGroup.Item>
                        <ListGroup.Item>Cusine Type:<span className='ms-3 text-primary'>{selectedRestuarant[0].cuisine_type}</span></ListGroup.Item>
                        <ListGroup.Item>Address:<span className='ms-3 text-primary'>{selectedRestuarant[0].address}</span></ListGroup.Item>
                        <ListGroup.Item className='text-center p-3 mb-2'>
                            <button  onClick={handleShow}className='btn btn-warning'>Operating Hours
                           
                            </button>
                            <RestReview  selectedRestuarant={selectedRestuarant?.selectedRestuarant}/>
                       
                       
                       
                        </ListGroup.Item>


                    </ListGroup>
                </Col>
                <Col md={1}>
                
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <ListGroup>
      <ListGroup.Item>Monday:<span className='text-primary ms-3'>{selectedRestuarant[0].operating_hours.Monday}</span></ListGroup.Item>
      <ListGroup.Item>Tuesday:<span className='text-primary ms-3'>{selectedRestuarant[0].operating_hours.Tuesday}</span></ListGroup.Item>
      <ListGroup.Item>Wensday:<span className='text-primary ms-3'>{selectedRestuarant[0].operating_hours.Wednesday}</span></ListGroup.Item>
      <ListGroup.Item>Thursday:<span className='text-primary ms-3'>{selectedRestuarant[0].operating_hours.Thursday}</span></ListGroup.Item>
      <ListGroup.Item>Friday:<span className='text-primary ms-3'>{selectedRestuarant[0].operating_hours.Friday}</span></ListGroup.Item>
    </ListGroup>



        </Modal.Body>
       
      </Modal>
      <div className='d-flex justify-content-center align-items-center'>
       
      </div>

            

          

        </>
    )
}

export default RestView
