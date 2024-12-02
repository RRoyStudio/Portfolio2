import React from 'react';
import './Navbar.css';
import RRicon from './assets/RR-icon.png';

function Navbar() {
    return (
        <div className="nav">
            <div className="container">
                <div className= 'colmn1'>
                    <img src={RRicon} alt="RR" />
                </div>
                <div className= 'colmn2'>
                    <ul>    
                        <li>Home</li>    
                        <li>About</li>    
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div> 
            </div>
        </div>
    );
}

export default Navbar;