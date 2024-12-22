import { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import ForecastCard from './components/ForecastCard';
import LocationButton from './components/LocationButton';
import ThemeToggle from './components/ThemeToggle';
import { getCurrentWeather, getForecast, getWeatherByLocation, getForecastByLocation } from './utils/weatherApi';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(() => 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const fetchWeatherData = async (cityName) => {
    if (!cityName.trim()) {
      setError('Please enter a city name');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const [weatherData, forecastData] = await Promise.all([
        getCurrentWeather(cityName),
        getForecast(cityName)
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationClick = async () => {
    try {
      setLoading(true);
      setError('');
      
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      const [weatherData, forecastData] = await Promise.all([
        getWeatherByLocation(latitude, longitude),
        getForecastByLocation(latitude, longitude)
      ]);
      
      setWeather(weatherData);
      setForecast(forecastData);
      setCity(weatherData.name);
    } catch (err) {
      setError('Unable to get location. Please try searching by city name.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            Weather Forecast
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Get current weather and 5-day forecast for any city
          </p>
        </div>
        
        <div className="w-full max-w-2xl mx-auto mb-8">
          <div className="flex gap-2 items-center">
            <SearchBar
              value={city}
              onChange={setCity}
              onSearch={() => fetchWeatherData(city)}
              loading={loading}
            />
            <LocationButton onClick={handleLocationClick} loading={loading} />
          </div>

          {error && (
            <p className="mt-3 text-red-500 text-sm text-center">{error}</p>
          )}
        </div>

        {weather && (
          <div className="mb-12">
            <WeatherCard data={weather} />
          </div>
        )}

        {forecast && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
              5-Day Forecast
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {forecast.list
                .filter((item, index) => index % 8 === 0)
                .slice(0, 5)
                .map((item) => (
                  <ForecastCard key={item.dt} data={item} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;