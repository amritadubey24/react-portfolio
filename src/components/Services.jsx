import React from 'react';
const service_list = [

    {
        title: "HTML & CSS Responsive Web Design",
        description: "Design and build fully responsive, cross-browser compatible websites using clean HTML and CSS."
    },
    {
        title: "React JS Development",
        description: "Develop interactive user interfaces and single-page applications using React JS and modern state management tools."
    },
    {
        title: "SEO",
        description: "Optimize websites for search engines to improve visibility, increase traffic, and enhance search rankings."
    },
    {
        title: "Fixing bugs and testing for usability",
        description: "Identify and resolve frontend bugs, and conduct thorough testing to ensure smooth and user-friendly experiences."
    },
    {
        title: "PSD to Bootstrap Services",
        description: "Convert PSD designs into responsive, pixel-perfect web pages using the Bootstrap framework."
    },
    {
        title: "Implementing design on mobile website",
        description: "Adapt desktop designs to mobile formats with fluid layouts, ensuring usability on all devices."
    }


];

const Services = () => {
    return (
        <section className="card_with_content--wrapper">
            <div className="container">
                <div className="card_with_content--inner">
                    <div className="icc_titleBlock">
                        <h2 className="icc_title">Services</h2>
                    </div>
                    <div className="row">

                        {/* Tuition & Fees */}
                        <div className="col-md-12">
                            <div className="card-wrapper">
                                <div className="card-content">
                                    {/* <h4>Tuition & Additional Fees</h4> */}
                                    <ul className="full-card-wrapper">
                                        {service_list.map((step, index) => (
                                            <li><span>{step.title}:</span> <br /> {step.description}</li>
                                        ))}

                                        {/* <li><span>Early Childhood:</span> $X,XXX per year</li>
                                        <li><span>Primary School:</span> $X,XXX per year</li>
                                        <li><span>Middle School:</span> $X,XXX per year</li>
                                        <li><span>High School:</span> $X,XXX per year</li>
                                        <li><span>Registration Fee:</span> $XXX</li>
                                        <li><span>Uniforms:</span> $XXX</li>
                                        <li><span>Extracurricular Activities:</span> $XXX</li>
                                        <li><span>Payment Plans:</span> Flexible plans available. Contact Us for details.</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
