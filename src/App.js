import logo from './logo.svg';
import './App.css';
import Card from './Componenets/Card';
import Input from './Componenets/Input';
import Button from './Componenets/Button';
import { useWeather } from './Context/Weather';
import { useEffect } from 'react';
function App() {
  let weather=useWeather();
  useEffect(()=>{
    weather.userCurrentLocation();
  },[])
  return (
    <div className="App">
    <h1>Weather Forecast</h1>
    <div className="input-box">
    <Input />
    <Button class="button-37" value="Search" onClick={weather.fetchData}/>
    </div>
    <Card />
    <div className='resetBtnBox'>
    <Button value="Refresh" onClick={weather.userCurrentLocation}/>
    </div>
  
    </div>
  );
}

export default App;
//Api key d482458f41ee4154bf0101115242402