import React from 'react';
import fluride from '../../../images/fluride.png'
import cavity from '../../../images/cavity.png'
import whiteIEning from '../../../images/whiteIEning.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const serviceData = [
        {
            name: 'Flurid Treatment',
            img: fluride
        },
        {
            name: 'Cavity Filling',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            img: whiteIEning
        }
    ]
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row text-white w-75 mt-5 pt-3">
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;