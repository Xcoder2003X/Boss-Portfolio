import React from 'react'
import "./heroImg.css";
import IntroImg from "../assets/intro.jpg"
import {Link} from "react-router-dom"
function HeroImg() {
  return (
    <div className='hero'>
    <div className='mask'>
      <img className='intro-img' alt='Introimg' src ={IntroImg}/>
    </div>
    <div className="content">
        <p>HI , I M A SOFTWARE ENGINEER</p>
        <h1>React Devlopper.</h1>
    
    <Link to="/projects" className='btn'>Projects</Link>
    <Link to="/contact" className='btn btn-light'>Contact</Link>
    </div>
    </div>
  )
};

export default HeroImg