import React from "react";
import styles from "@/app/styles/page.module.css";
import { useState } from "react";
import { useEffect } from "react";

export const Search = ({ cityName, setCityName }) => {
  const [input, setInput] = useState(cityName);
  const handleCity = (event) => {
    setInput(event.target.value);
  };
  const changeCity = () => {
    setCityName(input);
  };
  return (
    <div className={styles.searchField}>
      <img src="search.svg" alt="searchIcon" className={styles.searchIcon} />
      <input type="text" placeholder="Search" style={{ width: "100%" }} />
    </div>
  );
};
