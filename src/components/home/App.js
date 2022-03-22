import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import ParticleBackround from '../ParticleBackround'
import HomePage from './HomePage'
import Navbar from './Navbar'


function Home() {
  return (
     <>
     
      <Navbar/>
      <HomePage/>
      

      </>
    
  )
}

export default Home