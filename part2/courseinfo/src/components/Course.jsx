const Course = ({ course }) => {
    return (
      <div>
        <Header course={course}></Header>
        <Content parts={course.parts}></Content>
        <Total parts={course.parts}></Total>
      </div>
    )
  }
      
  const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
  }
  
  const Part = ({ part, exercises }) => {
    return (
      <p>
        {part} {exercises}
      </p>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <>
        {parts.map(part=>
          <Part key={part.id} part={part.name} exercises={parts.exercises}></Part>
        )}
      </>
    )
  }
  
  
  const Total = ({ parts }) => {
    const total = parts.reduce((accumulator, current) => accumulator + current.exercises, 0)
  
    return (
      <p><b>Total of {total} exercises</b></p>
    )
  }

  export default Course