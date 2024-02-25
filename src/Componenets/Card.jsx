import React from "react";
import { useWeather } from "../Context/Weather";
import { useState } from "react";

const Card = () => {
    const  weather  = useWeather();
    const date = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const [todayDate, setTodayDate] = useState(date.toLocaleDateString(undefined, options));
   
    return (
        <div className="box2">
      <img src={weather.data?.current.condition.icon} alt="Weather Icon" />
      <p className="todayDate">{todayDate}</p>
      <h1 className="temp">{weather.data?.current?.temp_c}&deg;<span className="tempSpan" >{weather.data?.current.condition.text}</span></h1>
      <h3>{weather.data?.location?.name }</h3>
      
      <div className="weatherBox">

      <div className="boxes"><span class="material-symbols-outlined">water_drop</span><span>{weather.data?.current?.humidity}%</span> </div>

      <p className="line">|</p>

      <div className="boxes"><span class="material-symbols-outlined">air</span><span>{weather.data?.current?.wind_kph}kph</span></div>

      <p className="line">|</p>

      <div className="boxes"><span class="material-symbols-outlined">thermostat</span><span>{weather.data?.current?.feelslike_c}&deg;</span></div>

      
      </div>

      
      


      
      {/* ,{weather.data?.location?.region},
      {weather.data?.location?.name} */}

      


        </div>
    );
}

export default Card;
