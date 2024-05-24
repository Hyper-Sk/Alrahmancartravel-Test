import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p className='copyright'>2024 <Link to={'/'} >Al Rahman Car Travels.</Link> All Right Reserved</p>
      <p className='powered'>Powered by <a href="https://www.linkedin.com/in/shaik-sohail-ba49351b3/?originalSubdomain=in" target='blank_' >Developer</a></p>
    </footer>
  )
}

export default Footer