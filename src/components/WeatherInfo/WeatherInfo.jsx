import React from 'react';
import './weatherInfo.css';
import PropTypes from 'prop-types';

const WeatherInfo = ({ weather }) => {
    return (
        <div className='weather-field'>
            <div className="location">
                {`${weather.name}, ${weather.sys.country}`}
            </div>
            <table className="temp">
                <tbody>
                    <tr>
                        <td>Temperature:</td>
                        <td className='temp-value'>{`${Math.round(weather.main.temp)} °C`}</td>
                    </tr>
                    <tr>
                        <td>Fells like:</td>
                        <td className='temp-value'>{`${Math.round(weather.main.feels_like)} °C`}</td>
                    </tr>
                    <tr>
                        <td>Wind speed:</td>
                        <td className='temp-value'>{`${Math.round(weather.wind.speed)} km/h`}</td>
                    </tr>
                </tbody>
            </table>
            <div className="sky-description">
                <img
                    className='temp-image'
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    title={weather.weather[0].description}
                    alt=""
                />
                <p>{weather.weather[0].description[0].toUpperCase() + weather.weather[0].description.slice(1)}</p>
            </div>
        </div>

    )
};

WeatherInfo.propTypes = {
    weather: PropTypes.shape({
        weather: PropTypes.array,
        main: PropTypes.object,
        name: PropTypes.string,
        sys: PropTypes.object
    })
}

export default WeatherInfo;