import React from 'react';
import './Forecast.css';


const Forecast = ({forecastWeather}) => {

    return(
        <div>            
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        {/* <div className="col-8" style={{height: '700px', overflow-y: 'scroll'}}> */}
                        <div className="col-8">
                                <h3 className="mt-3 mb-3 text-center" id="heading">5 day forecast for {forecastWeather[0].city}</h3>

                                <table className="table table-striped mt-3 mb-3">
                                    <thead>
                                    <tr>
                                        <th scope="col">Max temp &deg;C</th>
                                        <th scope="col">Min temp &deg;C</th>
                                        <th scope="col">Average temp &deg;C</th>
                                        <th scope="col">Mode temp(s) &deg;C</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>                
                                        <td>{forecastWeather[0].tempMax}</td>
                                        <td>{forecastWeather[0].tempMin}</td>
                                        <td>{forecastWeather[0].averageTempRounded}</td>
                                        <td>{forecastWeather[0].mode}</td>
                                    </tr>
                                    </tbody>
                                </table>

                                <button className="btn btn-sm btn-info mb-3 float-right"><a href='/' style={{color: 'white'}}>Home</a></button>

                        <div className="table-wrapper-scroll-y my-custom-scrollbar">
                            <table className="table table-striped">
                                {/* <thead style="position: sticky; top: 0">                                 */}
                                <thead>                                
                                    <tr>
                                        <th scope="col">Date and time</th>                    
                                        <th scope="col">Predicted temp</th>
                                        <th scope="col">Predicted Weather</th>               
                                        <th scope="col"></th>               
                                    </tr>                                
                                </thead>
                                <tbody>
                                {forecastWeather[0].forecast.map(function(w){
                                    return (
                                <tr>
                                    <td>{w.dt_txt}</td>                    
                                    <td>{w.main.temp}</td>
                                    <td>{w.weather[0].description}</td>                                        
                                    <td><img src={`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} height="30" width="30" alt="weather icon" /></td>                                        
                                    {/* <td>{w.weather[0].icon}</td>                                         */}
                                </tr>);
                                })}                                                                  
                                </tbody>
                            </table>       
                        </div>  

                    </div>
                </div>
                </div>
        </div>
    )};


export default Forecast;