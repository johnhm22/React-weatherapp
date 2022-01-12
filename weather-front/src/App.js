import React, {useState} from 'react';
import CitySearchForm from './CitySearchForm';
import Today from './Today';
import Forecast from './Forecast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import {createArrayOfTemps, calculateTempMax, calculateTempMin, averageTemp, calculateMode} from './helperFunctions.js';




const App = () => {
  
  const [todaysWeather, setTodaysWeather] = useState([]);
  
  const [forecastWeather, setForecastWeather] = useState([]);

 
  const getTodaysWeather = async(city) => {      
    const res = await axios({
      method: 'get',
      url: `http://localhost:3001/${city}/today`,
    });    
    setTodaysWeather(
      (todaysWeather) => {
      return [{city: res.data.name, temp: res.data.main.temp, temp_max: res.data.main.temp_max, 
      temp_min: res.data.main.temp_min, weather: res.data.weather[0].description}]
    });    
  };


  const getForecast = async(city) => {
    const res = await axios({
      method: 'get',
      url: `http://localhost:3001/${city}/forecast`,
    })    

    const forecast = res.data;

    let tempArray = createArrayOfTemps(forecast.list);    
    let tempMax = calculateTempMax(tempArray);
    let tempMin = calculateTempMin(tempArray);
    let tempAverage = averageTemp(tempArray);
    let averageTempRounded = tempAverage.toFixed(2);
    let mode = calculateMode(tempArray);

   setForecastWeather(
    (forecastWeather) => {
      return [{forecast: forecast.list, tempArray: tempArray, city: city, tempMax: tempMax, tempMin: tempMin, 
      averageTempRounded: averageTempRounded, mode: mode} ];
    });
  };
  
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CitySearchForm getTodaysWeather = {getTodaysWeather} getForecast={getForecast}/>} />                
        <Route exact path="/today" element={<Today getForecast={getForecast} todaysWeather={todaysWeather}/>} />
        <Route exact path="/forecast" element={<Forecast forecastWeather={forecastWeather}/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
