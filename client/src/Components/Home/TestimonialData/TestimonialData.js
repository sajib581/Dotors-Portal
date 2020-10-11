import React from 'react';

const TestimonialData = ({ testimonialData }) => {
    return (
        <div className="card shadow-sm px-3">
            <p className="card-text pt-3 text-secondary ">{testimonialData.quotes}</p>
            <div className="card-body row">
                <img height="60" src={testimonialData.img} alt="" />
                <div className="ml-3 mb-3 align-items-center">
                    <h6 className="text-primary">{testimonialData.name}</h6>
                    <p className="text-secondary ">{testimonialData.from}</p>
                </div>
            </div>
        </div>

    );
};

export default TestimonialData;