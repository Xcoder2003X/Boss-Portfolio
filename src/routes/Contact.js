import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'

function Contact() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading ="Contact." text = "Let s Have A Chat and Solve all Your issues"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact