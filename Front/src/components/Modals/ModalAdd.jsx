import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { validateRecord } from "../../service/validation";

const ModalAdd =(props)=>{
    const {show, onHide, record, handleChange, errors, handleSubmit} =props;

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
                    <Modal.Title>Add Record</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*
                    <Formik
                    initialValues={{concept : record.concept, amount : record.amount, date : record.date, type : record.type}}
                    handleChange={handleChange}
                    
                    onSubmit={(values)=>console.log(values)}
                    >{ (props)=> (
                        <Form>
                            <Form.Group>
                                <Form.Label>Concept</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Salary" 
                                name="concept" 
                                onChange={props.handleChange} 
                                value={props.values.concept}/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Amount</Form.Label>
                                <Form.Control 
                                type="number" 
                                name="amount" 
                                onChange={props.handleChange} 
                                value={props.values.amount} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Date of the operation</Form.Label>
                                <Form.Control 
                                type="date" 
                                name="date" 
                                onChange={props.handleChange} 
                                value={props.values.date} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Type</Form.Label>
                                <Form.Select 
                                name="type" 
                                onChange={props.handleChange} 
                                value={props.values.type} >
                                    <option value="1" >Income</option>
                                    <option value="0" >Expenses</option>
                                </Form.Select>
                            </Form.Group>
                            <Button type="submit" variant="primary"  >Ok</Button>
                        </Form>)}
                    </Formik>
                    */} 
                    <Form>
                        <Form.Group>
                            <Form.Label>Concept</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="Salary" 
                            value={record.concept} 
                            onChange={(e)=>handleChange("concept", e.target.value)} 
                            isInvalid={errors.concept} />
                            <Form.Control.Feedback type='invalid'>
                                {errors.concept}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control 
                            type="number" 
                            value={record.amount} 
                            onChange={(e)=>handleChange("amount", e.target.value)} 
                            isInvalid={errors.amount} />
                            <Form.Control.Feedback type='invalid' >
                                {errors.amount}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date of the operation</Form.Label>
                            <Form.Control 
                            type="date" 
                            value={record.date} 
                            onChange={(e)=>handleChange("date", e.target.value)} 
                            isInvalid={errors.date} />
                            <Form.Control.Feedback type='invalid' >
                                {errors.date}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Type</Form.Label>
                            <Form.Select value={record.type} onChange={(e)=>handleChange("type", e.target.value)} >
                                <option value="1" >Income</option>
                                <option value="0" >Expenses</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={onHide}>Cancel</Button>
                    <Button variant="primary" onClick={handleSubmit} >Ok</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAdd;