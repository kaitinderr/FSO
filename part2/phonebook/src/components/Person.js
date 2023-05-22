const Person = ({ person, removePerson }) => {
    return (
      <div>
        <li>{person.name} {person.number}</li>
        <button onClick={() => removePerson(person.id)}>delete</button>
      </div>
    )
  }
  
  export default Person