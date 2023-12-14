import React from 'react';
import {Link} from 'react-router-dom';
import Sky from '../assets/images/nightsky.jpg';
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" >  
      <div className="headerContainer" style={{backgroundImage: `url(${Sky})` }}>
        <h1>New Age Space Exploration</h1>
        <p>Exlpore with us</p>
      </div>
    </div>
  )
}

export default Home;
