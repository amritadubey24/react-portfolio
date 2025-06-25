import React from "react";
import { Link } from "react-router-dom";
import whiteLogo1 from "../assets/images/fav-white.svg"; // adjust the path if needed

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="icc_footer--wrapper">
            <div className="container">
                <div className="icc_footer--inner">
                    <div className="icc_footerLinks">
                        <div className="row">
                            <div className="col-lg-4 col-md-4  col-sm-4">
                                <div className="icc-footerBlock">
                                    <div className="icc_footerlogo">
                                        <Link to="/">
                                            <img src={whiteLogo1} alt="ICCOC White Logo" className="img-fluid" />
                                            <p>Am<span>rita</span></p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="icc-footerBlock primaryBlock">
                                    <div className="footer_socialLinks">
                                        <ul>
                                            <li><Link to="/"><span className="icc_footerIcon facebook" target="_blank"></span></Link></li>
                                            <li><Link to="/"><span className="icc_footerIcon twitter" target="_blank"></span></Link></li>
                                            <li><Link to="https://in.linkedin.com/in/amrita-dubey-43b4ba1ab"><span className="icc_footerIcon linkedin"></span></Link></li>
                                            <li><Link to="/"><span className="icc_footerIcon insta" target="_blank"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="icc_footerBottom--strip">
                    <p><span>© {currentYear} Amrita Dubey.</span> All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
