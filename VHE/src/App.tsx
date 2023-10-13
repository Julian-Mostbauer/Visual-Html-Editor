import './App.css'
//import { useState } from 'react'
//import ToggleButton from './compenents/toggleButton.tsx'
import MovableItem from './compenents/movableItem.tsx'
import RadioCollection from './compenents/radioCollection.tsx'

function App() {
    return (
        <>
            <MovableItem id={"move1"} />
            <MovableItem id={"move2"} />

            <div className="card">
                <RadioCollection count={5} />
            </div>
        </>
    )
}

export default App
