import React from "react";
import { useLocation } from "react-router-dom";

// Image imports
import IsaImg from "../assets/images/amrita-pic.jpg";

const AboutMe = () => {

    return (
        <section className="left_side_text-wrapper bg-gray">
            <div className="container">
                <div className="left_side_text_inner">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="icc_titleBlock left-side-about">
                                <h2 className="icc_title">About Me!</h2>
                                <p className="icc_subTitle">I’m a passionate Front-End Developer with over 4+ of hands-on experience delivering dynamic, responsive, and user-focused web applications. I specialize in building sleek, high-performance interfaces that elevate digital experiences and drive user engagement. </p>
                                <p className="icc_subTitle"> Throughout my career, I've collaborated with cross-functional teams on diverse client projects across retail, e-commerce, travel, and healthcare sectors—translating business goals into seamless, accessible, and visually compelling web solutions.</p>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="image-wrapper">
                                <img src={IsaImg} alt="Amrita About" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
