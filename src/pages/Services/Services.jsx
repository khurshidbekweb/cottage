import React from 'react';
import './Services.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MiniNaw from '../../components/MiniNaw/MiniNaw';
import { Link } from 'react-router-dom';
import isTop from '../../assets/icons/isTop.svg'
import { ALL_DATA } from '../../Query/get_all';
import { BASE_URL_SERVER } from '../../constants/server.constants';
import { IMG_BASE_URL } from '../../constants/img.constants';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Services = () => {
    const services = ALL_DATA.useServices()
    console.log(services);
    return <>
            <Navbar/>
            <div className='container'>
                <h1>Services</h1>
                <div className="services-wrap">
                    {services.data?.length && services.data.map(el => {
                        return  <div key={el.id} className="services-card">
                                    <LazyLoadImage effect='bulr' src={`${IMG_BASE_URL}${el.images[0]}`} alt={el.name} className="services-caer-img" />
                                    <h4 className='services-card-name'>{el.name}</h4>
                                    <p className='services-card-description'>{el.description}</p>
                                    <Link className='services-card-link' to='/tarif'>View tariff</Link>
                                </div>
                    })}
                </div>
            </div>
            <MiniNaw/>
            <Footer/>
        </>
};

export default Services;