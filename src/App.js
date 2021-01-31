import React, { useState } from 'react';
import Search from './components/Search/Search';
import Time from './components/Time/Time';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import './App.css';



function App() {
  const [weather, setWeather] = useState();

  return (
    <div className="app">
      <div className="container">
        <Search setWeather={setWeather} />
        <Time className={weather ? 'time-field sm' : 'time-field'} />
        {weather && <WeatherInfo weather={weather} />}
      </div>
    </div>
  );
}

export default App;
