import React from "react";
import { Link } from "react-router-dom";

// Import images
import Img1 from "../assets/images/work-1.png";
import Img2 from "../assets/images/work-2.png";
import Img3 from "../assets/images/work-3.png";
import Img4 from "../assets/images/work-4.png";
import Img5 from "../assets/images/work-5.png";
import Img6 from "../assets/images/work-6.png";
import Img7 from "../assets/images/work-7.png";
import Img8 from "../assets/images/work-8.png";


const Works_Data = [
    {
        image: Img1,
        title: "Sg Jewellers",
    },
    {
        image: Img2,
        title: "Town Connect Network",
    },
    {
        image: Img3,
        title: "MMI Direct",
    },
    {
        image: Img4,
        title: "Marriage Ready",
    },
    {
        image: Img5,
        title: "Machine Tool Bids",
    },
    {
        image: Img6,
        title: "Qashang E-Com",
    },
    {
        image: Img7,
        title: "Harlis",
    },
    {
        image: Img8,
        title: "Accouting Ideas",
    },
];

const Works = () => {
    return (
        <>
            <section className="icc_serviceCard--wrapper">
                <div className="container">
                    <div className="icc_titleBlock">
                        <h2 className="icc_title">Portfolio</h2>
                    </div>

                    <div className="icc_serviceCard--block">
                        <ul>
                            {Works_Data.map((service, index) => (
                                <li className="icc_serviceCard" key={index}>
                                    <div className="icc_cardImage">
                                        <img src={service.image} alt={service.name} />
                                    </div>
                                    {/* <div className="icc_cardContent">
                                        <h4 className="service_name">{service.name}</h4>
                                    </div> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="buttonBlock text-center">
                        <Link to="/works" className="btn btn-primary mt-5">Load More</Link>
                    </div>
                </div>
            </section>

            <section className="icc_serviceCard--wrapper d-none">
                <div className="container position-relative">
                    <div className="icc_titleBlock">
                        <h2 className="icc_title">Portfolio</h2>
                    </div>

                    <div className="icc_serviceCardContent--block">
                        <ul>
                            {Works_Data.map((item, index) => (
                                <li className="icc_serviceCard" key={index}>
                                    <div className="icc_cardImage">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="icc_cardContent">
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Works;