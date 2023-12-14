import React, { useState } from 'react';
import Logo from '../assets/images/earth.jpg';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css'

function NavBar() {
    const [openLinks, setOpenLinks] = useState(false);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Earth" />
        <div className='hiddenLinks'>
        <Link to="/"> Home </Link>
        <Link to="/planets"> Planets </Link>
        <Link to="/about"> About Us </Link>
        <Link to="/jobs"> Jobs </Link>
        <Link to="/Contact"> Contact Us</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/planets"> Planets </Link>
        <Link to="/about"> About Us </Link>
        <Link to="/jobs"> Jobs </Link>
        <Link to="/Contact"> Contact Us</Link>
        <button onClick={toggleNavbar}>
         <ReorderIcon />
        </button>
      </div>
    </div>
  )
}

export default NavBar
