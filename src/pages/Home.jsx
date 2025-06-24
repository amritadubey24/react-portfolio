import React from 'react'
import Banner from '../components/Banner'
import AboutMe from '../components/AboutMe'
import Cards from '../components/Cards'
import Works from './Works'
import ContactForm from '../components/ContactForm'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Process from '../components/Process'

const Home = () => {
    return (
        <>
            <Banner />
            <AboutMe />
            <Skills />
            <Services />
            <Process />
            <Works />
            <ContactForm />
        </>
    )
}

export default Home 