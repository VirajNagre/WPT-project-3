import React from "react";
export const Footer=()=>{
    return(
        <div className="main-footer bg-dark text-white py-4 mt-3 mb-0" >
             <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h5>ContactUs</h5>
                        <ul className="list-unstyled">
                            <li>+91 8291343998/+91 9594514427</li>
                            <li>abc123@gmail.com</li>
                            <li>CDAC Mumbai Kharghar 400614</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>Our Commitments</h5>
                        
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>Careers</h5>
                       
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>Help</h5>
                       
                    </div>
                    
                </div>
                
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Esports App -All Rights Reserved
                    </p>
                </div>
             </div>
        </div>
    );
}