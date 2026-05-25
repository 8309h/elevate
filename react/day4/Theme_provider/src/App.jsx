import { useState, useRef } from 'react'
import './App.css'
import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(0)
  }

  // useRef();
  const inputRef = useRef("")
  const [text, setText] = useState("");
  const getInput = () => {
    setText(inputRef.current.value)
  }
  
  return (
    <>
      <div style={
        {
          backgroundColor: theme == "light" ? "white" : "black",
          color: theme == "light" ? "black" : "white",
          height: "100vh",
          textAlign: "center",
          paddingTop: "100px"
        }
      }>

        <h1 style={{ color: "yellow" }}>Theme : {theme}</h1>
        <button onClick={toggleTheme}>Change Theme</button>
        <h1 style={{ color: "yellow" }}>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button> <br /> <br />
        <input type="text" placeholder='type-here..' ref={inputRef} onInput={getInput} />
        <p>Helloo : {text}</p>
      </div>
    </>
  )
}

export default App
