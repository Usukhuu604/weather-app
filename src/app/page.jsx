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
        const { data } = await axios(`https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${cityName}`);
        setWeatherData(data);
        return;
      } catch (error) {
        console.error("api weatherKey error: ", weatherKey);
      }
    };

    response();
  }, [cityName]);

  return (
    <div className="flex w-full h-screen bg-gray-200 md:flex-row flex-col">
      <ShowDayTime cityName={cityName} setCityName={setCityName} weatherData={weatherData} />

      <div className="hidden md:flex absolute w-30 h-30 bg-white top-1/2 left-1/2 z-10 translate-x-[-50%] translate-y-[-50%] rounded-full items-center justify-center gap-4">
        <img src="Vector.png" alt="" className="w-10 h-20 rotate-180" />
        <img src="Vector.png" alt="" className="w-10 h-20" />
      </div>

      <ShowNightTime weatherData={weatherData} />
    </div>
  );
};

export default HomePage;
