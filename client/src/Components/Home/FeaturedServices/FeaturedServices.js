import React from 'react';
import featured from '../../../images/featured.png'

const FeaturedServices = () => {
    return (
        <section>
            <div className="d-flex featured-service pb-md-5 my-5 justify-content-center">
                <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={featured} alt="" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Execptional Dental <br />Care, on Your Terms</h1>
                        <p className ="text-secondary my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia commodi nesciunt reprehenderit, obcaecati voluptatibus laudantium voluptate? Modi, beatae sit? Suscipit quisquam error reiciendis neque? Quas ex quae deleniti, consectetur asperiores exercitationem enim soluta praesentium modi perspiciatis eligendi at! Laborum vel consequuntur, corrupti ipsam mollitia voluptatem iure eaque eveniet sint aut dolores error fugit tempore optio. Ipsam aliquid blanditiis laudantium sapiente quaerat. Aperiam dolores aspernatur minima ullam? Repellendus suscipit numquam nisi!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;