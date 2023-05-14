const Filter = ({ handleFilterChange }) => {
    return (
        <div>
            <form>
                filter shows with <input onChange={handleFilterChange}/>
            </form>
        </div>
    )
}

export default Filter