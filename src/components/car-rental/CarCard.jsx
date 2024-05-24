import React from 'react'
import './car.css'
import { Link } from 'react-router-dom'
import img from '../../assets/car-images/swift-dzire.jpg'

const CarCard = () => {
    return (
        <section className='car-card'>
            <img src={img} alt="1" />
            <div className="car-card__text">
                <h3>Swift Desire</h3>
                <h4>8 Hour 80kms 2500 /-</h4>
                <p>Per Kms : 12 /- per km</p>
                <p>Extra Kms : 14 /- per km</p>
                <p>Extra Hour : 150 /- per Hour</p>
                <p>Per Calendar (day) : 300 km</p>
                <p>Drive Bhatta : 500</p>
                <p className='car-card__btn'>
                    <Link to={'/contact'}>Book Now</Link>
                </p>
            </div>
        </section>
    )
}

export default CarCard