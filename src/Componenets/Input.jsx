import React from "react";
import {useWeather } from "../Context/Weather";
const Input=()=>{
    let Weather=useWeather();
    console.log(Weather);
    return(
        <input className="input-field" value={Weather.city} 
        onChange={(e)=>Weather.setCity(e.target.value)}/>
    )

}

export default Input;
