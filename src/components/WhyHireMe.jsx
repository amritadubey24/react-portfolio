import React from "react";

const WhyHireMe = () => {
    return (
        <section className="card_with_bg_img--wrapper card_with_bgsecond--wrapper">
            <div className="container">
                <div className="card_with_bg_img--inner">
                    <div className="icc_titleBlock text-center">
                        <h2 className="icc_title text-white">Why Hire Me</h2>
                    </div>
                    <div className="row">
                        {/* Card 1 */}
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card-wrapper bg-white text-dark p-3 rounded shadow h-100">
                                <div className="card-content text-center">
                                    <h4>🚀 Fast Delivery</h4>
                                    <p>Quick turnaround with high-quality, maintainable code.</p>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card-wrapper bg-white text-dark p-3 rounded shadow h-100">
                                <div className="card-content text-center">
                                    <h4>🎨 UX-Focused</h4>
                                    <p>I design responsive, user-friendly experiences with attention to detail.</p>
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card-wrapper bg-white text-dark p-3 rounded shadow h-100">
                                <div className="card-content text-center">
                                    <h4>🤝 Team Player</h4>
                                    <p>Strong collaboration skills with developers, designers, and clients.</p>
                                </div>
                            </div>
                        </div>
                        {/* Card 4 */}
                        <div className="col-md-3 col-sm-6 mb-4">
                            <div className="card-wrapper bg-white text-dark p-3 rounded shadow h-100">
                                <div className="card-content text-center">
                                    <h4>📚 Constant Learner</h4>
                                    <p>Passionate about learning new tech and staying current with trends.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyHireMe;
