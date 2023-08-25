import { Link } from "react-router-dom"
import WeatherForecast from "./Weather";
import React, { useState, useEffect } from 'react';

function HeroSection (){
    const [forecastData, setForecastData] = useState([]);


    const apiKey = "e8180095b41a57e35b2475389e6bea21";
    // const numDays = 5;
    // const lat="40.38"
    // const lon="104.56"
    // const cityName= "Kersey"
    // const stateCode="US-CO"
    // const countryCode="3166-2"

        let weekly = []

    const fetchData = async () =>{
    try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=40.42&lon=-104.70&units=metric&appid=${apiKey}`)
        const data = await response.json();

        // const forecastList=data.list
        for (var i = 0; i < data.list.length; i += 8) {
          weekly.push(data.list[i])
        }
        setForecastData(weekly)

        console.log("Weekly",weekly)
        }catch(error){
        console.error('Error fetching forecast data', error);
        }
        
}
        // setForecastData(data.list.slice(1, 7));

useEffect(() => {
    fetchData();
}, []);

    return (
      <header className="masthead ">
        <div className="container">
          <div className="masthead-heading text-uppercase">
            Rocky Mountain Skydive
          </div>
          <div className="masthead-subheading text-uppercase">
            Change Your Altitude!
          </div>
          <Link className="btn btn-primary btn-xl text-uppercase" to="/form">
            Book Now
          </Link>
        </div>
        <h2>5-Day Weather Forecast</h2>
        <div className="h-56 grid grid-cols-5 mb-4 content-between">
          {forecastData.map((forecast, index) => (
            <div key={index}>
              <p>Date: {forecast.dt_txt}</p>
              <p>Temperature: {(forecast.main.temp * 9/5 +32)}F</p>
              {forecast.weather.map((weather,index) => (
              <img key={index} src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weather-icon" className="w-20 h-20 text-gray-800 ml-48 dark:text-white`"/>
          ))}
            </div>
          ))}
        </div>
      </header>
    );

}

export default HeroSection
