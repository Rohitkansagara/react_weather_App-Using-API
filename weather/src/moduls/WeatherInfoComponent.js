// WeatherComponent.js

import styled from 'styled-components';
import React from 'react';
import { WeatherIcons } from '../App';

export const WeatherInfoIcons = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  Wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 30px auto;
  padding: 20px;
  border-radius: 15px;
  background-color: #2c3e50; /* Dark blue background color */
  color: black; /* White text color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle box shadow */
`;

const Condition = styled.span`
  margin: 20px auto;
  font-size: 24px;
  font-weight: bold;
  color:white; /* Light grey text color */

  & span {
    font-size: 40px;
  }
`;

const WeatherLogo = styled.img`
  width: 120px;
  height: 120px;
  margin: 5px auto;
  border-radius: 50%;
`;

const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
  color: black /* Light grey text color */
`;

const WeatherInfoLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 10px;
  text-align: start;
  width: 90%;
  color: green /* Light grey text color */
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin: 10px;
  color: black /* Light grey text color */

  & span {
    font-size: 14px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const WeatherComponent = (props) => {
  const { weather } = props;
  const isday = weather?.weather[0].icon?.includes('d');
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`;
  };

  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          {`  |  ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]}></WeatherLogo>
      </WeatherCondition>
      <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
      <WeatherInfoLabel>Weather info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent name={isday ? 'sunset' : 'sunrise'} value={`${getTime(weather?.sys[isday ? 'sunset' : 'sunrise'])}`} />
        <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
        <WeatherInfoComponent name="Wind" value={weather?.wind?.speed} />
        <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />
      </WeatherInfoContainer>
    </>
  );
};

export default WeatherComponent;
