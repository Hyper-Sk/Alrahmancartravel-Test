import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Heading from '../components/heading/Heading'
import Slider from '../components/slider/Slider'
import AllCars from '../components/car-rental/AllCars'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'

// images 
import img from '../assets/car-images/car-1.jpg'

const CarRental = () => {
  return (
    <div style={{ marginTop : '0px' }}>
      <Header />
      <Breadcrumb name={'Car Rental'} img={img} />
      {/* <Slider /> */}
      <Heading title={'Car Rental'} desc={'"Explore with ease. We rent premium cars for a seamless journey with our convenient and reliable service."'} />
      <AllCars />
      <Footer /> 
    </div>
  )
}

export default CarRental