import './App.css'
import { useState } from 'react'
import ToggleButton from './compenents/toggleButton.tsx'
import getMouse from './compenents/mouseTracker.tsx'

import RadioCollection from './compenents/radioCollection.tsx'

function App() {

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
      <RadioCollection count={4}/>
      </div>
    </>
  )
}

export default App