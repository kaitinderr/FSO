import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/people'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFiltered] = useState([...persons])
  const [addMessage, setAddMessage] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setFiltered(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.filter(person => person.name === newName).length === 0) {
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setFiltered(persons.concat(returnedPerson))
        setAddMessage('Added ' + returnedPerson.name)
        setTimeout(() => {
          setAddMessage(null)
        }, 5000)
      })
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const removePerson = id => {
    const filteredPerson = persons.filter(person => person.id === id)
    if (window.confirm(`Delete ${filteredPerson.name}?`)) {
      personService
        .remove(id)
        .then(setPersons(persons.filter(person => person.id !== id)))
        .then(setFiltered(filtered.filter(person => person.id !== id)))
    }

  }
    
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFiltered(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={addMessage}/>
        <Filter handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
        <PersonForm 
          addPerson={addPerson}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
        <Persons filtered={filtered} removePerson={removePerson}/>
    </div>
  )
}

export default App