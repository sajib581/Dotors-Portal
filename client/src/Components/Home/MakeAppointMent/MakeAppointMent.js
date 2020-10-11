import React from 'react';
import doctor from '../../../images/doctor.png';
import './MAkeappointment.css'

const MakeAppointMent = () => {
    return (
        <section className="make-appointment">
            <div className="row">
                <div className="col-md-5">
                    <img src={doctor} alt=""/>
                </div>
                <div className="col-md-7 text-white py-5">
                    <h5>APPOINTMENT</h5>
                    <h1 className="my-4">Make an appointment <br/> Today</h1>                    
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, cupiditate deserunt? Placeat reiciendis culpa dolorum aut reprehenderit dignissimos, sed autem?</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointMent;