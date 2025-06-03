import { Search } from "./Search";
import { House, MapPin, Heart, User } from "lucide-react";

const getDayWeatherImage = (forecast) => {
  if (!forecast) return "Sun.png";
  const condition = forecast.toLowerCase();

  if (["light snow", "snow", "blizzard", "sleet", "ice pellets"].includes(condition)) return "daySnow.png";
  if (["partly cloudy", "cloudy", "overcast", "mist", "fog"].includes(condition)) return "dayClouds.png";
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
    return "dayRain.png";
  if (["windy", "wind", "breeze", "gale"].includes(condition)) return "dayWind.png";
  if (["thunderstorm", "thunder", "lightning"].includes(condition)) return "dayLighning.png";
  return "Sun.png";
};

export const ShowDayTime = ({ cityName, setCityName, weatherData }) => {
  const showDate = weatherData?.location.localtime.slice(0, 10);
  const showCityName = weatherData?.location.region || cityName;
  const showCurrentTemp = weatherData?.forecast.forecastday[0].day.maxtemp_c;
  const forecast = weatherData?.current.condition.text;
  const weatherImg = getDayWeatherImage(forecast);

  return (
    <div className="flex flex-col items-center w-full">
      <Search cityName={cityName} setCityName={setCityName} />
      <div className="relative z-10 bg-white/40 rounded-3xl shadow-xl flex flex-col items-center justify-between p-8 w-[340px] min-h-[520px] mt-8 backdrop-blur-[24px]">
        <div className="w-full flex flex-col items-start mb-4">
          <span className="text-gray-400 text-base mb-1">{showDate}</span>
          <span className="text-2xl font-bold text-gray-900">{showCityName}</span>
        </div>

        <img src={`/${weatherImg}`} alt="weather icon" className="w-32 h-32 my-6 object-contain" />
        <div className="text-5xl font-bold text-gray-900 mb-2">{showCurrentTemp ? `${showCurrentTemp}°` : "--"}</div>
        <div className="text-lg text-orange-400 mb-6">{forecast}</div>
        <div className="w-full flex justify-around items-center mt-4 gap-4">
          <House size={24} className="text-gray-900 cursor-pointer" />
          <MapPin size={24} className="text-gray-900 cursor-pointer" />
          <Heart size={24} className="text-gray-900 cursor-pointer" />
          <User size={24} className="text-gray-900 cursor-pointer" />
        </div>
      </div>
      <div className="absolute w-30 h-30 top-20 left-40  rounded-full bg-[#FF8E27] bg-blend-overlay  bg-[radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)]"></div>
    </div>
  );
};
