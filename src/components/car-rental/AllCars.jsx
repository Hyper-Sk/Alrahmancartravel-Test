import React from 'react'
import './car.css'
import CarCard from './CarCard'

const AllCars = () => {

    let  cars =  [
        {
            carName : 'Swift Desire',
            // carImg : 
            
        },
        {
            carName : 'Innova'

        },
        {
            carName : 'Innova Crysta'

        },
        {
            carName : 'Etios'

        },
        {
            carName : 'Verito'

        },
        {
            carName : 'Indica'

        },
    ]

    return (
        <section className='all-cars section-center'>
            <CarCard />
           
        </section>
    )
}

export default AllCars