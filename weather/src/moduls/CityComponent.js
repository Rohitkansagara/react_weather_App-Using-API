// CityComponent.js

import { useState } from "react";
import styled from "styled-components";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
  border: 2px solid #3498db; /* Border color for a nice contrast */
  border-radius: 50%; /* Circular border radius */
`;

const ChooseCityLabel = styled.span`
  color: #333; /* Dark text color */
  font-size: 22px; /* Larger font size for emphasis */
  font-weight: bold;
  margin: 10px auto;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: 2px solid #3498db; /* Border color */
  border-radius: 4px; /* Rounded corners */
  color: #333;
  font-size: 18px;
  font-weight: bold;
  margin: 20px auto;
  padding: 10px; /* Padding for better visual appeal */

  & input {
    flex: 1; /* Take up remaining space */
    padding: 10px;
    font-size: 14px;
    outline: none;
    border: none;
    font-weight: bold;
  }

  & button {
    padding: 10px;
    font-size: 14px;
    outline: none;
    color: white;
    background-color: #3498db; /* Button color */
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px; /* Rounded corners */
  }
`;

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;

  return (
    <>
      <WeatherLogo src="./icons/perfect-day.svg" />
      <ChooseCityLabel>Find Weather of Your City</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          placeholder="Enter Your City Name Here"
          onChange={(e) => updateCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
