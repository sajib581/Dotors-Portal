import React from 'react';
import harry from '../../../images/harry.png'
import ema from '../../../images/ema.png'
import aliza from '../../../images/aliza.png'
import TestimonialData from '../TestimonialData/TestimonialData';

const Testimonial = () => {
    const testimonialData = [
        {
            quotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit.quibusdam doloribus sequi libero molestiae dolorem tempora consequatur veniam alias labore!",
            name: 'Willson Harry',
            from: 'Callifornia',
            img: harry
        },
        {
            quotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit.quibusdam doloribus sequi libero molestiae dolorem tempora consequatur veniam alias labore!",
            name: 'Ema Gomez',
            from: 'New York',
            img: ema
        },
        {
            quotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit.quibusdam doloribus sequi libero molestiae dolorem tempora consequatur veniam alias labore!",
            name: 'Aliza',
            from: 'Callifornia',
            img: aliza
        }
    ]
    return (
        <div className="m-5 py-5 px-3">
            <div className="container">
            <h5 style={{ color: '#1CC7C1' }}>TESTIMONIAL</h5>
            <h1>What's Our Patients <br /> Says</h1>
            
            <div class="card-deck mt-5">
                {
                    testimonialData.map(data => <TestimonialData testimonialData={data}></TestimonialData>)
                }
            </div>
            </div>
        </div>
    );
};

export default Testimonial;