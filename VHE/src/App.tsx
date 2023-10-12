import { useState } from 'react'
//import './App.css'
import "./index.css"
import CostumButton from './compenents/costumButton.tsx'
import toggleButton from './compenents/toggleButton.tsx'

function App() {

  const [selected, setSelected] = useState(false)
  
  return (
    <>
      <CostumButton text={(selected) ? "selected costum Button" : "not selected costum Button"} func={() => setSelected(!selected)}/>
    </>
  )
}

export default App
