import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'

function About() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading ="About." text= "I am a Talented Software Enginner " />
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About