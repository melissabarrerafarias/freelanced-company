import React from 'react';

import '../contact.css';
import chibiContact from '../assets/images/company-icon.PNG'
function Contact() {
    return (
        <main>
            {/* <div className="contact-hero">
                <div class="contact-div-heading"><h1 className="contact-heading"><span id = "get-in-touch">Get In Touch With Us</span></h1></div>
                <img src={computerImg} className="contact-img"></img>
            </div> */}
            <div className="container-fluid" id="contact-page-top">
                <div className="row text-center">

                    <div className="col-md-6">
                        <h1 className="contact-heading">CONTACT US</h1>
                    </div>

                    <div className="col-md-6 contact-icon"> 
                    <img src={chibiContact} className="chibi"/>
                    </div>
                </div>
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
                            <a href="mailto:spacebarr@gmail.com"> @spacebarrofficial@gmail.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contactFormDiv" className="container">
                <h1 className="text-center">Contact Us</h1>
                <h3 className="text-center">We'd love to work with you</h3>
                <div className="col-md-12">

                    <form className="client-form" action="https://formsubmit.co/bf08c4938b1b5a7ebce82ff857e28784" method="POST">
                        <div class="input-group">
                            <input name="name" id="clientName" placeholder="name" type="text" class="form-control" aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" required />
                        </div>

                        <div class="input-group">
                            <input name="email" id="clientEmail" placeholder="email" type="email" class="form-control" aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default" required />
                        </div>

                        <input type='hidden' name="_next" value="http://localhost:3000/confirm" /> {/* needs to be changed to actual domain */}
                        <input type="hidden" name="_captcha" value="false" />

                        <div class ="input-group">
                        <textarea name="message" id="clientMessage" placeholder="message" type ="text" class ="form-control" aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default" required />
                        </div>
                        <div className="d-flex justify-content-center">
                        <button type ="submit" className="submit-btn text-end">Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </main>
    )
}

export default Contact;
