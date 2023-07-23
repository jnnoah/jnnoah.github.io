// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";

function Laundry() {
    return(
        <div>
            <NavBar />
            <div style={{display:"block", width:"70%", marginLeft:"15%", marginTop:"10px", minHeight:"550px"}}>
                <div style={{background:"lavender", alignItems:"center", borderRadius:"15px", padding:"10px", margin:"15px"}}>
                    <h1 style={{textAlign:"center"}}>Laundry Schedule</h1>
                </div>
                <table style={{borderCollapse:"collapse", width:"100%"}}>
                    <th style={{border:"1px solid black", padding:"10px", background:"lightGray"}}>Day</th>
                    <th style={{border:"1px solid black", padding:"10px", background:"lightGray"}}>9:00AM</th>
                    <th style={{border:"1px solid black", padding:"10px", background:"lightGray"}}>11:00AM</th>
                    <th style={{border:"1px solid black", padding:"10px", background:"lightGray"}}>1:00PM</th>
                    <th style={{border:"1px solid black", padding:"10px", background:"lightGray"}}>3:00PM</th>

                    <tr>
                        <td style={{border:"1px solid black", padding:"10px"}}>Jun 19</td>
                        <td style={{border:"1px solid black", padding:"10px"}}>Booked</td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                    </tr>
                    <tr>
                        <td style={{border:"1px solid black", padding:"10px"}}>Jun 20</td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}>Booked</td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                    </tr>
                    <tr>
                        <td style={{border:"1px solid black", padding:"10px"}}>Jun 21</td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}>Booked</td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                    </tr>
                    <tr>
                        <td style={{border:"1px solid black", padding:"10px"}}>Jun 22</td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}>Booked</td>
                    </tr>
                    <tr>
                        <td style={{border:"1px solid black", padding:"10px"}}>Jun 23</td>
                        <td style={{border:"1px solid black", padding:"10px"}}>Booked</td>
                        <td style={{border:"1px solid black", padding:"10px"}}>Booked</td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                    </tr>
                    <tr>
                        <td style={{border:"1px solid black", padding:"10px"}}>Jun 24</td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                    </tr>
                    <tr>
                        <td style={{border:"1px solid black", padding:"10px"}}>Jun 25</td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}>Booked</td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                        <td style={{border:"1px solid black", padding:"10px"}}></td>
                    </tr>
                </table>
                <br />

                <p style={{textAlign:"center"}}>Call (123) 456-7890 to book a slot.</p>
                
            </div>
            <Footer />
        </div>
    );
    
}

export default Laundry;