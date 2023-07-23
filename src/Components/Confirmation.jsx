// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import image_2 from "../Images/image_2.png";
import { Link } from "react-router-dom";

function Confirmation() {
    return(
        <div>
            <NavBar />
            <div style={{display:"block", width:"70%", marginLeft:"15%", marginTop:"10px", minHeight:"550px"}}>
                <div style={{background:"lavender", alignItems:"center", borderRadius:"15px", padding:"10px"}}>
                    <p style={{fontWeight:"bold", textAlign:"center", fontSize:"40px"}}>
                        Rebook request sent!
                    </p>
                </div>

                <div style={{margin:"20px"}}>
                    <div style={{width:"40%", display:"block" , marginLeft:"30%"}}>
                        <p style={{textAlign:"center"}}>
                            Rebooking comfirmation will be sent to your email after verification!
                        </p>
                        
                        <Link to="/rebook"><button type="submit" style={{width:"98%", background: 'orange', color: 'white', border:"none", margin:"10px", borderRadius:"10px", padding:"10px"}}>OK</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
    
}

export default Confirmation;