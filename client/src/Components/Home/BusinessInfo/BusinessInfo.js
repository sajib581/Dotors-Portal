import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    const infosData = [
        {
            title: 'Opening Hour',
            description: "We are open 7 days",
            icon: faClock,
            background: 'primary'
        },
        {
            title: 'Visit Our location',
            description: "Narayanganj, Bangladesh",
            icon: faMapMarker,
            background: 'dark'
        },
        {
            title: 'Call us now',
            description: "+88 01223344",
            icon: faPhone,
            background: 'primary'
        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="row text-white w-75">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;