import React from 'react'
import icon1 from '../assets/images/icons/card-icon-1.svg';
import icon2 from '../assets/images/icons/card-icon-2.svg';
import icon3 from '../assets/images/icons/card-icon-3.svg';
import icon4 from '../assets/images/icons/card-icon-4.svg';
import icon5 from '../assets/images/icons/card-icon-5.svg';
import icon6 from '../assets/images/icons/card-icon-6.svg';

const services_list = [
    { icon: icon1, alt: 'HTML & CSS Responsive Web Design', label: 'HTML & CSS Responsive Web Design' },
    { icon: icon2, alt: 'React JS Development', label: 'React JS Development' },
    { icon: icon3, alt: 'SEO', label: 'SEO' },
    { icon: icon4, alt: 'Fixing bugs and testing for usability', label: 'Fixing bugs and testing for usability' },
    { icon: icon5, alt: 'PSD to Bootstrap Services', label: 'PSD to Bootstrap Services' },
    { icon: icon6, alt: 'Implementing design on mobile website', label: 'Implementing design on mobile website' },
];


const Skills = () => {
    return (
        <>

            <section className="icc_serviceCardIcon--wrapper pb-0">
                <div className="container">
                    <div className="icc_titleBlock">
                        <h2 className="icc_title">Skills</h2>
                    </div>
                    <div className="icc_service_cardBlock">
                        <ul>
                            {services_list.map((service, index) => (
                                <li key={index}>
                                    <div className="icc_cardService--block">
                                        <div className="icc_card--icon">
                                            <img src={service.icon} alt={service.alt} />
                                        </div>
                                        <div className="icc_card--content">
                                            <p>{service.label}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills