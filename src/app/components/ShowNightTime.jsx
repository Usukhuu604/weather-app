import { House, MapPin, Heart, User } from "lucide-react";

const getNightWeatherImage = (forecast) => {
  if (!forecast) return "Moon.png";
  const condition = forecast.toLowerCase();

  if (["light snow", "snow", "blizzard", "sleet", "ice pellets"].includes(condition)) return "nightSnow.png";
  if (["partly cloudy", "cloudy", "overcast", "mist", "fog"].includes(condition)) return "nightClouds.png";
  if (
    [
      "rain",
      "light rain",
      "patchy light drizzle",
      "patchy rain nearby",
      "moderate rain",
      "heavy rain",
      "showers",
      "drizzle",
    ].includes(condition)
  )
    return "nightRain.png";
  if (["windy", "wind", "breeze", "gale"].includes(condition)) return "nightWind.png";
  if (["thunderstorm", "thunder", "lightning"].includes(condition)) return "nightLighning.png";
  return "Moon.png";
};

export const ShowNightTime = ({ weatherData }) => {
  const showCityName = weatherData?.location?.region;
  const showDate = weatherData?.location?.localtime?.slice(0, 10);
  const showCurrentTemp = weatherData?.forecast?.forecastday[0]?.day?.mintemp_c;
  const forecast = weatherData?.forecast?.forecastday[0]?.hour[23]?.condition?.text;
  const weatherImg = getNightWeatherImage(forecast);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative z-10 bg-[#23243a]/75 rounded-3xl shadow-xl flex flex-col items-center justify-between p-8 w-[90%] md:w-[50%] h-auto md:h-[70vh] my-8 text-white backdrop-blur-sm">
        <div className="w-full flex flex-col items-start mb-4">
          <span className="text-gray-400 text-base mb-1">{showDate}</span>
          <span className="text-2xl font-bold text-white">{showCityName}</span>
        </div>

        <img src={`/${weatherImg}`} alt="weather icon" className="w-32 h-32 my-6 object-contain" />
        <div className="text-6xl font-bold text-white mb-2">{showCurrentTemp ? `${showCurrentTemp}°` : "--"}</div>
        <div className="text-lg text-indigo-300 mb-6">{forecast}</div>

        <div className="w-full flex justify-around items-center mt-4 gap-4">
          <House size={24} className="text-indigo-300 cursor-pointer" />
          <MapPin size={24} className="text-indigo-300 cursor-pointer" />
          <Heart size={24} className="text-indigo-300 cursor-pointer" />
          <User size={24} className="text-indigo-300 cursor-pointer" />
        </div>
      </div>
      <div className="absolute w-40 h-40 bottom-[15%] right-[15%] rounded-full bg-[#6E72C9] bg-blend-overlay  bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_100%)]"></div>
    </div>
  );
};
