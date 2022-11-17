
import React from 'react'

function Weather() {

    var currentWeather = [];

    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
    .then((response) => response.json())
    .then((data) => {

        currentWeather = data[0].current_weather.time;
        console.log(currentWeather);
    
    })
    .catch(function(error) {
        console.log(error);
      });


  return (
    <b> {currentWeather} </b>
  )
}

export default Weather