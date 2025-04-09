"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import { Search } from "./components/Search";
import { ShowDayTime } from "./components/ShowDayTime";
import { ShowNightTime } from "./components/ShowNightTime";
import { CitySuggestion } from "./components/CitySuggestion";

import styles from "@/app/styles/page.module.css";

const HomePage = () => {
  const [cityName, setCityName] = useState("Ulan Bator");

  // useEffect(() => {
  //   const weatherKey = process.env.WEATHERAPIKEY;

  //   const response = async () => {
  //     try {
  //       const { data } = await axios(
  //         // "https://countriesnow.space/api/v0.1/countries"
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
    <div className={styles.homepage}>
      <Search cityName={cityName} setCityName={setCityName} />
      <CitySuggestion />
      <ShowDayTime />
      <ShowNightTime />
    </div>
  );
};

export default HomePage;
