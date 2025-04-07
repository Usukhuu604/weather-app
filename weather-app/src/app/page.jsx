"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [cityName, setCityName] = useState("Ulaanbaatar");

  useEffect(() => {
    const weatherKey = process.env.WEATHERAPIKEY;
    console.log({ weatherKey });

    const response = async () => {
      const { data } = await axios(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${cityName}`
      );
      console.log({ data });
    };
    response();
  }, [cityName]);

  return (
    <div>
      <input type="text" />
      <div></div>
    </div>
  );
};

export default HomePage;
