const {pool} =require('../configuration_database');

const getRecords =async()=> {
    try {
        const response = await pool.query('SELECT * FROM operation ORDER BY id_operation DESC;');
        return (response);
    } catch (error) {
        console.log(error);
    }
}
const getRecordById =async(operationDTO)=> {
    try {
        const {id} = operationDTO;
        const response = await pool.query('SELECT * FROM operation WHERE id_operation = $1;', [id]);
        return (response);
    } catch (error) {
        console.log(error);
    }
}
const getRecordsByType =async(operationDTO)=> {
    try {
        const {type} = operationDTO;
        const response = await pool.query('SELECT * FROM operation WHERE type_operation=$1 ORDER BY id_operation DESC;', [type]);
        return response;
    } catch (error) {
        console.log(error);
    }
}

//Post
const createRecord =async(operationDTO)=> {
    try {
        const { concept, amount, date, type } = operationDTO;
        const response = await pool.query('INSERT INTO operation(concept_operation, amount_operation, date_operation, type_operation) VALUES ( $1, $2, $3, $4);', [ concept, amount, date, type]);
        return (response);
    } catch (error) {
        console.log(error);
    }
}

//Put
const updateRecordById =async(operationDTO)=> {
    try {
        const {id, concept, amount, date} = operationDTO;
        const response = await pool.query("UPDATE operation SET (concept_operation, amount_operation, date_operation) = ($1, $2, $3) WHERE id_operation = $4;", [concept, amount, date, id]);
        return (response);
    } catch (error) {
        console.log(error);
    }
}

//Delete
const deleteRecordById =async(operationDTO)=> {
    try {
        const {id} = operationDTO;
        const response = await pool.query("DELETE FROM operation WHERE id_operation=$1;", [id]);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getRecords,
    getRecordById,
    getRecordsByType,
    createRecord,
    updateRecordById,
    deleteRecordById
}