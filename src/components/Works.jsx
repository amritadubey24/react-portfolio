import React from "react";
import { Link } from "react-router-dom";
import { Works_Data } from "../data/works";

const Works = ({ showAll = false }) => {
    const displayedWorks = showAll ? Works_Data : Works_Data.slice(0, 6);

    return (
        <section className="icc_serviceCard--wrapper">
            <div className="container">
                <div className="icc_titleBlock">
                    <h2 className="icc_title">Portfolio</h2>
                </div>

                <div className="icc_serviceCard--block">
                    <ul>
                        {displayedWorks.map((item, index) => (
                            <li className="icc_serviceCard" key={index}>
                                <div className="icc_cardImage">
                                    <img src={item.image} alt={item.title || item.name} />
                                </div>
                                {/* Optional content */}
                                {/* <div className="icc_cardContent">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div> */}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Show button only when not on full works page */}
                {!showAll && (
                    <div className="buttonBlock text-center">
                        <Link to="/works" className="btn btn-primary mt-5">
                            Load More
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Works;
