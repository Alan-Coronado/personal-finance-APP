const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const cors = require('cors');
const router = require('./routes/routes');

const port = 3030;
const corsOptions={
    origin:"http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(router);

app.listen(process.env.PORT || port, ()=>{
    console.log(`Listen... in port ${port}`) 
} );
