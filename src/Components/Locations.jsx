// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

function Locations() {
    return(
        <div>
            <NavBar />
            <div style={{minHeight:"550px", width:"80%", marginLeft:"10%", display:"block"}}>
                <div style={{background:"lavender", alignItems:"center", borderRadius:"15px", padding:"10px", margin:"15px"}}>
                    <h1 style={{textAlign:"center"}}>Our Locations</h1>
                </div>
                <div style={{display:"flex"}}>
                    <div class="card mb-3" style={{width:"300px", margin:"15px"}}>
                        <div class="card-body">
                            <h4 class="card-title">Rideau</h4>
                            <br/>
                            <p style={{fontWeight: "bold"}}>Normal office hours: </p>
                            <p>Monday: 9:00AM - 5:00PM</p>
                            <p>Tuesday: 9:00AM - 5:00PM</p>
                            <p>Wednesday: 9:00AM - 5:00PM</p>
                            <p>Thursday: 9:00AM - 5:00PM</p>
                            <p>Friday: 9:00AM - 5:00PM</p>
                            <p>Saturday: 10:00AM - 4:00PM</p>
                            <p>Sunday: Closed</p>
                            <br />
                            <p>Address: 123 Rideau Street</p>
                        </div>
                    </div>

                    <div class="card mb-3" style={{width:"300px", margin:"15px"}}>
                        <div class="card-body">
                            <h4 class="card-title">Uplands</h4>
                            <br/>
                            <p style={{fontWeight: "bold"}}>Normal office hours: </p>
                            <p>Monday: 8:00AM - 5:00PM</p>
                            <p>Tuesday: 8:00AM - 5:00PM</p>
                            <p>Wednesday: 8:00AM - 5:00PM</p>
                            <p>Thursday: 8:00AM - 5:00PM</p>
                            <p>Friday: 8:00AM - 5:00PM</p>
                            <p>Saturday: 10:00AM - 4:00PM</p>
                            <p>Sunday: Closed</p>
                            <br />
                            <p>Address: 234 Prince of Wales Drive</p>
                        </div>
                    </div>

                    <div class="card mb-3" style={{width:"300px", margin:"15px"}}>
                        <div class="card-body">
                            <h4 class="card-title">Centrum</h4>
                            <br/>
                            <p style={{fontWeight: "bold"}}>Normal office hours: </p>
                            <p>Monday: 9:00AM - 6:00PM</p>
                            <p>Tuesday: 9:00AM - 6:00PM</p>
                            <p>Wednesday: 9:00AM - 6:00PM</p>
                            <p>Thursday: 9:00AM - 6:00PM</p>
                            <p>Friday: 9:00AM - 5:00PM</p>
                            <p>Saturday: 10:00AM - 4:00PM</p>
                            <p>Sunday: Closed</p>
                            <br />
                            <p>Address: 345 Centrum Blvd</p>
                        </div>
                    </div>

                    <div class="card mb-3" style={{width:"300px", margin:"15px"}}>
                        <div class="card-body">
                            <h4 class="card-title">Blair</h4>
                            <br/>
                            <p style={{fontWeight: "bold"}}>Normal office hours: </p>
                            <p>Monday: 9:00AM - 5:00PM</p>
                            <p>Tuesday: 9:00AM - 5:00PM</p>
                            <p>Wednesday: 9:00AM - 5:00PM</p>
                            <p>Thursday: 9:00AM - 5:00PM</p>
                            <p>Friday: 9:00AM - 5:00PM</p>
                            <p>Saturday: 10:00AM - 4:00PM</p>
                            <p>Sunday: 11:00AM - 3:00PM</p>
                            <br />
                            <p>Address: 456 Road</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Locations;