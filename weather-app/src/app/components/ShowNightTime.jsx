import React from "react";
import styles from "@/app/styles/page.module.css";

export const ShowNightTime = () => {
  return (
    <div className={styles.portrayNight}>
      <div className={styles.weatherInfoRendering} style={{ color: "white" }}>
        <p>date</p>
        <p>city name</p>
        <div>image</div>
        <p>temperature</p>
        <p>forecast</p>
        <div>bunch of logos</div>
      </div>
    </div>
  );
};
