import React from 'react';
import '../landing-page.css';

import placeholder1 from '../assets/images/laptop-2838921_1920.jpg';
import placeholder2 from '../assets/images/startup-594090_1920.jpg';
import placeholder3 from '../assets/images/job-5382501_1920.jpg';
import developers from '../assets/images/shelsy.jpg';
import chibi from '../assets/images/chibi2.png'

function LandingPage() {
    return (
        <main>
            {/* front page carousel */}
            {/* <div id="#mainCarousel">
                <div class="carousel-branding"><h1 className="brand-name"><span id = "brand-background">SPACE<span className = "barr">BARR</span></span></h1></div>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <img src={placeholder1} class="d-block w-100 c-images" alt="..."></img>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src={placeholder2} class="d-block w-100 c-images" alt="..."></img>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src={placeholder3} class="d-block w-100 c-images" alt="..."></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div> */}
            <div className="container-fluid" id="landing-page-top">
                <div className="row text-center">

                    <div className="col-md-6 landing-page-desc">
                        <h1 className="top-company-name">SPACEBARR</h1>
                        <h1 className="company-slogan">Web Design Made Easy</h1>
                    </div>

                    <div className="col-md-6 landing-page-logo"> 
                    <img src={chibi} className="chibi"/>
                    </div>
                </div>
            </div>

            {/* what we offer section */}
            <div className="container-fluid">
                <h1 className="landing-page-headings text-center">What We Offer</h1>

                <div className="row text-center mt-5">
                    <div className="col-md-6 col-sm-12">
                        <i class="fas fa-laptop offer-icons"></i>
                        <p className="offer-description">We recognize that having an online presence is essential for a businesses' growth. With so many options available
                            you may ask yourself, "Where do I get started?" and "How do I stand out?".  Spacebarr wants you to succeed. That's why we work with you to build a customized website that fits your
                            needs! One on one consultations and full transparency. Let us help you open new doors.</p> {/* take a load off?? */}
                    </div>

                    <div className="col-md-6 col-sm-12">
                        <i className="fas fa-tools offer-icons"></i>
                        <p className="offer-description">Every year, technologies change and improve. Having a clean and up-to-date site not only looks professional but is vital
                            in representing your business standards. So, have an older website that needs upgrading and a little... 'umph'? Thinking of adding new features? Aiming to rebrand?
                            Spacebarr can help guide you and make the process easier!</p>
                    </div>
                </div>
            </div>

            {/* our work section with carousel*/}
            <h1 className="landing-page-headings text-center">Our Work</h1>
            <div className="container-fluid d-flex justify-content-center">

                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={placeholder1} class="d-block w-100 example-images" alt="..."></img>
                            <div class="carousel-caption">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={placeholder2} class="d-block w-100 example-images" alt="..."></img>
                            <div class="carousel-caption">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={placeholder3} class="d-block w-100 example-images" alt="..."></img>
                            <div class="carousel-caption">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* about us section */}
            <div id="about" className="container">
                <h1 className="landing-page-headings text-center">About Us</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <p className="about-us-desc">We are first-generation immigrant sisters, (Melissa left, Shelsy right), who learned the importance of being industrious from a
                            young age. After earning our certification as full-stack web developers at UC Berkeley, we decided to use our knowledge and turn our passion for creativity into an
                            opportunity to help up-and-coming businesses reach their full potential. Our company takes pride in being trustworthy and honest. We look forward to working
                            with you!</p>
                    </div>
                    <div id="developersImages" className="col-md-6 col-sm-12 d-flex justify-content-lg-end">  {/* can change to 'text-center' */}
                        <img src={developers} className="devs-img"></img>
                    </div>
                </div>
            </div>

            {/* FAQ section */}
            <div id="FAQ" className="faq-section">
                <h1 className="landing-page-headings text-center">FAQ</h1>
                <div>
                    <button class="btn col-sm-12 col-md-12 faq-questions" data-bs-toggle="collapse" href="#FAQ1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        Are you limited to a certain area?</button>
                    <div class="text-center">
                        <div class="collapse multi-collapse" id="FAQ1">
                            <div class="card card-body">
                                No! Though we are located in Olympia, Washington we are open to work with people nationwide.
                            </div>
                        </div>
                    </div>

                    <button class="btn col-sm-12 col-md-12 faq-questions" type="button" data-bs-toggle="collapse" href="#FAQ2" aria-expanded="false" aria-controls="multiCollapseExample2">
                        What are your prices?</button>
                    <div class="text-center">
                        <div class="collapse multi-collapse" id="FAQ2">
                            <div class="card card-body">
                                It all depends on your website needs. If you'd like a rough estimate, feel free to contact us. We do free consultations.
                            </div>
                        </div>
                    </div>

                    <button class="btn col-sm-12 col-md-12 faq-questions" type="button" data-bs-toggle="collapse" href="#FAQ3" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">
                        What makes you different from other website building tools?</button>
                </div>
                <div class="text-center">
                    <div class="collapse multi-collapse" id="FAQ3">
                        <div class="card card-body">
                            Website building tools can sometimes be frustrating to use. We take the tedious task off your hands! In addition, we offer customizable
                            web-designs that can help you stand out.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LandingPage;