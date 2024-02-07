This is a simple weather application built using React and styled-components. The app allows users to search for the current weather conditions of a specific city. It fetches real-time weather data from the OpenWeatherMap API.

demo picture:

![image](https://github.com/Rohitkansagara/react_weather_App-Using-API/assets/140929714/85a99bec-f520-4b35-8162-5f3774f2e2a5)

second picture:
![image](https://github.com/Rohitkansagara/react_weather_App-Using-API/assets/140929714/f75f5a49-7739-4df4-9ac9-a8193dc7bd2b)





Features
City Search: Users can enter the name of the city they want to check the weather for.
Real-time Data: The app fetches real-time weather data using the OpenWeatherMap API.
Stylish UI: The application has a clean and stylish user interface, making it easy to use and visually appealing.

Getting Started
To run the app locally, follow these steps:

1)Clone the repository:
git clone https://github.com/Rohitkansagara/react_weather_App-Using-API.git

2)Install dependencies:
cd weather-app
npm install

3)Obtain an API key from OpenWeatherMap and replace the placeholder API_KEY in App.js with your key:
const API_KEY = "fe4feefa8543e06d4f3c66d92c61b69c";

4)Run the app:
npm start

This will start the development server, and you can view the app at http://localhost:3000 in your browser.

Dependencies
React: A JavaScript library for building user interfaces.
styled-components: A CSS-in-JS library for styling React components.
Axios: A promise-based HTTP client for the browser and Node.js.

Structure
App.js: The main component that orchestrates the overall structure of the app, handles user input, and fetches weather data.
CityComponent.js: Component for displaying the city search input box.
WeatherComponent.js: Component for displaying the weather information, including temperature, weather conditions, and additional details.
Icons: Contains weather icons used in the application.

Libraries used
styled-components
axios
react-scripts

APIs Used
Open Weather APIs

https://openweathermap.org/current

API Info
Method: GET
URL: https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}


