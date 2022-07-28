import React from "react";
import { Table } from "react-bootstrap";
import Records from "./Records";
import '../../css/home.css';

const RecordsList =(props)=> {
    const list = props.data.map(
        (i, index)=>(
            <Records 
            key = {index} 
            id={i.id}
            amount = {i.amount} 
            date = {i.date} 
            type = {i.type}
            concept = {i.concept}
            />
    )
    );
    
    return(
        <>
            <Table bordered hover >
                <thead >
                    <tr>
                    <th scope='col' >Concept</th>
                    <th scope='col' >Amount</th>
                    <th scope='col' >Date</th>
                    <th scope='col' >Type</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </Table>
        </>
    );

}



export default RecordsList;