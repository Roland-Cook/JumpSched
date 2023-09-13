import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';



function HeroSection (){
    
    const [forecastData, setForecastData] = useState([]);

    const apiKey = process.env.OPEN_WEATHER_API_KEY

    let weekly = []

    const fetchData = async () =>{
        try {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=40.42&lon=-104.70&units=metric&appid=${apiKey}`)
        const data = await response.json();


        for (var i = 0; i < data.list.length; i += 8) {
        weekly.push(data.list[i])
        }
        setForecastData(weekly)

        }catch(error){
        console.error('Error fetching forecast data', error);
        }

}

useEffect(() => {
    fetchData();
});

    return (
        <header className="masthead">


        <div className="container">
        <div className="masthead-heading text-uppercase mt-5">
            Rocky Mountain Skydive
        </div>
        <div className="masthead-subheading text-uppercase">
            Change Your Altitude!
        </div>
        <Link className="btn btn-primary btn-xl text-uppercase" to="/form">
            Book Now
        </Link>
        </div>
        {/* <h2 className="forecast-title">5-Day Weather Forecast</h2> */}
        <div className="h-20 flex flex-wrap mb-10 weather-days">
        {forecastData.map((forecast, index) => (
            <div key={index} className="flex-grow flex flex-col">
            <p>Date: {forecast.dt_txt.split('-')[1]}-{forecast.dt_txt.split('-')[2].split(' ')[0]}</p>
              <p>Temperature: {Math.round(forecast.main.temp * 9/5 +32)}F</p>
            {forecast.weather.map((weather,index) => (
            <img key={index} src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="weather-icon" className="w-20 h-20 text-gray-800 dark:text-white mx-auto"/>
        ))}
            </div>
        ))}
    </div>
    </header>
    );

}

export default HeroSection
