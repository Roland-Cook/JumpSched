import { Link } from "react-router-dom"
import WeatherForecast from "./Weather";
import React, { useState, useEffect } from 'react';

function HeroSection (){


    const apiKey = "e8180095b41a57e35b2475389e6bea21";
    // const numDays = 5;
    // const lat="40.38"
    // const lon="104.56"
    // const cityName= "Kersey"
    // const stateCode="US-CO"
    // const countryCode="3166-2"

    const[forecastData, setForecastData]=useState([]);


    const fetchData = async () =>{
    try {
        const response = await fetch (`api.openweathermap.org/data/2.5/forecast?lat=40.42&lon=-104.70&appid=${apiKey}`)
        const data = await response.json();
        console.log("weather",data)

        // const forecastList=data.list
        setForecastData(data);
        }catch(error){
        console.error('Error fetching forecast data', error);
        }
}

useEffect(() => {
    fetchData();
}, []);

    return(
        <header className="masthead">
            <div className="container">
                <div className="masthead-heading text-uppercase">Rocky Mountain Skydive</div>
                <div className="masthead-subheading text-uppercase">Change Your Altitude!</div>
                <Link className="btn btn-primary btn-xl text-uppercase" to="/form">Book Now</Link>
            </div>
            <div>
            <h2>7-Day Weather Forecast</h2>
                {forecastData.map((forecast,index)=>(
                    <div key={index}>
                        <p>Date:{forecast.daily}</p>
                        <p>Temperature:{forecast.main.temp}F'</p>
                    </div>
            ))}
        </div>
</header>
);

}

export default HeroSection
