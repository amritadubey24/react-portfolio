import React from 'react'
import Banner from '../components/Banner'
import AboutMe from '../components/AboutMe'
import Works from '../components/Works'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Process from '../components/Process'
import WhyHireMe from '../components/WhyHireMe'
import ContactForm from '../components/ContactForm'
import { Hire_Data } from "../data/whyhireme";

const Home = () => {
    return (
        <>
            <Banner />
            <AboutMe />
            <Skills />
            <Services />
            <WhyHireMe title="Why Hire Me" data={Hire_Data} />
            <Process />
            <Works />
            <ContactForm />
        </>
    )
}

export default Home 