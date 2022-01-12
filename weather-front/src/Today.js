import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Today = ({todaysWeather, getForecast}) => {


    const navigate = useNavigate();


    const handleGetForecast = async (city) => {        
        await getForecast(city);
        navigate('/forecast');
    }


    return(
        <div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="card">
                            <img className="card-img-top" src="https://media.istockphoto.com/photos/heat-wave-concrept-picture-id1243760572?b=1&k=20&m=1243760572&s=170667a&w=0&h=pOyTDNjkgMUyr9bw6ig1X-7yEdWHIzSGwY83_W2hXEw=" />
                            <div className="card-body">
                            <h5 className="card-title">Today's weather for {todaysWeather[0].city}</h5>
                            <p className="card-text">Minimum temperature: {todaysWeather[0].temp_min} &deg;C</p>
                            <p className="card-text">Maximum temperature: {todaysWeather[0].temp_max} &deg;C</p>
                            <p className="card-text">Current temperature: {todaysWeather[0].temp} &deg;C</p>
                            <p className="card-text">Expect: {todaysWeather[0].weather}</p>                            
                            <button className='btn btn-sm btn-success mr-3'><Link to='/' style={{color: 'white'}}>Home</Link></button> 
                            <button className='btn btn-sm btn-info ml-3' onClick={()=>handleGetForecast(todaysWeather[0].city)} >5-day forecast</button>                           
                            </div>
                        </div>
                    </div>        
                </div>
                
            </div>
        </div>
    )

};

export default Today;