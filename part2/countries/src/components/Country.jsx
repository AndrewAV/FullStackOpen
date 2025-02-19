const Country = ({ country, weather }) =>
    <>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital.map(c => c)}</p>
        <p>Area: {country.area} km²</p>
        <h2>Languages:</h2>
        <ul>
            {Object.entries(country.languages).map(([key, value]) => (
                <li key={key}>{value}</li>
            ))}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />

        {weather
            ? <>
                <h2>Weather in {country.capital[0]}</h2>
                <p>Temperature {weather.main.temp} Celsius</p>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].main} />
                <p>Wind {weather.wind.speed} m/s</p>
            </>
            : <p>Getting weather</p>
        }
    </>



export default Country
