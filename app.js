const express = require('express');
const app = express();

app.use(express.json());


const FastDevLabs = require('./routes/FastDev');

app.use("/api/v1", FastDevLabs);




module.exports = app;