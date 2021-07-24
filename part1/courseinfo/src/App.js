import React from 'react'


const Header = (props) => {
  return <h1>{props.course.name}</h1>
}


const Part = (props) => {
  return <p>{props.name} {props.number}</p>
}


const Content = (props) => {
  return (
    <div>
      {
        Object.keys(props.course.parts).map(part => {
          return (
            <Part name={props.course.parts[part].name}
                  number={props.course.parts[part].exercises}
            />
          )
        })
      }
    </div>
  )
}


const Total = (props) => {
  let sum = 0
  Object.keys(props.course.parts).map(part => sum += props.course.parts[part].exercises)

  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App