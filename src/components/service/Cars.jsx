import React from 'react'
import ServiceCard from './ServiceCard'

import img1 from '../../assets/wedding-cars/wedding-1.jpg'
import img2 from '../../assets/wedding-cars/wedding-2.jpg'
import img3 from '../../assets/wedding-cars/wedding-3.jpg'

const Cars = () => {
  return (
    <section className='cars-container service section-center'>
       <ServiceCard
              link={'/contact'}
              service={'Book Now'}
              img={img1}
          />
       <ServiceCard
              link={'/contact'}
              service={'Book Now'}
              img={img2}
          />
       <ServiceCard
              link={'/contact'}
              service={'Book Now'}
              img={img3}
          />
    </section>
  )
}

export default Cars
