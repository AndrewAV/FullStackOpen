import { useState } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personsFilter, setPersonsFilter] = useState('')

  const personsToShow = persons.filter((person) => person.name.toLowerCase().includes(personsFilter.toLocaleLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handlePersonsFilter = (event) => {
    setPersonsFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter personsFilter={personsFilter} handlePersonsFilter={handlePersonsFilter}></Filter>

      <h2>Add a new</h2>
      <PersonsForm addPerson={addPerson} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber}></PersonsForm>

      <h2>Numbers</h2>
      <Persons persons={personsToShow}> </Persons>
    </div>
  )
}

export default App
