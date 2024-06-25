import React, { useState } from 'react'
import './Cards.css'
import img2 from '../../assets/squirrel.jpg'
import stars from '../../assets/star_icon.png'
const Cards = () => {
    const [menus,setmenus]=useState('Tanjore')
  return (
    <div className='cards'>
        <h1>New arrivals</h1>
        <p>Explore here</p>
        <div className='cards-menu'>
            <h3  className={menus==='Tanjore'?'actives':''} onClick={()=>{setmenus('Tanjore')}}>Tanjore Painting </h3>
            <h3 className={menus==='Finger'?'actives':''} onClick={()=>{setmenus('Finger')}}> Finger Painting </h3>
            <h3 className={menus==='Resin'?'actives':''} onClick={()=>{setmenus('Resin')}}> Resin Painting </h3>
            <h3 className={menus==='Relief'?'actives':''} onClick={()=>{setmenus('Relief')}}>Relief Painting </h3>
            <h3 className={menus==='Mossaic'?'actives':''} onClick={()=>{setmenus('Mossaic')}}>Mossaic Painting </h3>
        </div>
        <div className='preview'>
            <div className='prev'>
                <img src={img2} alt="" />
                <p>Oil Paintong</p>
                <div className='stars'>
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                </div>
            </div>
            <div className='prev'>
                <img src={img2} alt="" />
                <p>Oil Paintong</p>
                <div className='stars'>
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                </div>
            </div>
            <div className='prev'>
                <img src={img2} alt="" />
                <p>Oil Paintong</p>
                <div className='stars'>
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                </div>
            </div>
            <div className='prev'>
                <img src={img2} alt="" />
                <p>Oil Paintong</p>
                <div className='stars'>
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                </div>
            </div>
            <div className='prev'>
                <img src={img2} alt="" />
                <p>Oil Paintong</p>
                <div className='stars'>
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                </div>
            </div>
            <div className='prev'>
                <img src={img2} alt="" />
                <p>Oil Paintong</p>
                <div className='stars'>
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                    <img src={stars} alt="" />
                </div>
            </div>
        </div>
        <button>View More</button>
    </div>
  )
}

export default Cards
