const express = require('express');
const connectDB = require('./src/config/db');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();



const PORT = process.env.PORT || 8000;


//importing routes


const app = express();
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});


