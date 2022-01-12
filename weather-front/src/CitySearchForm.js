import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './CitySearchForm.css';


const CitySearchForm = ({getTodaysWeather, getForecast}) => {

    const [city, setCity] = useState();

    let navigate = useNavigate();

    const handleChange = (e) => {        
        setCity(e.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();        
        handleGetTodaysWeather(city);
        setCity("");
    };

    const handleGetTodaysWeather = async (city) => {        
        await getTodaysWeather(city);
        navigate('/today');
    }

    const handleGetForecast = async (city) => {        
        await getForecast(city);
        navigate('/forecast');
    }

    

    return(
        <div className='container mt-5'>
            <h1 class="text-center mb-3 mt-3">Head in the clouds</h1>
            <h3 class="text-center mb-5 mt-3">Find the weather for your chosen city</h3>
            <div className='row justify-content-center'>
                <div className='col-6 text-center'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group row'>
                    <label htmlFor='search' className='col-form-label'>Search city</label>
                    <input id='search' className='form-control' name ='city' type ="text" placeholder = "enter city" value ={city} onChange = {handleChange} />
                    </div>
                    <div className='form-group row'>
                    <button className='btn btn-sm btn-info' onClick={()=>handleGetTodaysWeather(city)} >Today's weather</button>
                    <button className='btn btn-sm btn-info ml-3' onClick={()=>handleGetForecast(city)} >5-day forecast</button>                    
                    </div>
                </form>
                </div>
            </div>            
    </div>
    )
}

export default CitySearchForm;

