import React from 'react'
import './Sliders.css'

import img2 from '../../assets/women1.jpg'
import img3 from '../../assets/squirrel.jpg'
const Sliders = () => {
  return (
    <div className='sliders'>
      <div className='sliders-left'>
        <h1>Check out our modern collections</h1>
        <p>"Explore our collection of exquisite artwork, featuring diverse styles and mediums from 
            renowned and emerging artists.
        </p>
        <button>Buy Now</button>
      </div>
      <div className='sliders-right'>
        <img src={img2} alt="" />
        <img src={img2} alt="" />
        <img src={img2} alt="" />
      </div>
    </div>
  )
}

export default Sliders
