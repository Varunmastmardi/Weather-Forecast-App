import React from 'react';
import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm } from 'react-icons/wi';

const getWeatherIcon = (condition) => {
  switch (condition) {
    case 'Clear': return <WiDaySunny className="text-4xl text-yellow-400" />;
    case 'Rain': return <WiRain className="text-4xl text-blue-400" />;
    case 'Clouds': return <WiCloudy className="text-4xl text-gray-400" />;
    case 'Snow': return <WiSnow className="text-4xl text-white" />;
    case 'Thunderstorm': return <WiThunderstorm className="text-4xl text-purple-400" />;
    default: return <WiDaySunny className="text-4xl text-yellow-400" />;
  }
};

const ForecastCard = ({ data }) => {
  const date = new Date(data.dt * 1000);
  const day = date.toLocaleDateString('en-US', { weekday: 'short' });
  const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <div className="text-center">
        <p className="font-semibold text-gray-700 dark:text-gray-300">{day}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{time}</p>
      </div>
      <div className="flex justify-center my-2">
        {getWeatherIcon(data.weather[0].main)}
      </div>
      <div className="text-center">
        <p className="text-xl font-bold text-gray-800 dark:text-white">
          {Math.round(data.main.temp)}°C
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {data.weather[0].description}
        </p>
      </div>
    </div>
  );
};

export default ForecastCard;