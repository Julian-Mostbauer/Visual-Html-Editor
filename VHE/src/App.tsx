import './App.css'
import { useState } from 'react'
import ToggleButton from './compenents/toggleButton'

function App() {

  const [selected, setSelected] = useState(false)
  
  return (
    <>
      <div className="card">
      <ToggleButton func={() => setSelected(!selected)} state={selected}/>
      </div>
    </>
  )
}

export default App
