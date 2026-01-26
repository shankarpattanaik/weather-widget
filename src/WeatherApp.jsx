import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 21.51,
    humidity: 88,
    temp: 21.05,
    tempMax: 21.05,
    tempMin: 21.05,
    weather: "fog",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div className="weather-app">
      <h2>Weather App</h2>
      <SearchBox className="search-box" updateInfo={updateInfo} />
      <InfoBox className="info-box" info={weatherInfo} />
      <footer className="footer">
        Made with <span className="heart">❤️</span> by Shankar
      </footer>
    </div>
  );
}
