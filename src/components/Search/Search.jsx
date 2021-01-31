import React, { useState } from 'react';
import './search.css';

const api = {
    key: '',
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather?'
};

const Search = ({ setWeather }) => {
    const [request, setRequest] = useState('');
    const [error, setError] = useState(false);

    const inputHandler = e => {
        setRequest(e.target.value);
    };

    const searchHandler = e => {
        if (e.key === 'Enter') {            
            fetch(`${api.baseUrl}q=${request}&units=metric&appid=${api.key}`)
                .then(response => response.json())
                .then(result => {
                    if (result.cod === 200) {
                        setWeather(result);
                        setRequest('');
                        error && setError(false);
                    } else {
                        setRequest('');
                        setError(true);
                        setTimeout(() => setError(false), 3000);
                    }
                })
        }
    };

    return (
        <div className="search-field">
            <input
                className='search-input'
                type='text'
                value={request}
                placeholder='Search location...'
                onChange={inputHandler}
                onKeyDown={searchHandler}
            />
            {error && <p className='search-error'>location not found. Try again.</p>}
        </div>
    );

};

export default Search;

