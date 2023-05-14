import Person from './Person'

const Persons = ({ filtered }) => {
    return (
        <div>
            <ul>
                {filtered.map(person => 
                    <Person person={person} />
                )}
            </ul>
        </div>
    )
}

export default Persons