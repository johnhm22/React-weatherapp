require('dotenv').config();


const BASE_URL = 'https://api.openweathermap.org/data/2.5';


module.exports = {
    PORT: process.env.PORT,
    API_KEY: process.env.API_KEY,
    BASE_URL,
};