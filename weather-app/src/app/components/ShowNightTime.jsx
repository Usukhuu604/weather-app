import styles from "@/app/styles/page.module.css";

export const ShowNightTime = ({ weatherData }) => {
  return (
    //     <div className={styles.portrayNight}>
    //       <div className={styles.weatherInfoRendering} style={{ color: "white" }}>
    //         <p>date</p>
    //         <p>city name</p>
    //         <div>image</div>
    //         <p>temperature</p>
    //         <p>forecast</p>
    //         <div>bunch of logos</div>
    //       </div>
    //       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[#f3f4f6]"></div>
    //     </div>

    <div className="relative bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <p>{new Date(weatherData.location.localtime).toLocaleDateString()}</p>
        <p>{weatherData.location.name}</p>
        <div>image</div>
        <p>{weatherData.current.temp_c}°C</p>
        <p>{weatherData.current.condition.text}</p>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-white/10 blur-2xl" />
    </div>
  );
};
