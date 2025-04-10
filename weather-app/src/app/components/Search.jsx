"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export const Search = ({ cityName, setCityName }) => {
  const [input, setInput] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [foundCities, setFoundCities] = useState([]);

  const handleCity = (event) => {
    const value = event.target.value.toLowerCase();
    setInput(value);
    const filteredCities = countryData.filter((cityName) =>
      cityName.toLowerCase().startsWith(value)
    );
    setFoundCities(filteredCities.slice(0, 3));
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

  const selectCity = (city) => {
    setInput(city);
    setCityName(city);
    setFoundCities([]);
  };

  return (
    <div className="absolute top-10 left-10 w-[500px]">
      <div className="flex items-center border border-gray-300 rounded-full px-5 py-4 bg-white shadow-lg">
        <img src="search.svg" alt="search" className="w-5 h-5 mr-3" />

        <input
          type="text"
          placeholder="Search"
          onChange={handleCity}
          value={input}
          className="w-[100%]"
        />
      </div>

      {foundCities.length !== 0 ? (
        <div className="mt-3 ml-8 space-y-2">
          {foundCities.map((city, index) => {
            return (
              <p
                onClick={() => selectCity(city)}
                key={index}
                className=" px-4 py-2 rounded-full border border-gray-400 bg-white hover:bg-gray-100"
              >
                {city}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
