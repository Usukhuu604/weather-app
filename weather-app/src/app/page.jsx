"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import { Search } from "./components/Search";
import { ShowDayTime } from "./components/ShowDayTime";
import { ShowNightTime } from "./components/ShowNightTime";

import styles from "@/app/styles/page.module.css";

const HomePage = () => {
  const [cityName, setCityName] = useState("Ulaanbaatar");

  useEffect(() => {
    const weatherKey = process.env.WEATHERAPIKEY;

    const response = async () => {
      const { data } = await axios(
        // "https://countriesnow.space/api/v0.1/countries"
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${cityName}`
      );
      console.log({ data });
    };
    response();
  }, []);

  return (
    <div className={styles.homepage}>
      <Search cityName={cityName} setCityName={setCityName} />
      <ShowDayTime />
      <ShowNightTime />
    </div>
  );
};

export default HomePage;
