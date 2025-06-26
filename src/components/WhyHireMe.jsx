import React from "react";
import { Hire_Data } from '../data/whyhireme'
import { Awards_Data } from '../data/awardsdata'

const WhyHireMe = ({ title, data }) => {
    return (
        <>

            <section className="card_with_bg_img--wrapper card_with_bgsecond--wrapper">
                <div className="container">
                    <div className="card_with_bg_img--inner">
                        <div className="icc_titleBlock text-center">
                            <h2 className="icc_title text-white">{title}</h2>
                        </div>
                        <div className="row">

                            {data.map((item, index) => (
                                <div key={index} className="col-md-3 col-sm-6 mb-4">
                                    <div className="card-wrapper bg-white text-dark p-3 rounded shadow h-100">
                                        <div className="card-content text-center">
                                            <h4>{item.title}</h4>
                                            <p>{item.sub_title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyHireMe;
