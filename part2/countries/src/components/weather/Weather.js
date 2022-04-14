import axios from "axios";
import { useState, useEffect } from "react";

const Weather = (props) => {
  console.log(props.country.latlng);
  const { REACT_APP_API_KEY } = process.env;
  const lat = props.country.latlng[0];
  const lon = props.country.latlng[1];
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${REACT_APP_API_KEY}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lat, lon, REACT_APP_API_KEY]);

  return (
    <div style={{ marginTop: "90px" }}>
      <h1>Weather</h1>
      <div>
        <strong>Temperature:</strong> {weather && weather.main.temp}
      </div>
      <div>
        <strong>Humidity:</strong> {weather && weather.main.humidity}
      </div>
      <div>
        <strong>Wind:</strong> {weather && weather.wind.speed}
      </div>
      <img
        src={`http://openweathermap.org/img/w/${
          weather && weather.weather[0].icon
        }.png`}
        alt={`Weather icon of ${weather && weather.weather[0].description}`}
        style={{ width: "100px" }}
      />
    </div>
  );
};

export default Weather;
