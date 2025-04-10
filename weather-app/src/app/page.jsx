"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import { ShowDayTime } from "./components/ShowDayTime";
import { ShowNightTime } from "./components/ShowNightTime";

import styles from "@/app/styles/page.module.css";

const HomePage = () => {
  const [cityName, setCityName] = useState("Ulan Bator");

  // useEffect(() => {
  //   const weatherKey = process.env.WEATHERAPIKEY;

  //   const response = async () => {
  //     try {
  //       const { data } = await axios(
  //         `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${cityName}`
  //       );
  //       console.log({ data });
  //     } catch (error) {
  //       console.error("api error: ", weatherKey);
  //     }
  //   };
  //   response();
  // }, []);

  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <ShowDayTime cityName={cityName} setCityName={setCityName} />
      <ShowNightTime />
    </div>
  );
};

export default HomePage;
