const express = require("express");
const cors = require("cors");
const axios = require("axios");

const {
    API_KEY,
    BASE_URL,    
} = require('./config');


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/:city/today', async (req, res) => {
    const {city} = req.params;
try{
    const result = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const weather = result.data;

    return res.json(weather);
}
catch(e){
    console.log("e", e);
    console.log("Error in today's weather route");
}
});


app.get('/:city/forecast', async (req, res) => {
    const {city} = req.params;
try{
    const result = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
    const forecast = result.data;    
    return res.json(forecast);
}
catch(e){
    console.log("e", e);
    console.log("Error in forecast route");
}
});



module.exports = app;