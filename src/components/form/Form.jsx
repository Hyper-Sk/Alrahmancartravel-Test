import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import emailjs from '@emailjs/browser'
import './form.css'

const Form = () => {
  const [message, setMessage] = useState(false)
  const form = useRef();
  const navigate = useNavigate()

  setTimeout(()=>{
    setMessage(false)
  },5000)

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm('service_eetv1gr', 'alrahmancartravels1212', form.current, 'FdsWPpDPwjTBbhALp')
      .then((result) => {
        console.log(result.text);
        setMessage(true)
        console.log(message)
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail} className='form-container section-center'>
        <div className='field'>
          <label>Name</label>
          <input type="text" name="name" required placeholder='Enter your Name' />
        </div>
        <div className='field'>
          <label>Email</label>
          <input type="email" name="email" required placeholder='Enter your Email' />
        </div>
        <div className='field'>
          <label>Phone</label>
          <input type="tel" name="phone" required maxLength="10" placeholder='Enter your phone number' />
        </div>
        <div className='field'>
          <label>Message</label>
          <textarea name="message" placeholder='Message Here...' />
        </div>
        <button type="submit" >
          Submit
        </button>
      {message && <div className="message">
        <p>Message Sent Successfully !!!</p>
      </div>
      }
      </form>



    </div>
  );
};

export default Form;