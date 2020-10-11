import React from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    return (
        <section className="my-5 py-5">
            <div className="container">
                <h4 className="text-center mb-3" style={{ color: '#1CC7C1' }}>Our Doctors</h4>
                <div className="row">
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                    <Doctor></Doctor>
                </div>
            </div>
        </section>
    );
};

export default Doctors;