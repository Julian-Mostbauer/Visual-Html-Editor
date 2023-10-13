import './App.css'
import { useState } from 'react'
import ToggleButton from './compenents/toggleButton.tsx'
import RadioCollection from './compenents/radioCollection.tsx'

function App() {

  return (
    <>
      <div className="card">
      <RadioCollection count={4} func={() => setSelected}/>
      </div>
    </>
  )
}

export default App