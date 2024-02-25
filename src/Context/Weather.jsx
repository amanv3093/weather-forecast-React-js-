import { createContext, useContext, useState } from "react";
import { getWeatherData,getLocation } from '../api/index.js'; 

export let WeatherContext = createContext(null);

export let useWeather = () => {
    return useContext(WeatherContext);
}

export let WeatherProvider = (props) => {
    let [data, setData] = useState(null);
    let [city, setCity] = useState(null);

    let fetchData = async () => {
        try {
            let response = await getWeatherData(city);
            setData(response);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };
    let userCurrentLocation = async () => {
        navigator.geolocation.getCurrentPosition((positon)=>{
            getLocation(positon.coords.latitude,positon.coords.longitude).then((data)=>{
                setData(data)
            })
        })
    };


    return (
        <WeatherContext.Provider value={{ city, data, setCity, fetchData,userCurrentLocation }}>
            {props.children}
        </WeatherContext.Provider>
    );
}
