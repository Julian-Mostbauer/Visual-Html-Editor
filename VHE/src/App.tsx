import './App.css'
//import { useState } from 'react'
//import ToggleButton from './compenents/toggleButton.tsx'
import getMouse from './compenents/mouseTracker.tsx'
import RadioCollection from './compenents/radioCollection.tsx'
import MoveableItem from './compenents/moveable_item.tsx'

function App() {
    return (
        <>
            <RadioCollection count={3} tile_mode='right'/>
            <MoveableItem text={"123"} color="black"/>
        </>
    )
}

export default App
