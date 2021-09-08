import React from 'react';

import '../contact.css';
import computerImg from '../assets/images/desk.jpg';
function Contact() {
    return (
        <main>
            <div className="contact-hero">
                <div class="contact-div-heading"><h1 className="contact-heading">Contact Us</h1></div>
                <img src={computerImg} className="contact-img"></img>
            </div>

            <div className="container"> {/* row must always be placed inside container (will cause white space if not) */}
                <div className="row">
                    <div id="businessHours" className="col-md-6 text-center d-flex justify-content-md-end d-flex justify-content-sm-center">
                        <div className="business-hours-div">
                            <h3 className="business-heading">Business Hours</h3>
                            <ul className="hours">
                                <li>Mondays 9:00am - 5:00pm</li>
                                <li>Tuesdays 9:00am - 5:00pm</li>
                                <li>Wednesdays 9:00am - 5:00pm</li>
                                <li>Thursdays 9:00am - 5:00pm</li>
                                <li>Fridays 9:00am - 5:00pm</li>
                            </ul>
                        </div>
                    </div>

                    <div id="contact-info" className="col-md-6 text-center">
                        <div className="contact-divs">
                            <i class="fas fa-phone-alt contact-logos"></i>Call Us
                            <a href="tel:408-642-8028"> at 408-642-8028</a>
                        </div>

                        <div className="contact-divs">
                            <i class="fas fa-envelope-square contact-logos"></i>Or Email Us at
                            <a href="mailto:spacebarr@gmail.com"> @spacebarr@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id = "contactFormDiv" className="container">
                <h1 className="text-center">Get In Touch With Us</h1>
                <h3 className="text-center">We'd love to work with you. Leave a message</h3>
                <div className="col-md-12">
                    <form className = "client-form">
                        <div class="input-group">
                            <input id="clientName" placeholder="name" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>

                        <div class="input-group">
                            <input id="clientEmail" placeholder="email" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>

                        <div class="input-group">
                            <textarea id="clientMessage" placeholder="message" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="d-flex justify-content-center">
                        <button className="submit-btn text-end">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contact;
