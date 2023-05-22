import Person from './Person'

const Persons = ({ filtered, removePerson }) => {
    return (
        <div>
            <ul>
                {filtered.map(person => 
                    <Person person={person} removePerson={removePerson}/>
                )}
            </ul>
        </div>
    )
}

export default Persons