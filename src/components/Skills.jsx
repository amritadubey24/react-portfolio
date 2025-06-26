import React from 'react'
import { Skill_Data } from '../data/skills'


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
                            {Skill_Data.map((service, index) => (
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