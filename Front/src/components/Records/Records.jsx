import React from "react";
import { useState } from "react";
import instance from "../../httpClient";
import ModalEdit from "../Modals/ModalEdit";

const Records=(props)=>{
    const {id, concept, amount, date, type} = props;
    let recordInit = {id: id, concept: concept, amount: amount, date: date, type: type};
    const [recordData, setRecordData] = useState(recordInit);
    const [show,setShow] = useState(false);
    const [onHide,setOnHide] = useState(false);

    //Modals
    const openModal=()=>{
        setShow(true);
    }
    const handleCloseModal =()=>{
        setShow(false);
    }

    //Forms
    const handleChange =(property, value)=> {
        setRecordData({...recordData, [property] : value});
    }    
    const handleSubmit =(e)=> {
        e.preventDefault();
        updateRecord(recordData.id);
    }
    const handleDelete =(e)=> {
        instance.delete(`/record/${recordData.id}`);
        handleCloseModal();
    }

    //Methods
    const updateRecord =(id)=> {
        instance.put(`/record/${id}`, recordData);
        handleCloseModal();
    }

    return(
        <>
            <tr action onClick={openModal}>
                <td>{concept}</td>
                <td>{amount}</td>
                <td>{date}</td>
                <td>{type}</td>
            </tr>
            <ModalEdit
            show={show}
            onHide={handleCloseModal}
            handleDelete={handleDelete} 
            record={recordData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            >
            </ModalEdit>
        </>
    );
}

export default Records;