import React from 'react';
import '../landing-page.css';

import placeholder1 from '../assets/images/placeholder-1.jpg';
import placeholder2 from '../assets/images/placeholder-2.jpg';
import placeholder3 from '../assets/images/placeholder-3.jpg';

function LandingPage() {
    return (
        <main id="#mainCarousel">
            <div class="carousel-branding"><h1 className = "brand-name">Spacebarr</h1></div>
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
        </main>
    )
}

export default LandingPage;