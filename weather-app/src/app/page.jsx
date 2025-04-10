"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import { ShowDayTime } from "./components/ShowDayTime";
import { ShowNightTime } from "./components/ShowNightTime";

const HomePage = () => {
  const [cityName, setCityName] = useState("Ulan Bator");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const weatherKey = process.env.WEATHER_API_KEY;

    const response = async () => {
      try {
        const { data } = await axios(
          `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${cityName}`
        );
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.error("api weatherKey error: ", weatherKey);
      }
    };
    response();
  }, [cityName]);

  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <ShowDayTime
        cityName={cityName}
        setCityName={setCityName}
        weatherData={weatherData}
      />
      <ShowNightTime weatherData={weatherData} />
    </div>
  );
};

export default HomePage;
