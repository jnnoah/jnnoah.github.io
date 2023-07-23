// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return(
        <div>
            <div style={{height: '2px', width: '100%', background: 'purple'}}></div>
            <p style={{textAlign:"center", margin:"10px"}}>
                &copy; HopeShelter - 2023
            </p>
        </div>
    );
}

export default Footer;