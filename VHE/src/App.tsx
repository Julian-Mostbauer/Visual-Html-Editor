import './App.css'
import { useState } from 'react'
import ToggleButton from './compenents/toggleButton'

function App() {

  const [selected, setSelected] = useState(false)
  const [selected2, setSelected2] = useState(false)
  const [selected3, setSelected3] = useState(false)

  return (
    <>
      <div className="card">
      <ToggleButton style="card_item" func={() => setSelected(!selected)} state={selected}/>
      <ToggleButton style="card_item" func={() => setSelected2(!selected2)} state={selected2}/>
      <ToggleButton style="card_item" func={() => setSelected3(!selected3)} state={selected3}/>
      </div>
    </>
  )
}

export default App
