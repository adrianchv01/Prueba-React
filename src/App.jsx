const Hello = (props) =>{
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>Hello world prueba de componente Hello</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const name = "Adrian"
  const age = 20
  console.log(now, a+b)
  console.log("Hello from component")
  return (
    <div>
      <h1>Titulo</h1>
      <Hello />
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Hello name={name} age={age}/>
      <Hello name="Adrian" />
    </div>
  )
}

export default App