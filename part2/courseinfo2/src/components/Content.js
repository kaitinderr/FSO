import Part from './Part'

    /* <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
    <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
    <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/> */
const Content = ({parts}) => {
    return (
      <div>
        {parts.map((part) =>
            <Part part={part.name} exercises={part.exercises}/>
        )}
      </div>
    )
}

export default Content