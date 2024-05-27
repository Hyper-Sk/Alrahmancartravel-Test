import React from 'react'
import './featured.css'
import featured_img from './../../assets/places/charminar.jpg'

const Featured = () => {
    return (
        <section className='featured section-center'>
            <div className="featured__text">
                <h3>Hyderabad City Tour Itinerary</h3>
                <ol>
                    <li>Discover Hyderabad all day with our City Tour</li>
                    <li>Experience a fixed itinerary tour exploring iconic sights like the Qutub Shahi Tombs, Golconda Fort, Charminar, Chowmahalla Palace, Salar Jung Museum, Birla Mandir, and Lumbini Park by Hussain Sagar Lake.</li>
                    <li>Starts at 9 in the morning and ends at 9 in the evening.</li>
                    <li>Included in the package are parking fees, driver's allowance, as well as convenient pickup and drop-off services from your residence or hotel.</li>
                    <li>Not included are entry fees and meals throughout the day, which you will need to cover separately.</li>
                </ol>
            </div>
            <div className="featured__img">
                <img className='img-loading' src={featured_img} alt={featured_img} />
            </div>
        </section>
    )
}

export default Featured