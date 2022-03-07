import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";





const Navbar = () => {
    return (
        <nav className="navbar">
            
            <div className="logo1">
            <div className="logo1">
            <img src="../../logo.png" alt="logo" />
    </div>
         
                </div>
            <ul className="nav-links">
                <Link to="/" className="Home">
                    
                    <li>Home</li>
                </Link>
                <Link to="/About" className="About">
                    <li>About</li>
                </Link>
                <Link to="/Features" className="Features">
                    <li>Features</li>
                </Link>
                <Link to="/Pricing" className="Pricing">
                    <li>Pricing</li>
                </Link>
                <Link to="/Gallery" className="Gallery">
                    <li>Gallery</li>
                </Link>
                <Link to="/Team" className="Team">
                    <li>Team</li>
                </Link>

               
               
               
                
            </ul>
         
        </nav>
    )
}

export default Navbar

