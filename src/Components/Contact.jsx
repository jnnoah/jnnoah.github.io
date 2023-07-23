// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import contact_image from "../Images/contact_image.jpg";
import React from 'react';

function Contact() {
    return(
        <div>
            <NavBar />
            <div style={{display:"flex", width:"70%", marginLeft:"15%", marginTop:"50px", minHeight:"500px"}}>
                <div style={{width:"50%"}}>
                    <div style={{width:"100%", background:"lavender", alignItems:"center", borderRadius:"15px", padding:"10px"}}>
                        <p style={{width:"100%", fontWeight:"bold", textAlign:"center", fontSize:"30px"}}>
                            Contact Us
                        </p>
                    </div>
                    
                    <p>
                        <br/>
                        Have questions or need more information? <br/>
                        Reach out to our team: <br/>
                        Phone Number: <a href="tel: +1 (123) 456-7890">(123) 456-7890</a> <br/>
                        Email: info@hopeshelter.com <br/>
                        Head Office Address: 123 Slater Stree, Ottawa, ON <br/>
                        <br/>
                        We would be delighted to assist you.
                    </p>
                </div>
                
                <img src={contact_image} style={{height:"20px", width:"50%"}} class="h-100" />
            </div>
            <Footer />
        </div>
    );
    
}

export default Contact;