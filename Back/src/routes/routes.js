const { Router } = require('express');
const router = Router();

const {
    getRecords, 
    getRecordById, 
    createRecord, 
    updateRecordById, 
    deleteRecordById, 
    getRecordsByType
} = require('../operation/operation.controllers');

router.get('/records', getRecords);
router.get('/record/:id', getRecordById);
router.get('/records/:type', getRecordsByType);
router.post('/record', createRecord);
router.put('/record/:id', updateRecordById);
router.delete('/record/:id', deleteRecordById);

module.exports = router;