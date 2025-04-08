import React from "react";
import styles from "@/app/styles/page.module.css";

export const ShowDayTime = () => {
  return (
    <div className={styles.portrayDay}>
      <div className={styles.weatherInfoRendering}>
        <p>date</p>
        <p>city name</p>
        <div>image</div>
        <p>temperature</p>
        <p>forecast</p>
        <div>bunch of logos</div>
      </div>
      <div className={styles.randomOrange}></div>
    </div>
  );
};
