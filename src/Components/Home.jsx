// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import image_2 from "../Images/image_2.png";

function Home() {
    return(
        <div>
            <NavBar />
            <div style={{display:"block", width:"70%", marginLeft:"15%", marginTop:"10px"}}>
                <div style={{background:"lavender", alignItems:"center", borderRadius:"15px", padding:"10px"}}>
                    <p style={{fontWeight:"bold", textAlign:"center", fontSize:"50px"}}>
                        Hope Living and Community Service!
                    </p>
                </div>
                <img src={image_2} style={{height:"20px", width:"70%", marginLeft:"15%"}} class="h-100" />
            </div>
            <Footer />
        </div>
    );
    
}

export default Home;