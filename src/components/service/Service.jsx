import React from 'react'
import './service.css'
import ServiceCard from './ServiceCard'

import img1 from '../../assets/places/chowmahala-palace.jpg'
import img2 from '../../assets/rent.jpg'
import img3 from '../../assets/wedding-cars/wedding.jpg'


const Service = () => {
    return (
        <section className='service section-center'>
            <ServiceCard
                link={'/sightseeing-tour'}
                service={'Sightseeing Tour'}
                img={img1}
            />
            <ServiceCard
                link={'/car-rental'}
                service={'Car Rental'}
                img={img2} />
            <ServiceCard
                link={'/wedding-cars'}
                service={'Wedding Car'}
                img={img3} />

        </section>
    )
}

export default Service