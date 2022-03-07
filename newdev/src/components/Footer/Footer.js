import React from 'react';
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram }from 'react-icons/fa'

const Footer = () => {
    return(
        <div className="main-footer">
        <div className="logo">
            <img src="../../libslide.png" alt="logo" />
        </div><div className="container">
                <ul>
                    <li className="footer">Terms & Conditions</li>
                    <li className="footer">Privacy Policy</li>
                    <li className="social-list-li"><FaFacebook /></li>
                    <li className="social-list-li"><FaTwitter /></li>
                    <li className="social-list-li"><FaInstagram /></li>
                </ul>
            </div>
            </div>
    )
    
    
} 
    

export default Footer