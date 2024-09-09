import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

function Projects() {
  return (
    <div>
      
      <Navbar/>
      <HeroImg2 heading ="My projects." text ="Some of my Recents Projects "/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Projects