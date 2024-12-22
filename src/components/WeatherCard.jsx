import React from 'react';
import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm } from 'react-icons/wi';

const getWeatherIcon = (condition) => {
  switch (condition) {
    case 'Clear': return <WiDaySunny className="text-6xl text-yellow-400" />;
    case 'Rain': return <WiRain className="text-6xl text-blue-400" />;
    case 'Clouds': return <WiCloudy className="text-6xl text-gray-400" />;
    case 'Snow': return <WiSnow className="text-6xl text-white" />;
    case 'Thunderstorm': return <WiThunderstorm className="text-6xl text-purple-400" />;
    default: return <WiDaySunny className="text-6xl text-yellow-400" />;
  }
};

const WeatherCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{data.name}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 capitalize">{data.weather[0].description}</p>
        </div>
        {getWeatherIcon(data.weather[0].main)}
      </div>
      
      <div className="text-6xl font-bold mb-8 text-gray-800 dark:text-white text-center">
        {Math.round(data.main.temp)}°C
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Feels like</p>
          <p className="text-xl font-semibold text-gray-800 dark:text-white">{Math.round(data.main.feels_like)}°C</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Humidity</p>
          <p className="text-xl font-semibold text-gray-800 dark:text-white">{data.main.humidity}%</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Wind Speed</p>
          <p className="text-xl font-semibold text-gray-800 dark:text-white">{data.wind.speed} m/s</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Pressure</p>
          <p className="text-xl font-semibold text-gray-800 dark:text-white">{data.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;