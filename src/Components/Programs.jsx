// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

function Programs() {
    return(
        <div>
            <NavBar />
            <div style={{minHeight:"550px", width:"80%", marginLeft:"10%", display:"block"}}>
                <div style={{background:"lavender", alignItems:"center", borderRadius:"15px", padding:"10px", margin:"15px"}}>
                    <h1 style={{textAlign:"center"}}>Our Programs</h1>
                </div>
                <div style={{display:"flex"}}>
                    <div class="card mb-3" style={{width:"300px", margin:"15px"}}>
                        <div class="card-body">
                            <h5 class="card-title">Men's Shelter</h5>
                            <br/>
                            <p>Open for rebooking at 3:00 PM. </p>
                            <p>Open for new bookings at 7:00 PM.</p>
                            <br />
                            <p>Note: If you have not rebooked by 7:00 PM, you could be at risk of losing your spot.</p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>

                    <div class="card mb-3" style={{width:"300px", margin:"15px"}}>
                        <div class="card-body">
                            <h5 class="card-title">Women's Shelter</h5>
                            <br/>
                            <p>Open for rebooking at 3:00 PM. </p>
                            <p>Open for new bookings at 7:00 PM.</p>
                            <br />
                            <p>Note: If you have not rebooked by 7:00 PM, you could be at risk of losing your spot.</p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>

                    <div class="card mb-3" style={{width:"300px", margin:"15px"}}>
                        <div class="card-body">
                            <h5 class="card-title">The Recovery Program</h5>
                            <br/>
                            <p>Open for rebooking at 3:00 PM. </p>
                            <p>Open for new bookings at 7:00 PM.</p>
                            <br />
                            <p>Note: If you have not rebooked by 7:00 PM, you could be at risk of losing your spot.</p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>

                    <div class="card mb-3" style={{width:"300px", margin:"15px"}}>
                        <div class="card-body">
                            <h5 class="card-title">The Kitchen</h5>
                            <br/>
                            <p>Open for rebooking at 3:00 PM. </p>
                            <p>Open for new bookings at 7:00 PM.</p>
                            <br />
                            <p>Note: If you have not rebooked by 7:00 PM, you could be at risk of losing your spot.</p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Programs;