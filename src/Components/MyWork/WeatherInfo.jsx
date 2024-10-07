import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async (latitude, longitude) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather:', error);
      setError(`Failed to load weather information: ${error.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          setError(`Unable to get your location: ${error.message}`);
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  const handleRetry = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          setError(`Unable to get your location: ${error.message}`);
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="weather-info loading">Loading weather information...</div>;
  }

  if (error) {
    return (
      <div className="weather-info error">
        <p>{error}</p>
        <button onClick={handleRetry}>Retry</button>
      </div>
    );
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