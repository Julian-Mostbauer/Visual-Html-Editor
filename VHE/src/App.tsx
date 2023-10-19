import './App.css'
import { useState } from 'react'
//import ToggleButton from './compenents/toggleButton.tsx'
import MovableItem from './components/movableItem.tsx'
import RadioCollection from './components/radioCollection.tsx'
import ToggleButton from './components/toggleButton.tsx'

function App() {
    const [deez, setDeez] = useState(false);

    return (
        <>
            <RadioCollection count={3} tile_mode='right'/>
        
            <MovableItem id={"move1"} content={<div style={{ backgroundColor: `${deez ? "Green" : "Red"}`, borderRadius: "2em", padding: "2em", color: "White", fontSize: `${deez ? "19px" : "15px"}` }}>Custom style Movable Object With Link to Button</div>} />
            <MovableItem id={"move2"} content={<div style={{ backgroundColor: "Gray", borderRadius: "1em", padding: "1em", color: "yellow" }}>This is Test Button<ToggleButton func={() => { setDeez(!deez) }} state={deez} style={""} /> Inside Movable Object</div>} />
        </>
    )
}

export default App
