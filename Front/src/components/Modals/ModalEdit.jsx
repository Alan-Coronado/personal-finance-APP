import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalEdit =(props)=>{
    const {show, onHide, handleDelete, record, handleChange, handleSubmit } = props;
    const {id, concept, amount, date, type} = record;

    return(
        <>
            <Modal 
            show={show} 
            onHide={onHide}
            centered={true} 
            backdrop="static" 
            keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Record</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Concept</Form.Label>
                            <Form.Control type="text" value={concept} onChange={ (e)=>(handleChange("concept" ,e.target.value)) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="number" value={amount} onChange={ (e)=>(handleChange("amount" ,e.target.value)) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date of the operation</Form.Label>
                            <Form.Control type="date" value={date} onChange={ (e)=>(handleChange("date", e.target.value)) } />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Type</Form.Label>
                            <Form.Control value={type} readOnly>
                            </Form.Control>
                            <Form.Text>The operation can't be changed</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete} >Delete</Button>
                    <Button variant="primary" onClick={handleSubmit} >Edit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default ModalEdit;