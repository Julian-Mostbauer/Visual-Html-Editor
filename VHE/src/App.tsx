import { useState } from 'react'
//import './App.css' Disabled due to Bootstrap css Formatting
//import "./index.css" Disabled due to Bootstrap css Formatting
import CostumButton from './compenents/ActionButton.tsx'
import ToggleButton from './compenents/ToggleButton.tsx'

function App() {

  const [selected, setSelected] = useState(false)
  
  return (
    <>
      <CostumButton text = {(selected) ? "selected Action Button" : "not selected Action Button"} func = {() => setSelected(!selected)}/>
      <ToggleButton text = {(selected) ? "selected Toggle Button" : "not selected Toggle Button"} func = {() => setSelected(!selected)}/>
    </>
  )
}

export default App
