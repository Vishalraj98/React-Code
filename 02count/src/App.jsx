
import { useState } from 'react'
import './App.css'

function App() {
 
  // Use react hooks in our project that show u an ui part
  let [counter, setCounter]= useState(15);

  const addValue = ()=> {
   
    setCounter(counter + 1)
   
  
  }

  const removeValue = () =>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>counter project </h1>
      <h2>Counter value: {counter}</h2>

      <button  onClick={addValue}>Add value {counter}</button>

      <br/>
      <br/>
      <button onClick={removeValue}>remove value</button>

      <p>footer :{counter}</p>
    </>
  )
}

export default App
