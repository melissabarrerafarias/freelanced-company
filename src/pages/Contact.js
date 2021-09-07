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

            <div className="row">

                <div className="col-md-6 text-center d-flex justify-content-md-end">
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

        </main>
    )
}

export default Contact;
