import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav id='navbar'>
        <div id="left-links">
          <div><Link to='/'> Home </Link> </div>
          <div><Link to='/anime'> Animes </Link> </div>
          <div><Link to='/Favorito'>Favorito</Link> </div>
          <div><Link to='/notes'> Notes </Link> </div>
        </div>

        <div id='right-links'>
          <Link to="/login">Login</Link> 
        </div>
    </nav>
  )
}

export default Navbar