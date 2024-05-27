import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Slider from '../components/slider/Slider'
import Heading from '../components/heading/Heading'
import Para from '../components/para/Para'
import Featured from '../components/features-section/Featured'
import PricingTable from '../components/pricing-table/PricingTable'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'

// images 
import img from '../assets/places/ramoji.jpg'


const SightTour = () => {
  return (
    <div style={{marginTop : '0px'}}>
      <Header />
      <Breadcrumb name={'Sight Seeing Tour'} img={img} />
      <Heading title={'Hyderabad City Tour Package'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nesciunt.'} />
      <Para />
      <Featured />
      <PricingTable />
      <Footer />
    </div>
  )
}

export default SightTour