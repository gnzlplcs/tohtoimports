import { useState } from 'react'
import logoImg from './assets/logo003-7.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <h1>Tohto Imports</h1>
      <img src={logoImg} alt="Tohto Lightning main image" width="400px"/>
    </div>
  )
}

export default App
