const Countries = ({ countries, isFilterEmpty, showCountry }) => {
    if (countries.length < 11 && countries.length > 0) {
        return countries.map(country =>
            <p key={country.name.common}>{country.name.common} <button onClick={()=>showCountry(country.name.official)}>Show</button> </p>
        )
    }
    else if (isFilterEmpty)
        return <p>Specify a filter</p>

    else if (countries.length > 10)
        return <p>Too many matches, specify another filter</p>
    return <p>No matches</p>
}

export default Countries
