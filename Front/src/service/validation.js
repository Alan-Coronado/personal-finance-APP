import { ToggleButtonGroup } from 'react-bootstrap';
import * as yup from 'yup';

    const validateRecord = yup.object().shape({
        concept : yup.string().required(),
        amount : yup.number().required().positive(), 
        date: yup.date().required(),
        type : yup.string().required()
    });

export default validateRecord;