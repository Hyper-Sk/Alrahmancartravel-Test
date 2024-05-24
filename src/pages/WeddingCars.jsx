import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Slider from '../components/slider/Slider'
import Heading from '../components/heading/Heading'
import Para2 from '../components/para/Para2'
import Cars from '../components/service/Cars'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'

// images 
import img from '../assets/car-images/wedding-car.jpg'

const WeddingCars = () => {
  return (
    <div style={{ marginTop: '0px' }}>
      <Header />
      <Breadcrumb name={'Wedding Cars'} img={img} />
      <Heading title={'Decorated Luxury Wedding Cars '} desc={'The car of your choice is just call away CALL NOW at +91 8008846482'} />
      <Para2 />
      <Heading title={'Wedding Cars for Rent'} desc={'The car of your choice is just call away CALL NOW at +91 8008846482'} />
      <Cars />
      <Footer />
    </div>
  )
}

export default WeddingCars