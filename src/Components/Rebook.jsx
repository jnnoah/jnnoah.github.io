// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Confirmation from "./Confirmation.jsx";
import image_2 from "../Images/image_2.png";
import { Link } from "react-router-dom";

function Rebook() {
    return(
        <div>
            <NavBar />
            <div style={{display:"block", width:"70%", marginLeft:"15%", marginTop:"10px"}}>
                <div style={{background:"lavender", alignItems:"center", borderRadius:"15px", padding:"10px"}}>
                    <p style={{fontWeight:"bold", textAlign:"center", fontSize:"20px"}}>
                    Rebook your dorm before 7:00 PM to keep your spot.
                    <br />
                    For new bookings, call (123) 456-7890 after 7:00 PM.
                    </p>
                </div>

                <div style={{margin:"20px"}}>
                    <div style={{width:"40%", display:"block" , marginLeft:"30%"}}>
                        <input type="text" placeholder="First Name" style={{width:"100%", margin:"10px", borderRadius:"10px", padding:"10px"}}></input>
                        <input type="text" placeholder="Last Name" style={{width:"100%", margin:"10px", borderRadius:"10px", padding:"10px"}}></input>
                        <input type="select" placeholder="Email" style={{width:"100%", margin:"10px", borderRadius:"10px", padding:"10px"}}></input>
                        <input type="text" placeholder="Dorm Number" style={{width:"100%", margin:"10px", borderRadius:"10px", padding:"10px"}}></input>
                        <select type="text" placeholder="Email" style={{width:"100%", margin:"10px", borderRadius:"10px", padding:"10px"}}>
                            <option>Select Location</option>
                            <option>Rideau</option>
                            <option>Uplands</option>
                            <option>Centrum</option>
                            <option>Blair</option>
                        </select>
                        
                        <Link to="/confirmation"><input type="submit" style={{width:"100%", background: 'orange', color: 'white', border:"none", margin:"10px", borderRadius:"10px", padding:"10px"}}></input></Link>
                        
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    );
    
}

export default Rebook;