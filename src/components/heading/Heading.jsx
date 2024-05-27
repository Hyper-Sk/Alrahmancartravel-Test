import React from 'react'
import './heading.css'

const Heading = ({ title, desc }) => {

  return (
    <div className='heading section-center'>
      {title &&
        <h2 className='heading__title'>{title}</h2>
      }
      {desc &&
        <p className='heading__desc'>{desc}</p>
      }
    </div>
  )
}

export default Heading