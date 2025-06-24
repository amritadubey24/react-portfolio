import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card1 from "../assets/images/card-1.svg";
import Card2 from "../assets/images/card-2.svg";
import Card3 from "../assets/images/card-3.svg";
import Card4 from "../assets/images/card-4.svg";

const programData = [
    {
        title: "Summer Camp",
        subtitle: "Fun learning adventures!",
        date: "June 12, 2024",
        time: "12:00 PM",
        image: Card1,
    },
    {
        title: "Workshops",
        subtitle: "Connect students!",
        date: "June 12, 2024",
        time: "12:00 PM",
        image: Card2,
    },
    {
        title: "Social Event",
        subtitle: "Strengthen our community.",
        date: "June 12, 2024",
        time: "12:00 PM",
        image: Card3,
    },
    {
        title: "Health & Wellness Fair",
        subtitle: "Promote healthy living.",
        date: "June 12, 2024",
        time: "12:00 PM",
        image: Card4,
    },
    // Repeat for demo
    {
        title: "Summer Camp",
        subtitle: "Fun learning adventures!",
        date: "June 12, 2024",
        time: "12:00 PM",
        image: Card1,
    },
    {
        title: "Workshops",
        subtitle: "Connect students!",
        date: "June 12, 2024",
        time: "12:00 PM",
        image: Card2,
    },
    {
        title: "Social Event",
        subtitle: "Strengthen our community.",
        date: "June 12, 2024",
        time: "12:00 PM",
        image: Card3,
    },
    {
        title: "Health & Wellness Fair",
        subtitle: "Promote healthy living.",
        date: "June 12, 2024",
        time: "12:00 PM",
        image: Card4,
    },
];

const Cards = () => {
    return (
        <>
            <section className="icc_cardSlider--wrapper">
                <div className="container">
                    <div className="icc_titleBlock">
                        <h2 className="icc_title">Upcoming programs</h2>
                        <p className="icc_subTitle">What’s Next at ICCOC</p>
                    </div>

                    <div className="icc_card--slider">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={30}
                            slidesPerView={3}
                            navigation={{
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            }}
                            pagination={{ el: ".swiper-pagination", clickable: true }}
                            loop={true}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                            }}
                        >
                            {programData.map((program, index) => (
                                <SwiperSlide key={index}>
                                    <div className="icc_cardBlock">
                                        <div className="icc_cardImage">
                                            <img src={program.image} alt={program.title} />
                                            <span className="redirect_icon"></span>
                                        </div>
                                        <div className="icc_cardContent">
                                            <h3 className="icc_cardTitle">{program.title}</h3>
                                            <p className="icc_cardsubTitle">{program.subtitle}</p>
                                            <ul>
                                                <li>{program.date}</li>
                                                <li>{program.time}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Swiper navigation & pagination */}
                        <div className="icc_navIcons">
                            <div className="swiper-button swiper-button-prev"></div>
                            <div className="swiper-pagination"></div>
                            <div className="swiper-button swiper-button-next"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards