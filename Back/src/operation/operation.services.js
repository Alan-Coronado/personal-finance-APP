const { 
    getRecords : getRecordsDAL, 
    getRecordById : getRecordByIdDAL, 
    getRecordsByType: getRecordsByTypeDAL, 
    createRecord : createRecordDAL, 
    updateRecordById : updateRecordByIdDAL, 
    deleteRecordById : deleteRecordByIdDAL 
} = require('./operation.DAL');

//Gets
const getRecords =async()=> {
    try {
        const response = await getRecordsDAL();
        const records = [];
        let total = 0;
        for(let i=0; i<response.rows.length; i++){
            if(response.rows[i].type_operation){
                total += parseFloat(response.rows[i].amount_operation);
            } else {
                total -= parseFloat(response.rows[i].amount_operation);
            }
            let item = {
                id : response.rows[i].id_operation,
                concept : response.rows[i].concept_operation,
                amount : response.rows[i].amount_operation,
                date : response.rows[i].date_operation,
                type : ((response.rows[i].type_operation)? "Income" : "Expenses")
            };
            records.push(item);
        }
        const DTO = [
            {total : total.toFixed(2)},
            {records : records}
        ];
        return (DTO);
    } catch (error) {
        console.log(error);
    }
}
const getRecordById =async(props)=> {
    try {
        const {id} = props; 
        const operationDTO = {
            id : id
        };
        const response = await getRecordByIdDAL(operationDTO);
        const DTO = response.rows;
        return (DTO);
    } catch (error) {
        console.log(error);
    }
}
const getRecordsByType =async(props)=> {
    try {
        const {type} = props;
        const operationDTO = {
            type : type
        };
        const response = await getRecordsByTypeDAL(operationDTO);
        const records = [];
        let total = 0;
        for(let i=0; i<response.rows.length; i++){
            if(response.rows[i].type_operation){
                total += parseFloat(response.rows[i].amount_operation);
            } else {
                total -= parseFloat(response.rows[i].amount_operation);
            }
            let item = {
                id : response.rows[i].id_operation,
                concept : response.rows[i].concept_operation,
                amount : response.rows[i].amount_operation,
                date : response.rows[i].date_operation,
                type : ((response.rows[i].type_operation)? "Income" : "Expenses")
            };
            records.push(item);
        }
        const DTO = [
            {total : total.toFixed(2)},
            {records : records}
        ];
        return DTO;
    } catch (error) {
        console.log(error);
    }
}

//Post
const createRecord =async(props)=> {
    try {
        const { concept, amount, date, type } = props;
        const operationDTO = {
            concept : concept,
            amount : amount,
            date : date,
            type : type
        };
        const response = await createRecordDAL(operationDTO);
        const DTO = response.rows;
        return DTO;
    } catch (error) {
        console.log();
    }
}

//Put
const updateRecordById =async(props)=> {
    try {
        const {id, concept, amount, date} = props;
        const operationDTO = {
            id : id,
            concept : concept,
            amount : amount,
            date : date
        };
        console.log(operationDTO);
        const response = await updateRecordByIdDAL(operationDTO);
        const DTO = response.rows;
        return DTO;
    } catch (error) {
        console.log(error);
    }
}

//Delete
const deleteRecordById =async(props)=> {
    try {
        const {id} = props;
        const operationDTO = {
            id: id
        };
        const response = await deleteRecordByIdDAL(operationDTO);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = ({
    getRecords,
    getRecordById,
    getRecordsByType,
    createRecord,
    updateRecordById,
    deleteRecordById
})