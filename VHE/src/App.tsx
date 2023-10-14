import './App.css'
import { useState } from 'react'
//import ToggleButton from './compenents/toggleButton.tsx'
import MovableItem from './compenents/movableItem.tsx'
import RadioCollection from './compenents/radioCollection.tsx'
import ToggleButton from './compenents/toggleButton.tsx'

function App() {
    const [deez, setDeez] = useState(false);

    return (
        <>
            <MovableItem id={"move1"} content={<div style={{ backgroundColor: `${deez ? "Green" : "Red"}`, borderRadius: "2em", padding: "2em", color: "White", fontSize: `${deez ? "19px" : "15px"}` }}>Custom style Movable Object With Link to Button</div>} />
            <MovableItem id={"move2"} content={<div style={{ backgroundColor: "Gray", borderRadius: "1em", padding: "1em", color: "yellow" }}>This is Test Button<ToggleButton func={() => { setDeez(!deez) }} state={deez} style={""} /> Inside Movable Object</div>} />

            <div className="card">
                <RadioCollection count={5} />
            </div>
        </>
    )
}

export default App
