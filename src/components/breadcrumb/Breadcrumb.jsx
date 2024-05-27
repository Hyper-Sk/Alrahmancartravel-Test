import React from 'react'
import { Link } from 'react-router-dom'
import './breadcrumb.css'

const Breadcrumb = ({ name, img }) => {
  return (

    <section className='breadcrumb' style={{ backgroundImage: `url(${img})` }} >
      <div className='section-center'>
        <div className="overlay">
          <p> <Link to="/" >Home</Link> <i class="uil uil-angle-right-b"></i> {name}</p>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
