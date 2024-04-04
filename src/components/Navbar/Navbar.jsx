import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav id='navbar'>
        <div>    <Link to='/'> Home </Link> </div>
        <div>    <Link to='/anime'> Animes </Link> </div>
        <div>    <Link to='/Favorito'>Favorito</Link> </div>
    </nav>
  )
}

export default Navbar