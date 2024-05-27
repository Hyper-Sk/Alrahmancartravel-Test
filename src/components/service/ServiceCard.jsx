import React from 'react'
import './service.css'
import { Link } from 'react-router-dom'

const ServiceCard = ({service,img,link}) => {
  return (
      <section className='card__single'>
          <img className='img-loading' src={img} alt="" />
          <div className='overlay'>
              <Link to={link}> {service} <i class="uil uil-eye"></i></Link>
          </div>
      </section>
  )
}

export default ServiceCard