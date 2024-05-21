import React from 'react';

const Footer = () => {
    return (
        <footer className="main-footer bg-dark text-white py-4 mt-3 mb-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li>+91 8291343998 / +91 9594514427</li>
                            <li>abc123@gmail.com</li>
                            <li>CDAC Mumbai, Kharghar 400614</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>Our Commitments</h5>
                        <p>We are dedicated to fostering a strong gaming community and providing the best eSports experience for our users.</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>Careers</h5>
                        <p>Join our team and be a part of shaping the future of eSports and community gaming.</p>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h5>Help</h5>
                        <p>If you have any questions or need assistance, feel free to reach out to our support team.</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="text-center">
                        &copy;{new Date().getFullYear()} Esports App - All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
