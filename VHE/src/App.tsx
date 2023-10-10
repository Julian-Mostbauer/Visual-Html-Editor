import { useState } from 'react'
import './App.css'
import CostumButton from './compenents/CostumButton'

function App() {
  const [count, setCount] = useState(0)

  const [clicked, setClicked] = useState(false)

  return (
    <>
    <div className="card">
        <button onClick={() => setCount((count) => count)}>
          count is {count}
        </button>
      </div>
      <CostumButton func={setClicked} text={(clicked ? "clicked" : "not clicked")}/>
    </>
  )
}

export default App
