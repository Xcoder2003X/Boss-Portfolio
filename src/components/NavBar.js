/* eslint-disable no-unused-vars */
import "./navbar.css";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import {FaBars , FaTimes} from "react-icons/fa";

function Navbar() {
  
  const [Click ,SetClick] = useState(false);
  const handleClick = () => SetClick(!Click);

  const [color , SetColor] = useState(false);
  const ChangeColor = () => {
    if(window.scrollY >=100
    ){
    SetColor(true);}
    else{
    SetColor(false);}
  };

  window.addEventListener('scroll', ChangeColor);
  return (
    <div className= { color ? "header header-bg" : "header" }>
        <Link to ="/">
        <h1> Potfolio.</h1>
        </Link>

        <ul className={Click ? "nav-menu active" : "nav-menu"}>
          <li><Link to = "/" >Home</Link></li>
          <li><Link to = "/projects" >Projects</Link></li>
          <li><Link to = "/about" >About</Link></li>
          <li><Link to = "/contact" >Contact</Link></li>
        </ul>

      <div className="hamburger" onClick={handleClick}>
        {  Click ? (<FaTimes size={20} style={{color:"white"}}/>) :
            (<FaBars size={20} style={{color:"white"}}/> )}
        </div>        
    </div>
  )
}

export default Navbar