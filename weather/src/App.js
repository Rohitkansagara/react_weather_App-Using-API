// App.js

import styled from "styled-components";
import CityComponent from "./moduls/CityComponent";
import WeatherComponent from "./moduls/WeatherInfoComponent";
import React, { useState } from "react";
import Axios from "axios";

export const WeatherIcons = {
  
  "01d": "/icons/sunny.svg",
  "01n": "/icons/night.svg",
  "02d": "/icons/day.svg",
  "02n": "/icons/cloudy-night.svg",
  "03d": "/icons/cloudy.svg",
  "03n": "/icons/cloudy.svg",
  "04d": "/icons/perfect-day.svg",
  "04n": "/icons/cloudy-night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/rain-night.svg",
  "10d": "/icons/rain.svg",
  "10n": "/icons/rain-night.svg",
  "11d": "/icons/storm.svg",
  "11n": "/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #f5f5f5;
  font-family: 'Montserrat', sans-serif;
`;

const AppLabel = styled.span`
  color: #333;
  margin: 20px auto;
  font-size: 24px;
  font-weight: bold;
  color:green;
  border-color:dark black;
`;

const ErrorMsg = styled.div`
  color: #ff6347;
  margin-bottom: 15px;
  font-size: 14px;
`;
const API_KEY="fe4feefa8543e06d4f3c66d92c61b69c";

function App() {
  const [city, updateCity] = useState("");
  const [weather, updateWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (e) => {
    e.preventDefault();

    if (!city) {
      setError("Please enter a city name");
      return;
    }

    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      updateWeather(response.data);
      setError(null);
    } catch (error) {
      setError("Error fetching weather data");
    }
  };

  return (
    <Container>
      <AppLabel>Welcome To Weather App</AppLabel>

      {error && <ErrorMsg>{error}</ErrorMsg>}

      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
