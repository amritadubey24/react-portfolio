import React from 'react';
import mailIcon from '../assets/images/icons/mail.svg';
import phoneIcon from '../assets/images/icons/phone.svg';

const ContactForm = () => {
    return (
        <section className="icc_contactForm--wrapper">
            <div className="container">
                <div className="icc_titleBlock">
                    <h2 className="icc_title">Get in touch</h2>
                    <p className="icc_subTitle">Ready to collaborate or hire me? Let’s connect.</p>
                </div>

                <div className="icc_contactForm--inner">
                    <ul className="form_flex">
                        <li>
                            <div className="icc_cardService--block">
                                <div className="icc_card--icon">
                                    <img src={mailIcon} alt="Mail Icon" />
                                </div>
                                <div className="icc_card--content">
                                    <p>Mail Us</p>
                                    <a href="mailto:damrita290@gmail.com">damrita290@gmail.com</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="icc_cardService--block">
                                <div className="icc_card--icon">
                                    <img src={phoneIcon} alt="Phone Icon" />
                                </div>
                                <div className="icc_card--content">
                                    <p>Call Us</p>
                                    <a href="tel:+91 (888) 780-7255">+91 (888) 780-7255</a>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className="icc_contactForm--block d-none">
                        <form>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="icc_formBlock">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="icc_formBlock">
                                        <label>Last Name</label>
                                        <input type="text" className="form-control" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="icc_formBlock">
                                        <label>Email ID</label>
                                        <input type="email" className="form-control" placeholder="Email ID" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="icc_formBlock">
                                        <label>Phone Number</label>
                                        <input type="text" className="form-control" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="icc_formBlock">
                                        <label>Message</label>
                                        <textarea className="form-control" rows="5" placeholder="Start writing here..."></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="icc_formBlock mb-0 text-center">
                                        <button type="button" className="btn btn-primary">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
