import React from 'react'
const work_process = [

    {
        title: "Research",
        description: "Understand the client's requirements, target audience, and goals through meetings, research, and competitor analysis."
    },
    {
        title: "Planning & Concept",
        description: "Prepare wireframes and UI/UX concepts, outlining the site structure, layout, and user flow for optimal engagement."
    },
    {
        title: "Design Conversion (PSD to Code)",
        description: "Convert static design files (PSD/Figma) into pixel-perfect, responsive front-end code using HTML, CSS, and Bootstrap."
    },
    {
        title: "Development",
        description: "Build interactive components using React.js, manage state, and integrate APIs for dynamic functionality."
    },
    {
        title: "Testing & QA",
        description: "Fix bugs, validate responsive behavior, and ensure cross-browser compatibility with thorough frontend testing."
    },
    {
        title: "Deployment & Maintenance",
        description: "Launch the project live on the server or hosting platform and provide post-deployment support or updates as needed."
    }


];

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