import { Search } from "./Search";

export const ShowDayTime = ({ cityName, setCityName, weatherData }) => {
  return (
    //     <div className={styles.portrayDay}>
    //       <Search cityName={cityName} setCityName={setCityName} />
    //       <div className={styles.weatherInfoRendering}>
    //         <p>date</p>
    //         <p>city name</p>
    //         <div>image</div>
    //         <p>temperature</p>
    //         <p>forecast</p>
    //         <div>bunch of logos</div>
    //       </div>
    //       <div className={styles.randomOrange}></div>
    //     </div>

    <div className="relative bg-white text-black flex items-center justify-center">
      <Search cityName={cityName} setCityName={setCityName} />

      <div className="text-center space-y-4">
        <p>{new Date(weatherData.location.localtime).toLocaleDateString()}</p>
        <p>{weatherData.location.name}</p>
        <div>image</div>
        <p>{weatherData.current.temp_c}°C</p>
        <p>{weatherData.current.condition.text}</p>
      </div>
    </div>
  );
};
