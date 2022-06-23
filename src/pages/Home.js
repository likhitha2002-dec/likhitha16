import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div className='home'>
       <div className='headerContainer'>
        <h1>Pedro's Pizzeria</h1>
        <p>Pizza To Fit Any Taste</p>
        <Link to="/menu">
        <button>Oder Now</button>
        </Link>
        </div> 
    </div>
  )
}

export default Home