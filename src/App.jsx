import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Sliders from './Components/Sliders/Sliders'
import Cards from './Components/Cards/Cards'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Sliders/>
      <Cards/>
    </div>
  )
}

export default App

