import React from "react";
import { Awards_Data } from "../data/awardsdata";
import WhyHireMe from "../components/WhyHireMe";
import AboutMe from "../components/AboutMe";
import ContactForm from "../components/ContactForm";

const About = () => {
    return (
        <>
            <AboutMe />
            <WhyHireMe title="Awards / Recognition" data={Awards_Data} />
            <ContactForm />
        </>
    );
};

export default About;
