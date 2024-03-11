
import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  function handleDecrease(){
    if (counter <= 0) {
      return
    }
    let change = counter - 1
    setCounter(change)
  }
  function handleIncrease(){
    if (counter >= 20) {
      return
    }
    let change = counter + 1
    setCounter(change)
  }

  return (
    <>
      <h1>Making Counter With React Js</h1>

      <h3>Count:{counter}</h3>
      <button onClick={handleIncrease}>Increase {counter}</button>
      <button onClick={handleDecrease}>Decrease {counter}</button>
    </>
  )
}

export default App
