import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/fav.svg"; // adjust path as per your structure

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // change scrollY value as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`icc_header--wrapper ${scrolled ? "sticky" : ""}`}>
      {/* Header Inner */}
      <div className="icc_header--inner">
        <div className="container">
          <div className="d-flex icc_header--flex">
            {/* Logo */}
            <div className="icc_logo">
              <Link to="/">
                <img src={logo1} alt="ICCOC Logo" className="img-fluid" />
                <p>Am<span>rita</span></p>
              </Link>
            </div>

            {/* Navigation Links */}
            <ul className="navlinks">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li><Link to="/services">Services</Link></li>
              <li> <Link to="/skills">Skills</Link></li>
              <li> <Link to="/works">Portfolio</Link></li>
              <li className="mobile-show"><Link to="/contact" className="btn btn-primary">Contact Us</Link></li>
            </ul>
            <ul className="d-flex navicons">
              <li><Link to="/contact" className="btn btn-primary">Contact Us</Link></li>
            </ul>

            <div className="icc_mobileToggle">
              <Link>
                <span></span>
                <span></span>
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
