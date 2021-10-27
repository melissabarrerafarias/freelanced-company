import React from 'react';
import '../contact.css';
// import call from '../assets/images/company-icon-floating.png'
function ConfirmationSent() {
    return (
        <main id="confirm-sent">
            <div className="container">
                <div className="row">
                    <div class="contact-div-heading col-md-6">
                        <h1 className="contact-heading-confirm">Thank you for reaching out</h1>
                        <h4 className="contact-heading-confirm">We will get back to you soon!</h4>
                        <a href="/" className="go-back">Return to homepage</a>
                    </div>

                </div>
            </div>
        </main>
    )
};

export default ConfirmationSent;