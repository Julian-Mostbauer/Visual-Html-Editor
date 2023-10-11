import { useState } from 'react'
import './App.css'
import CostumButton from './compenents/costumButton'

function App() {

  const [selected, setSelected] = useState(false)
  
  return (
    <>
      <CostumButton text={(selected) ? "selected costum Button" : "not selected costum Button"} func={() => setSelected(!selected)}/>
      <CostumButton>
        test
      </CostumButton>
    </>
  )
}

export default App
