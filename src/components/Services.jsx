import React from 'react';
import { Service_List } from '../data/servicedata'

const Services = () => {
    return (
        <section className="card_with_content--wrapper">
            <div className="container">
                <div className="card_with_content--inner">
                    <div className="icc_titleBlock">
                        <h2 className="icc_title">Services</h2>
                    </div>
                    <div className="row">

                        {/* Tuition & Fees */}
                        <div className="col-md-12">
                            <div className="card-wrapper">
                                <div className="card-content">
                                    {/* <h4>Tuition & Additional Fees</h4> */}
                                    <ul className="full-card-wrapper">
                                        {Service_List.map((step, index) => (
                                            <li><span>{step.title}:</span> <br /> {step.description}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
