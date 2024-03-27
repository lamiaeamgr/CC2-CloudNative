const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3012;
const URL_MONGOOSE = process.env.URL_MONGOOSE;
var app = express()

app.use(express.json());
mongoose.connect(URL_MONGOOSE, { useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', (err) => console.log(`Error connecting to database ${err}`));
db.once('open', () => console.log('Connected to Database'));

app.use('/', require('../auth-service/auth.js'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))