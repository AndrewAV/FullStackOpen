const Filter = ({ personsFilter, handlePersonsFilter }) =>
    <div>
      Filter shown with <input value={personsFilter} onChange={handlePersonsFilter} />
    </div>

export default Filter
