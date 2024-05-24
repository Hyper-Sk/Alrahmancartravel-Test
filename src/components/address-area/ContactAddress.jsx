import React from 'react'
import './address.css'

const ContactAddress = () => {
    return (
        <section className='contact-address section-center'>
            <div className="contact__phone">
                <a href="tel:+918008846482">
                    <i class="uil uil-outgoing-call"></i> <span> +918008846482</span> 
                </a>
            </div>
            <div className="contact__whatsapp">
                <a href="http://wa.link/e98guy" target="_blank" rel="noopener noreferrer">
                <i class="uil uil-whatsapp"></i>
                <span> +918008846482</span> 
                </a>
            </div>
            <div className="contact__mail">
                <a href="mailto:sohailshaiksk@gmail.com" target="_blank" rel="noopener noreferrer">
                <i class="uil uil-envelope-download"></i> <span>example@gmail.com</span> 
                </a>
            </div>
            <div className="contact__address">
            <a href="#">
              <i class="uil uil-map-marker"></i><span>12-1-85/11, Mallepally, Asif Nagar, Hyderabad</span>
              </a>
            </div>
        </section>
    )
}

export default ContactAddress
