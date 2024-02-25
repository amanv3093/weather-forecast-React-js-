//https://api.weatherapi.com/v1/current.json?key=d482458f41ee4154bf0101115242402&q=London&aqi=no

let url='https://api.weatherapi.com/v1/current.json?key=d482458f41ee4154bf0101115242402';
export let getWeatherData=async (city)=>{
    let response=await fetch(`${url}&q=${city}&aqi=yes`);
    return await response.json();

}

export let getLocation=async (lat,long)=>{
    let response=await fetch(`${url}&q=${lat},${long}&aqi=yes`);
    return await response.json();

}