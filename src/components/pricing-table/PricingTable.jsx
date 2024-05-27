import React from 'react'
import './pricing.css'
import { Link } from 'react-router-dom'

import img_1 from './../../assets/car-images/1.png'
import img_2 from './../../assets/car-images/2.png'
import img_3 from './../../assets/car-images/3.png'
import img_4 from './../../assets/car-images/4.png'

const PricingTable = () => {
    return (
        <section className='pricing-table section-center'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src={img_1} alt="swift" />
                        </td>
                        <td>
                            <p>
                                A/C
                            </p>
                            <p>
                                Swift Dzire, Toyota Etios, Mahindra Verito
                            </p>
                        </td>
                        <td>
                            <p>
                                4 Seater
                            </p>
                        </td>
                        <td>
                            <p>
                               -
                            </p>
                        </td>
                        <td>
                            <p>
                                <Link to={'/contact'}>Book Now <i class="uil uil-arrow-up-right"></i></Link>
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src={img_2} alt="swift" />
                        </td>
                        <td>
                            <p>
                                A/C
                            </p>
                            <p>
                                Toyota Innova
                            </p>
                        </td>
                        <td>
                            <p>
                                7 Seater
                            </p>
                        </td>
                        <td>
                            <p>
                                -
                            </p>
                        </td>
                        <td>
                            <p>
                                <Link to={'/contact'}>Book Now <i class="uil uil-arrow-up-right"></i></Link>
                            </p>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <img src={img_3} alt="swift" />
                        </td>
                        <td>
                            <p>
                                A/C
                            </p>
                            <p>
                                Chevrolet Tavera
                            </p>
                        </td>
                        <td>
                            <p>
                                9 Seater
                            </p>
                        </td>
                        <td>
                            <p>
                               -
                            </p>
                        </td>
                        <td>
                            <p>
                                <Link to={'/contact'}>Book Now <i class="uil uil-arrow-up-right"></i></Link>
                            </p>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <img src={img_4} alt="swift" />
                        </td>
                        <td>
                            <p>
                                A/C
                            </p>
                            <p>
                                Tempo Traveller
                            </p>
                        </td>
                        <td>
                            <p>
                                12 Seater
                            </p>
                        </td>
                        <td>
                            <p>
                               -
                            </p>
                        </td>
                        <td>
                            <p>
                                <Link to={'/contact'}>Book Now <i class="uil uil-arrow-up-right"></i></Link>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>

        </section>
    )
}

export default PricingTable