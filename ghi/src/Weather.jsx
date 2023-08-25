import React, { useState, useEffect } from 'react';

const WeatherForecast = () => {
const apiKey = env.WeatherForecast;
const city = 'Kersey';
const numDays = 7;

const [forecastData, setForecastData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        const forecastList = data.list.slice(0, numDays);
        setForecastData(forecastList);
    } catch (error) {
        console.error('Error fetching forecast data:', error);
    }
    };

    fetchData();
}, []);

return (
    <div className="weather-forecast">
    <h2>3-Day Weather Forecast</h2>
    {forecastData.map((forecast, index) => (
        <div key={index} className="forecast-item">
        <p>Date: {forecast.dt_txt}</p>
        <p>Temperature: {forecast.main.temp}°C</p>
        </div>
    ))}
    </div>
);
};

export default WeatherForecast;