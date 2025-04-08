import React from "react";
import styles from "@/app/styles/page.module.css";

export const Search = () => {
  const handleCity = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className={styles.searchField}>
      <img src="search.svg" alt="searchIcon" className={styles.searchIcon} />
      <input
        type="text"
        onChange={handleCity}
        placeholder="Search"
        style={{ width: "100%" }}
      />
    </div>
  );
};
