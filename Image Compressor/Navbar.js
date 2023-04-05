import React from 'react'
import Logo from "./imagecomp.jpg";
import './Navbar.css'

function Navbar() {

  return (
    <div className="Navbar">
      <div className="Left">

        <img src={Logo} alt="Logo"/>
        
      </div>
    </div>
  )
}

export default Navbar