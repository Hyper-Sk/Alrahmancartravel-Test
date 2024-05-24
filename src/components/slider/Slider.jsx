import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// images 
import golconda from './../../assets/places/golconda.jpg'
import birlaMandir from './../../assets/places/birla-mandir.jpg'
import charminar from './../../assets/places/charminar.jpg'
import sevenTomb from './../../assets/places/seven-tombs.jpg'
import chowmahala from './../../assets/places/chowmahala-palace.jpg'
import golconda_2 from './../../assets/places/golconda-2.jpg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <section className='slider'>
            <Swiper
                spaceBetween={0}
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}

                loop={true}
                //  pagination={{
                //    clickable: true,
                //  }}
                //  navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="overlay">
                        <div>
                            <h2>Car <span>Rental</span></h2>
                            <p>"Drive in style with our premium car rental services. Explore the world on your terms, choosing from our diverse fleet. Unleash the joy of travel with comfort and convenience."</p>
                            <Link to="/car-rental">Read More</Link>
                        </div>
                    </div>
                    <img className='img-loading' loading='lazy' src={charminar} alt={charminar} />
                </SwiperSlide>
                <SwiperSlide>

                    <div className="overlay">
                        <div>
                            <h2>Siteseeing <span>Tour</span></h2>
                            <p>"Embark on a captivating journey with our sightseeing tours! Discover iconic landmarks, immerse in rich culture, and create unforgettable memories. Unveil the world's wonders through our expertly curated experiences."</p>
                            <Link to="/sightseeing-tour">Read More</Link>
                        </div>
                    </div>
                    <img  className='img-loading' loading='lazy' src={golconda} alt={golconda} />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="overlay">
                        <div>
                            <h2>Luxary <span>Wedding Cars</span></h2>
                            <p>"Experience opulence on your special day with our fleet of luxury wedding cars. Elevate your wedding with style and sophistication, creating timeless memories in the epitome of elegance and luxury."</p>
                            <Link to="/wedding-cars">Read More</Link>
                        </div>
                    </div>
                    <img className='img-loading' loading='lazy' src={birlaMandir} alt={birlaMandir} />
                </SwiperSlide>
                
                


            </Swiper>
        </section>
    )
}

export default Slider