import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Slider from '../components/slider/Slider'
import Heading from '../components/heading/Heading'
import Para from '../components/para/Para'
import Service from '../components/service/Service'
import Gallery from '../components/gallery-area/Gallery'



const Home = () => {

  
  return (     
      <div style={{marginTop : '0px'}}>
      <Header />
      <Slider />
      <Heading title={'Service'} desc={'Effortless travel starts here. Trust our comprehensive car services for a seamless and reliable transportation experience.'} />
      <Service />
      <Heading title={'About Us'} desc={'We are your gateway to unforgettable experiences. Committed to excellence, we provide seamless services, creating cherished memories.'} />
      <Para />
      <Footer />
      </div>
  )
}

export default Home