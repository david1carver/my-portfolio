import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=YOUR_OPENWEATHERMAP_API_KEY`);
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather:', error);
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLoading(false);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading weather information...</div>;
  }

  if (!weather) {
    return null;
  }

  return (
    <div className="weather-info">
      <h3>Current Weather</h3>
      <p>{weather.name}: {Math.round(weather.main.temp)}°C, {weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;
