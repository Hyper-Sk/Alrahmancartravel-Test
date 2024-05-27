import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Slider from '../components/slider/Slider'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import Heading from '../components/heading/Heading'

// images 
import img from '../assets/car-images/contact.jpg'
import Form from './../components/form/Form'
import ContactAddress from '../components/address-area/ContactAddress'

const Contact = () => {
  return (
    <div style={{marginTop : '0px'}}>
      <Header />
      <Breadcrumb name={'Contact Us'} img={img} />
      <Heading title={'Contact Us'} desc={'Get in touch for personalized assistance. Our dedicated team is here to answer your queries and provide support.'} />
      <Form />
      <ContactAddress />
      <Footer /> 
    </div>
  )
}

export default Contact