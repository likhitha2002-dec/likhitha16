import React, {useState} from 'react'
import Img2 from "../assests/img-2.jpg";
import {Link} from "react-router-dom";

import '../styles/Navbar.css'
const Navbar = () => {
    const [openLinks,setOpenLinks]=useState(false);
    const toggleNavbar=()=>{
        setOpenLinks(!openLinks);
    }

  return (
    <div className='navbar'>
        <div className='leftside' id={openLinks ? "open" : "close" }>
            <img src={Img2} />
            <div className='hiddenlinks'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">ContactUs</Link>
            </div>
        </div>
         <div className='rightside'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">ContactUs</Link>
            <button onClick={toggleNavbar}></button>
         </div>
    </div>
  )
}

export default Navbar