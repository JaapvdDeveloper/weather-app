import { useState } from 'react';
import './App.css';
import { FaTemperatureFull } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaCity } from "react-icons/fa6";
import { GiWhirlwind } from "react-icons/gi";
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = import.meta.env.VITE_URL; 

  const fetchData = async () => {
    if (!city) {
      setError("Please enter a city.");
      return;
    }

    const url = `${BASE_URL}weather?q=${city}&appid=${API_KEY}`;
    setIsLoading(true);
    setError('');

    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err.response ? err.response.data.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = () => {
    fetchData();
  };

  const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(2);
  return (
 
      <div className="container">
        <div className="full-screen-bg">
        <h1>Open Weer Applicatie</h1>
        <h2>Weer informatie op basis van uw locatie</h2>
        <div>
          <input 
            type="text" 
            name="city" 
            placeholder='Enter your city' 
            onChange={handleCityChange} 
            value={city}
          />
          <button className='btn' onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
  
        {error && <p className="error">{error}</p>}
  
        <div>
          <h3>Weer details</h3>
          <div className="flex">
            <h4><FaCity /></h4>
            <p>{city || "City"}</p>
          </div>
  
          {data ? (
            <>
              <div className="flex">
                <h4><FaTemperatureFull /></h4>
                <p>{kelvinToCelsius(data.main.temp)} &deg;C</p>
              </div>
  
              <div className="flex">
                <h4><WiHumidity /></h4>
                <h3>Luchtvochtigheid</h3>
                <p>{data.main.humidity} %</p>
              </div>
  
              <div className="flex">
                <h3>Windkract</h3>
                <h4><GiWhirlwind /></h4>
                <p>{data.wind.speed} km/h</p>
              </div>
            </>
          ) : (
            <p>Weather Details</p>
          )}
        </div>
      </div>
      </div>
 

  );
}
export default App;
