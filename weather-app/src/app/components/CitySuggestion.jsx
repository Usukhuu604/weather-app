import React from "react";
import styles from "@/app/styles/page.module.css";
import axios from "axios";

import { useState, useEffect } from "react";

export const CitySuggestion = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios(
          "https://countriesnow.space/api/v0.1/countries"
        );

        const countryAndCities = data.data.map((obj) => {
          return { country: obj.country, cities: obj.cities };
        });
        setWeatherData(countryAndCities);
        console.log({ countryAndCities });
      } catch (error) {
        console.error("country api error: ");
      }
    };
    response();
  }, []);

  return (
    <div className={styles.searchSuggestions}>
      {weatherData.slice(0, 5).map((i) => {
        return <button>{i.country}</button>;
      })}
    </div>
  );
};
