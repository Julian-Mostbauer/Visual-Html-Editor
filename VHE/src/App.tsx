import './App.css'
import { useState } from 'react'
import ToggleButton from './compenents/toggleButton.tsx'
import getMouse from './compenents/mouseTracker.tsx'

function App() {

  const [selected, setSelected] = useState(false)
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(false)

  return (
    <>
      <div className="card">
        <ToggleButton style="card_item" func={() => setSelected(!selected)} state={selected}/>
        <ToggleButton style="card_item" func={() => setSelected2(!selected2)} state={selected2}/>
        <ToggleButton style="card_item" func={() => setSelected3(!selected3)} state={selected3}/>
      </div>
      <div>
      <p>{getMouse().xPos}</p>
      <p>{getMouse().yPos}</p>
      <p>{getMouse().pressed ? "on" : "off"}</p>
      </div>

      <div className="movable_item" style = {{
        position: "absolute",
        left: `${getMouse().xPos}px`,
        top: `${getMouse().yPos}px`,
      }}>
        <p>aaa</p>
      </div>
    </>
  )
}

export default App