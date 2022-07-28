const {
    getRecords : getRecordsService, 
    getRecordById : getRecordByIdService, 
    getRecordsByType: getRecordsByTypeService, 
    createRecord : createRecordService, 
    updateRecordById : updateRecordByIdService, 
    deleteRecordById : deleteRecordByIdService
} = require('./operation.services');

//Get
const getRecords =async(req, res)=> {
    try {
        const response = await getRecordsService();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}
const getRecordById =async(req, res)=> {
    try {
        const {id} = req.params;
        const operationDTO = {
            id : id
        };
        const response = await getRecordByIdService(operationDTO);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}
const getRecordsByType =async(req, res)=> {
    try {
        const {type} = req.params;
        const operationDTO = {
            type : type
        };
        const response = await getRecordsByTypeService(operationDTO);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

//Post
const createRecord =async(req, res)=> {
    try {
        const {concept, amount, date, type} = req.body;
        const operationDTO = {
            concept : concept,
            amount : amount,
            date : date,
            type : type
        };
        const response = await createRecordService(operationDTO);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

//Put
const updateRecordById =async(req, res)=> {
    try {
        const {id} = req.params;
        const {concept, amount, date} = req.body;
        const operationDTO = {
            id : id,
            concept : concept,
            amount : amount,
            date : date
        };
        const response = await updateRecordByIdService(operationDTO);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

//Delete
const deleteRecordById =async(req, res)=> {
    try {
        const {id} = req.params;
        const operationDTO = {
        id : id
    };
    const response = await deleteRecordByIdService(operationDTO);
    res.status(200).json(response);
    } catch(error){
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