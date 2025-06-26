import React from 'react'
import { work_process } from '../data/process'

const Process = () => {
    return (
        <>
            <section className="timeline--wrapper">
                <div className="container">
                    <div className="timeline--inner">
                        <div className="icc_titleBlock">
                            <h2 className="icc_title">Work Process</h2>
                            {/* <p className="icc_subTitle">Services that we offer   </p> */}
                        </div>

                        {work_process.map((step, index) => (
                            <div className="card-wrapper" key={index}>
                                <div className="card-content">
                                    <h4>{step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}

export default Process