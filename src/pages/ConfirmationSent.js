import React from 'react';
import '../contact.css';
import call from '../assets/images/cell-phone-690192_1920.jpg'
function ConfirmationSent() {
    return (
        <main>
            <div className="contact-hero">
                <div class="contact-div-heading">
                    <h1 className="contact-heading">Thank you for reaching out</h1>
                    <h4 className="contact-heading">We will get back to you soon!</h4>
                    <a href = "/" className = "go-back">Return to homepage</a>
                </div>
                <img src={call} className="contact-img"></img>
            </div>
        </main>
    )
};

export default ConfirmationSent;