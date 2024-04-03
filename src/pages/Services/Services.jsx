import React from 'react';
import './Services.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MiniNaw from '../../components/MiniNaw/MiniNaw';
import { Link } from 'react-router-dom';
import isTop from '../../assets/icons/isTop.svg'
import { ALL_DATA } from '../../Query/get_all';

const Services = () => {
    const services = ALL_DATA.useServices()
    console.log(services);
    return <>
            <Navbar/>
            <div className='container'>
                <h1>Services</h1>
                <div className="services-wrap">
                    <div className="services-card">
                        <img src={isTop} alt="" className="services-caer-img" />
                        <h4 className='services-card-name'>Top</h4>
                        <p className='services-card-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, assumenda illum nostrum vitae perferendis inventore, architecto aliquam tenetur cum!</p>
                        <Link className='services-card-link' to='/tarif'>View tariff</Link>
                    </div>
                    <div className="services-card">
                        <img src={isTop} alt="" className="services-caer-img" />
                        <h4 className='services-card-name'>Top</h4>
                        <p className='services-card-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, assumenda illum nostrum vitae perferendis inventore, architecto aliquam tenetur cum!</p>
                        <Link className='services-card-link' to='/tarif'>View tariff</Link>
                    </div>
                    <div className="services-card">
                        <img src={isTop} alt="" className="services-caer-img" />
                        <h4 className='services-card-name'>Top</h4>
                        <p className='services-card-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, assumenda illum nostrum vitae perferendis inventore, architecto aliquam tenetur cum!</p>
                        <Link className='services-card-link' to='/tarif'>View tariff</Link>
                    </div>
                </div>
            </div>
            <MiniNaw/>
            <Footer/>
        </>
};

export default Services;