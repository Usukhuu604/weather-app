import { Search } from "./Search";
import styles from "@/app/styles/page.module.css";

export const ShowDayTime = ({ cityName, setCityName, weatherData }) => {
  const showDate = weatherData?.location.localtime.slice(0, 10);
  const showCityName = weatherData?.location.region;
  const showCurrentTemp = weatherData?.forecast.forecastday[0].day.maxtemp_c;
  const forecast = weatherData?.current.condition.text;

  const weatherImages = {
    "": "dayClouds.png",
    "": "dayLightning.png",
    "": "dayRain.png",
    "Light snow": "daySnow.png",
    "": "dayWind.png",
    "": "Sun.png",
  };

  return (
    //       <Search cityName={cityName} setCityName={setCityName} />
    //       <div className={styles.weatherInfoRendering}>

    //       </div>
    //       <div className={styles.randomOrange}></div>

    <div className="relative bg-white text-black flex items-center justify-center ">
      <Search cityName={cityName} setCityName={setCityName} />
      <div className={styles.weatherInfoRendering}>
        <p>{showDate}</p>
        <p>{showCityName}</p>
        <img src={weatherImages[forecast]} alt="" />

        <p>{showCurrentTemp}°C</p>
        <p>{forecast}</p>
      </div>
      <div className={styles.randomOrange}></div>
    </div>
  );
};
