import React, { useState } from 'react'
import './Navbar.css'
import search from '../../assets/search_icon.png'
import facebook from '../../assets/facebook_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'
import twitter from '../../assets/twitter_icon.png'
const Navbar = () => {
    const [menu,setMenu]=useState("Home");
  return (
    <div className='navbar'>
     <h1>Arasi Arts</h1>
     <ul className='navbar-menu'>
        <li className={menu==='Home'?'active':''} onClick={()=>{setMenu('Home')}}>Home</li>
        <li className={menu==='Products'?'active':''} onClick={()=>{setMenu('Products')}}>Products</li>
        <li className={menu==='Classes'?'active':''} onClick={()=>{setMenu('Classes')}}>Classes</li>
        <li className={menu==='Blogs'?'active':''} onClick={()=>{setMenu('Blogs')}}>Blogs</li>
     </ul>
     <div className='navbar-right'>
        <img src={search}alt="" />
        <div className='right'>
            <img src={facebook} alt="" />
            <img src={linkedin_icon} alt="" />
            <img src={twitter} alt="" />
        </div>
        <button>contact us</button>
     </div>
    </div>
  )
}

export default Navbar
