import React from 'react'
import './Hero.css'
import img1 from '../../assets/woman2.jpg'
import img2 from '../../assets/women1.jpg'
import img3 from '../../assets/squirrel.jpg'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <img src={img2} alt="" />
        </div>
        <div className='hero-center'>
            <div>
                <img src={img3} alt="" />
            </div>
            <div className='letter1'>
                Welcome to
            </div>
            <div className='letter2'>
                Arasi arts
            </div>
            <div>
                <button>Buy now</button>
            </div>
            <div>
                <img src={img3} alt="" />
            </div>
        </div>
        <div className='hero-right' >
            <img src={img2} alt="" />
        </div>
    </div>   
  )
}

export default Hero
