import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import logo from '../../assets/logo_2.png'


const Header = () => {
    const [toggle, setToggle] = useState(false);
    console.log(toggle);

    const location = useLocation();

    return (
        <header className='header'>
            <div className="header__social">
                <div className="header__social-center section-center">
                    <div className="header-social-left">
                        <a href="tel:+918008846482"> <p> <i class="uil uil-phone"></i> +91 8008846482 </p></a>
                    </div>
                    <div className="header__social-right">
                        <a href="http://facebook.com" rel="noopener noreferrer" target="_blank"><i class="uil uil-facebook-messenger-alt"></i></a>
                        <a href="http://wa.link/e98guy" target="_blank" rel="noopener noreferrer"><i class="uil uil-whatsapp"></i></a>
                        <a href="mailto:alrahmancartravel@gmail.com.com" target="_blank" rel="noopener noreferrer"><i class="uil uil-envelope-upload"></i></a>
                    </div>
                </div>
            </div>
            <div className="header-content section-center">
                <div className="header__logo">
                    <Link to="/">
                    <img src={logo} alt="logo" />
                    </Link>
                </div>
                <ul className={toggle ? 'header__menu active' : 'header__menu' }>
                    <span className='toggle_close'>
                        <i class="uil uil-times" onClick={( ) => setToggle(false)}></i>
                    </span>
                    <li className={location.pathname == '/' && 'active' }> 
                        <Link to='/' className="header__link">
                            Home
                        </Link>
                    </li>
                    <li className={location.pathname == '/car-rental' && 'active' } >
                        <Link to='/car-rental' className="header__link">
                            Car Rental
                        </Link>
                    </li>
                    <li className={location.pathname == '/gallery-page' && 'active' } >
                        <Link to='/gallery-page' className="header__link">
                            Gallery
                        </Link>
                    </li>
                    <li className={location.pathname == '/sightseeing-tour' && 'active' } >
                        <Link to='/sightseeing-tour' className="header__link">
                            Sightseeing Tour
                        </Link>
                    </li>
                    <li className={location.pathname == '/wedding-cars' && 'active' }>
                        <Link to='/wedding-cars' className="header__link">
                            Wedding Cars
                        </Link>
                    </li>
                    <li className={location.pathname == '/contact' && 'active' }>
                        <Link to='/contact' className="header__link">
                            Contact
                        </Link>
                    </li>

                    {/* <li><Link to='/blog' className="header__link">Blog</Link></li> */}
                    {/* <li><Link to='/about' className="header__link">About</Link></li> */}
                </ul>
                <div className="togglebar">
                    <i class="uil uil-apps" onClick={() => setToggle(true)}></i>
                </div>
            </div>
         
        </header>
    )
}

export default Header