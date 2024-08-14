import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Banner } from './Components/Banner/Banner'
import { Cointable } from './Components/Cointable/Cointable'
function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Cointable/>
    </>
  )
}

export default App
