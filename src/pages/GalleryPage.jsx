import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Heading from '../components/heading/Heading'
import Slider from '../components/slider/Slider'
import AllCars from '../components/car-rental/AllCars'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'

// images 
import img from '../assets/places/birla-mandir.jpg'
import Gallery from '../components/gallery-area/Gallery'

const GalleryPage = () => {
  return (
    <div style={{ marginTop : '0px' }}>
      <Header />
      <Breadcrumb name={'Car Rental'} img={img} />
      {/* <Slider /> */}
      <Heading title={'Our Gallery'} desc={'Al Rahman Car Travels is the reputed Tour and Cars rental service in Hyderabad. We make car hiring hassle free and simple and at Affordable price too and 24/7 customer Support for Best Car Rental Experience. All the cars in our fleet are available for local and outstation travel.'} />
      <Gallery />
      <Footer /> 
    </div>
  )
}

export default GalleryPage