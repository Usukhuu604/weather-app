"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export const Search = ({ setCityName }) => {
  const [input, setInput] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [foundCities, setFoundCities] = useState([]);

  const handleCity = (event) => {
    const value = event.target.value;
    setInput(value);
    const filteredCities = countryData.filter((cityName) => cityName.toLowerCase().startsWith(value.toLowerCase()));
    setFoundCities(filteredCities.slice(0, 3));
  };

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios("https://countriesnow.space/api/v0.1/countries");

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
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] sm:w-[340px] z-50">
      <div className="flex items-center border border-gray-200 rounded-full px-5 py-3 bg-white shadow">
        <img src="/search.svg" alt="search" className="w-5 h-5 mr-3" />
        <input
          type="text"
          placeholder="Search"
          onChange={handleCity}
          value={input}
          className="w-full bg-transparent outline-none border-none text-base"
        />
      </div>
      {foundCities.length !== 0 ? (
        <div className="rounded-xl shadow mt-2 absolute w-full bg-white border border-gray-200 py-2">
          {foundCities.map((city, index) => {
            return (
              <div
                onClick={() => selectCity(city)}
                key={index}
                className="px-6 py-2 cursor-pointer flex items-center text-base hover:bg-gray-100"
              >
                <span role="img" aria-label="location" className="mr-2">
                  📍
                </span>
                {city}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
