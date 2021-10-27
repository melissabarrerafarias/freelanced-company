import React from 'react';
import '../../navbar.css';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light navbar-background">
            <div id="navBarElements" class="container-fluid">
                <div id="navTitle">
                    <a class="navbar-brand" href="/">SPACE<span className="barr">BARR</span></a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-chevron-circle-down"></i>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a id="navFAQ" class="nav-link" aria-current="page" href="/#FAQ">FAQ</a>
                        </li>
                        <li class="nav-item">
                            <a id="navAbout" class="nav-link" aria-current="page" href="/#about">ABOUT US</a>
                        </li>
                        <li class="nav-item">
                            <a id="navContact" class="nav-link" aria-current="page" href="/contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;