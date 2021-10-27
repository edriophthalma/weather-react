import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
    function handleWeather(response) {
        alert(`the weather in ${response.data.name} is just fine`);
    }
    let apiKey = "c5e04ad803ec417da869647e91a10830";
    let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleWeather);
return <header><h1>Weather</h1>
 <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={6000} //3 secs
      /></header>;}
