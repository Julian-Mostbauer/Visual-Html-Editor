import { useState } from 'react'
import './App.css'
import CostumButton  from './compenents/costumButton.tsx'

function App() {
  const [count, setCount] = useState(0)

  const [selected, setSelected] = useState(false)
  
  return (
    <>
    <div className="card">
        <button onClick={() => setCount((count) => count)}>
          count is {count}
        </button>
      </div>
      <button onClick={() => setSelected(!selected)}>
        {(selected) ? "selected" : "not selected"}
      </button>
      <CostumButton text={(selected) ? "selected costum Button" : "not selected costum Button"} func={() => setSelected(!selected)}/>
      <img src="public/VHE.png"/>
    </>
  )
}

export default App
