// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Home from "./Home.jsx";
import Programs from "./Programs.jsx";
import Rebook from "./Rebook.jsx";
import Confirmation from "./Confirmation.jsx";
import Locations from "./Locations.jsx";
import Laundry from "./Laundry.jsx";
import Contact from './Contact.jsx';
import { Link } from "react-router-dom";

function NavBar() {

    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                <Link style={{textDecoration: 'none'}} to="/"><div class="d-flex flex-row mb-3">
                    <h1 style={{color: 'purple'}}>Hope</h1>
                    <h1 style={{color: 'orange'}}>Shelter</h1>
                </div></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/programs">Programs</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/rebook">Rebook</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/locations">Locations</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/laundry">Laundry</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link active" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <button style={{background: 'orange', color: 'white', border: 'none', borderRadius: '5px', padding:"5px"}}> Donate </button>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            <div style={{height: '2px', width: '100%', background: 'purple'}}></div>
        </div>
    );
}

export default NavBar;