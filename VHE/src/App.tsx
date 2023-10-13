import './App.css'
//import { useState } from 'react'
//import ToggleButton from './compenents/toggleButton.tsx'
import getMouse from './compenents/mouseTracker.tsx'
import RadioCollection from './compenents/radioCollection.tsx'

function App() {
    return (
        <>
            <div>
                <p>{getMouse().xPos}</p>
                <p>{getMouse().yPos}</p>
                <p>{getMouse().pressed ? "on" : "off"}</p>
            </div>

            <div className="movable_item" style={{ position: "absolute", left: `${getMouse().xPos}px`, top: `${getMouse().yPos}px` }}>
                <p>abc</p>
            </div>

            <div className="card">
                <RadioCollection count={4} />
            </div>
        </>
    )
}

export default App
