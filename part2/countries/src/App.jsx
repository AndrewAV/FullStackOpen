import { useEffect, useState } from 'react'
import countryService from './services/countryService'
import Filter from './components/Filter'
import Countries from './components/Countries'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryFilter, setcountryFilter] = useState('')
  const [countryToShow, setCountryToShow] = useState('')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    console.log('Fetching...');
    countryService
      .getAll()
      .then((allCountries) => {
        setCountries(allCountries)
        console.log('Done!');
      })
  }, [])

  const countriesToShow = countryToShow === ''
    ? countries.filter((country) => country.name.common.toLowerCase().includes(countryFilter.toLocaleLowerCase()))
    : countries.filter((country) => country.name.official === countryToShow)

  useEffect(() => {
    if (countriesToShow.length > 1) {
      setWeather(null);
    }
    if (countriesToShow.length === 1 && !weather) {
      const [lat, lon] = countriesToShow[0].capitalInfo.latlng
      countryService.getWeather(lat, lon)
        .then((w) => {
          setWeather(w);
        })
    }
  }, [countriesToShow])

  const handleCountryFilter = (event) => {
    setcountryFilter(event.target.value)
    setCountryToShow('')
  }

  const showCountry = (officialname) => {
    setCountryToShow(officialname)
  }

  return (
    <>
      {countries.length !== 0
        ?
        (
          <>
            <Filter countryFilter={countryFilter} handleCountryFilter={handleCountryFilter} />
            {countriesToShow.length === 1
              ? <Country country={countriesToShow[0]} weather={weather} />
              : <Countries countries={countriesToShow} isFilterEmpty={!countryFilter} showCountry={showCountry} />}
          </>
        )
        : <p>Loading countries</p>
      }
    </>
  )
}

export default App
