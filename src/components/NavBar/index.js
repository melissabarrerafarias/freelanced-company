import React from 'react';
import '../../navbar.css';

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light navbar-background">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Spacebarr</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-chevron-circle-down"></i>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <nav className="navbar navbar-expand-lg navbar-light navbar-background">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">Spacebarr</a>
        //     </div>
        //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>
        //     <div class="collapse navbar-collapse" id="navbarNav">
        //         <ul class="navbar-nav">
        //             <li class="nav-item">
        //                 <a class="nav-link" aria-current="page" href="/contact">Contact</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav >
    )
}

export default NavBar;