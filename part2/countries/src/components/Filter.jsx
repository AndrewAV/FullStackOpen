const Filter = ({ countryFilter, handleCountryFilter }) =>
    <div>
      Find countries <input value={countryFilter} onChange={handleCountryFilter} />
    </div>

export default Filter
