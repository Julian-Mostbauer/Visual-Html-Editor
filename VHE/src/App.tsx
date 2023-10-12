import { useState } from 'react'
//import './App.css'
import CostumButton from './compenents/costumButton'
import ToggleButton from './compenents/toggleButton'

function App() {

  const [selected, setSelected] = useState(false)
  
  return (
    <>
      <ToggleButton text={(selected) ? "selected costum Button" : "not selected costum Button"} func={() => setSelected(!selected)}/>

    </>
  )
}

export default App
