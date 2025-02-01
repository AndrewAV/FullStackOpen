import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonsForm from './components/PersonsForm'
import Persons from './components/Persons'
import personService from './services/personService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personsFilter, setPersonsFilter] = useState('')


  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const personsToShow = persons.filter((person) => person.name.toLowerCase().includes(personsFilter.toLocaleLowerCase()))

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const person = persons.find(person => person.name === newName)
    if (person && window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService.update(person.id, personObject)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id === person.id ? updatedPerson : p))
            setNewName('')
            setNewNumber('')
          })
    }

    else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
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

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id)
        .then(removedPerson =>
          setPersons(persons.filter(p => p.id !== id))
        )
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter personsFilter={personsFilter} handlePersonsFilter={handlePersonsFilter}></Filter>

      <h2>Add a new</h2>
      <PersonsForm addPerson={addPerson} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber}></PersonsForm>

      <h2>Numbers</h2>
      <Persons persons={personsToShow} deletePerson={deletePerson}> </Persons>
    </div>
  )
}

export default App
