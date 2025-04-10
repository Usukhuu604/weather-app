import React from "react";
import styles from "@/app/styles/page.module.css";
import axios from "axios";

import { useState } from "react";
import { useEffect } from "react";

export const Search = ({ cityName, setCityName }) => {
  const [input, setInput] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [foundCities, setFoundCities] = useState([]);

  const handleCity = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredCities = countryData.filter((cityName) =>
      cityName.toLowerCase().startsWith(value)
    );
    setFoundCities(filteredCities);
  };

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios(
          "https://countriesnow.space/api/v0.1/countries"
        );

        const countryAndCities = data.data.map((obj) => {
          return { country: obj.country, cities: obj.cities };
        });
        const allCities = countryAndCities.flatMap((country) =>
          country.cities.map((city) => `${city}, ${country.country}`)
        );

        setCountryData(allCities);
      } catch (error) {
        console.error("country api error: ");
      }
    };
    response();
  }, []);

  const clickCity = () => {
    setInput(foundCities[0]);
    console.log(foundCities[0]);
  };

  return (
    <div className="">
      <div className="flex text-[20px] rounded-full absolute top-[40px] left-[40px] border border-gray-400 w-[560px] h-[80px] px-[24px] py-[16px]">
        <img src="search.svg" alt="searchIcon" />
        <input type="text" placeholder="Search" onChange={handleCity} />
      </div>

      <div className="absolute top-[120px] left-[100px] ">
        {foundCities.slice(0, 3).map((city, index) => {
          return (
            <p
              onClick={clickCity}
              key={index}
              className="rounded-full border border-gray-700 p-[5px]"
            >
              {city}
            </p>
          );
        })}
      </div>
    </div>
  );
};
