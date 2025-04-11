import styles from "@/app/styles/page.module.css";

export const ShowNightTime = ({ weatherData }) => {
  const showDate = weatherData?.location.localtime.slice(0, 10);
  const showCityName = weatherData?.location.region;
  const showCurrentTemp = weatherData?.forecast.forecastday[0].day.mintemp_c;
  const forecast = weatherData?.current.condition.text;

  const weatherImages = {
    "": "nightClouds.png",
    "": "nightLightning.png",
    "": "nightRain.png",
    "Light snow": "nightSnow.png",
    "": "nightWind.png",
    "": "Moon.png",
  };

  return (
    //       <div className={styles.weatherInfoRendering} style={{ color: "white" }}>
    //       </div>
    //       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[#f3f4f6]"></div>

    <div className="relative bg-gray-900 text-white flex items-center justify-center">
      <div className={styles.weatherInfoRendering}>
        <p>{showDate}</p>
        <p>{showCityName}</p>
        <img src={weatherImages[forecast]} alt="" />

        <p>{showCurrentTemp}°C</p>
        <p>{forecast}</p>
      </div>
      <div className={styles.randomPurple}></div>
    </div>
  );
};
