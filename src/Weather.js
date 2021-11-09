import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(false);
  const [info, setInfo] = useState("");

  function displayWeather(response) {
    setResult(true);

    setInfo({
        name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function dataSearch(event) {
    event.preventDefault();
    let apiKey = "c5e04ad803ec417da869647e91a10830";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
      <table><tr>
    <td> 
        <h3 className="city-result">Weather forecast in {info.name}</h3></td> 
        <td>
    <form onSubmit={dataSearch}>
       <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    
    </form></td>
    </tr></table>
  );

  if (result) {
    return (
      <div>
        {form}
        <table>
            <tr>
            <td>
                <ul>
              <li><img src={info.icon} alt="icon" /></li>
              <li>{info.description}</li>  
              </ul>
            </td>
            <td>
              <p>
      <ul className="info-weather">
              <li>Temperature: <strong>{Math.round(info.temperature)}</strong>ºC</li>
            <li>Windspeed: {info.wind}Km/h</li>
              <li>Humidity: {info.humidity}%</li>
              
              </ul>
              </p>
              </td></tr>
          </table>
          <br/>
          <table>
              <tr >
                <td><ul>
                    <li>Fri</li>
                    <li><img src={info.icon} alt="icon" /></li>
                    <li>{info.description}</li>  
                    </ul>
                    </td>
                <td> <ul>
                    <li>Sat</li>
                    <li><img src={info.icon} alt="icon" /></li>
                    <li>{info.description}</li>  
                    </ul>
                    </td>
                <td> <ul>
                    <li>Sun</li>
                    <li><img src={info.icon} alt="icon" /></li>
                     <li>{info.description}</li>  
                     </ul></td>
                 <td><ul>
                     <li>Mon</li>
                    <li><img src={info.icon} alt="icon" /></li>
                     <li>{info.description}</li>  
                    </ul></td>
                 <td><ul>
                     <li>Tue</li>
                    <li><img src={info.icon} alt="icon" /></li>
                     <li>{info.description}</li>  
                     </ul></td>
              </tr>
          </table>
        
    <footer><a href="https://github.com/edriophthalma/weather-react.git" alt="Giulia's code">Open-source code by Giulia D'Angelo</a></footer>
    </div>
    ); }
  else {
    return <div>{form} <br/><footer><a href="https://github.com/edriophthalma/weather-react.git" alt="Giulia's code">Open-source code by Giulia D'Angelo</a></footer> </div> ;
  }
}
