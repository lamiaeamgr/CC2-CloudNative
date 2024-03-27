const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5002;
Users_URL_MONGOOSE=process.env.Users_URL_MONGOOSE;
Events_URL_MONGOOSE=process.env.Events_URL_MONGOOSE;
const axios = require('axios');
const InscModel = require('./model');

const app = express();
app.use(cors());
app.use(express.json());



app.post('/AddInsc/:user_id/:event_id', async (req, res)=>{
    const {user_id, event_id} = req.params;

    const user = axios.get(Users_URL_MONGOOSE+user_id);
    const event = axios.get(Users_URL_MONGOOSE+event_id);
    if(user && event){
        await InscModel.create({
            user_id,
            event_id
        })
        .then(insc => res.json(insc))
        .catch(err => res.json(err))
    }else{
        res.json('utilisateur ou evenement non existe !')
    }
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})