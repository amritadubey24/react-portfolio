import React from "react";
import bannerImage from "../assets/images/amrita-pic.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <>
            <section className="icc_bannerBlock--wrapper d-none">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="icc_bannerContent">
                                <h1>Amrita Dubey</h1>
                                <p>Crafting responsive and user-friendly web experiences</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="icc_bannerBlock--wrapper">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Content */}
                        <div className="col-lg-7 col-md-6">
                            <div className="icc_bannerContent">
                                <span className="icc_tagline">Front-end Developer</span>
                                <h1>
                                    Amrita  <span>Dubey!</span>
                                </h1>
                                <p>Crafting responsive and user-friendly web experiences</p>
                                <ul className="icc_buttonBlock">
                                    <li>
                                        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link href={require("../assets/images/Amrita_Dubey_Resume.pdf")}
                                            download="Amrita_Dubey_Resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer" className="btn btn-secondary">Hire Me!</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;
