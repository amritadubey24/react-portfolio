import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo1 from "../assets/images/fav.svg"; // adjust path as per your structure

const Header = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
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
            <ul className={`navlinks ${menuOpen ? "active" : ""}`}>
              <li className={pathname === "/" ? "active" : ""}>
                <NavLink to="/" end>Home</NavLink>
              </li>
              <li className={pathname === "/about" ? "active" : ""}>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li className={pathname === "/services" ? "active" : ""}>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className={pathname === "/works" ? "active" : ""}>
                <NavLink to="/works">Portfolio</NavLink>
              </li>
              <li className={pathname === "/blogs" ? "active" : ""}>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
            </ul>
            {/* <li className="mobile-show"><Link to="/contact" className="btn btn-primary">Contact Us</Link></li> */}
            {/* <ul className="d-flex navicons">
              <li><Link to="/contact" className="btn btn-primary">Contact Us</Link></li>
            </ul> */}

            <div className={`icc_mobileToggle ${menuOpen ? "active" : ""}`}
              onClick={toggleMobileMenu}>
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
