const Persons = ({ persons, deletePerson }) =>
    persons.map(person =>
            <p key={person.name}>{person.name}: {person.number} <button onClick={()=>deletePerson(person.id, person.name)}>Delete</button> </p>
    )
export default Persons
