import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, ButtonGroup, Button, Dropdown, DropdownButton } from "react-bootstrap";
import RecordsList from "../components/Records/RecordsList";
import ModalAdd from "../components/Modals/ModalAdd";
import instance from "../httpClient";
import '../css/home.css';

const Home =()=>{
    let recordDefault = {concept:'', amount:0, date:'', type:'0'};
    const [howManyRecords, setHowManyRecords] = useState('All');
    const [type, setType] = useState('All');
    const [showList, setShowList] = useState('All');
    const [show,setShow] = useState(false);
    const [recordData, setRecordData] = useState(recordDefault);
    const [recordsList, setRecordsList] = useState([]);
    const [total, setTotal] = useState(0);
    const [errors, setErrors] = useState({});

    useEffect(  () => {
            if(showList == 'All'){
                getRecords();
            } else{
         }
    }, [recordsList]);

    //Modals
    const openModal =()=> {
        setShow(true);
    }
    const handleCloseModal =()=> {
        setShow(false);
    }

    //Forms
    const handleChange =(property, value)=> {
        setRecordData({...recordData, [property]: value })
        if(errors[property]){
            setErrors({...errors, [property] : null})
        }
    }
    const handleSubmit =(e)=> {
        e.preventDefault();
        const newErrors = errorsExist();
        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
        } else {
            addRecord();
        }
    }

    //Errors
    const errorsExist =()=> {
        const { concept, amount, date } = recordData;
        const newErrors = {};
        if(!concept || concept == ''){
            newErrors.concept = 'Concept is required';
        }
        if(!amount || amount == ''){
            newErrors.amount = 'Amount is required';
        }
        if(!date || date == ''){
            newErrors.date = 'Date is required';
        }
        return newErrors;
    }

    //Methods
    const getRecords =()=> {
        instance.get(`/records`)
            .then(response => {
                setRecordsList(response.data[1].records);
                setTotal(response.data[0].total);
            });
    }
    const addRecord =()=> {
        instance.post('/record', recordData);
        handleCloseModal();
        getRecords();
    }
    const getRecordsByType =(type)=> {
        instance.get(`/records/${type}`)
        .then(response => {
            setRecordsList(response.data[1].records);
            setTotal(response.data[0].total);
        });
    }

    //Buttons
    const listingRecords =(value)=> {
        setHowManyRecords(value);
    }
    const showByType =(type)=> {
        setType(type);
        if(type == '0' || type == '1'){
            setShowList(type);
            getRecordsByType(type);
        }
        else {
            setShowList('All');
            getRecords();
        }
    }
    
    return(
        <>
            <Container   >
                <Row  >
                    <Col className='header'>
                        {`Total: ${total} `}
                    </Col>
                    <Col className="header" >
                        <DropdownButton title={`${type} operations`}>
                            <Dropdown.Item  onClick={event => showByType('1')} >Income</Dropdown.Item>
                            <Dropdown.Item  onClick={event => showByType('0')} >Expenses</Dropdown.Item>
                            <Dropdown.Item  onClick={event => showByType('All')} >All</Dropdown.Item>
                        </DropdownButton>                  
                    </Col>
                    <Col>
                        <DropdownButton title={`Listing ${howManyRecords} records`}>
                            <Dropdown.Item  onClick={event => listingRecords('10')} >10</Dropdown.Item>
                            <Dropdown.Item  onClick={event => listingRecords('20')} >20</Dropdown.Item>
                            <Dropdown.Item  onClick={event => listingRecords('30')} >30</Dropdown.Item>
                            <Dropdown.Item  onClick={event => listingRecords('All')} >All</Dropdown.Item>
                        </DropdownButton> 
                    </Col>
                </Row>
            </Container>
            <Container>
                <RecordsList 
                className='header'
                data={(howManyRecords == 'All') ? recordsList : recordsList.slice(0, parseInt(howManyRecords)) }
                />
                <ModalAdd
                show={show}
                onHide={handleCloseModal}
                record={recordData}
                handleChange={handleChange}
                errors={errors}
                handleSubmit={handleSubmit}
                />
                <Row >
                    <Col className="header" >
                        <Button  onClick={openModal} >+</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;