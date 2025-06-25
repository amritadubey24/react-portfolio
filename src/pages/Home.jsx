import React from 'react'
import Banner from '../components/Banner'
import AboutMe from '../components/AboutMe'
import Works from '../components/Works'
import ContactForm from '../components/ContactForm'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Process from '../components/Process'
import WhyHireMe from '../components/WhyHireMe'

const Home = () => {
    return (
        <>
            <Banner />
            <AboutMe />
            <Skills />
            <Services />
            <WhyHireMe />
            <Process />
            <Works />


            {/* <ContactForm /> */}
        </>
    )
}

export default Home 