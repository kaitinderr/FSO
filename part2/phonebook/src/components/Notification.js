const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='addition'>
        {message}
      </div>
    )
  }

export default Notification
