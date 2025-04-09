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
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[#f3f4f6]"></div>
    </div>
  );
};
