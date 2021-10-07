import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './navbar.css'
// Icon Link
import { FaBars } from "react-icons/fa";

function Navbar() {

    const [ShowMediaIcons,setShowMediaIcons] = useState(false);

    return (
        <div>
            <nav className="main-nav">

                <div className="logo">
                    <h2>Logo</h2>
                </div>

                <div className= {ShowMediaIcons ? "menu-link mobile-menu-link" : "menu-links"}>
                    <ul>

                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/about">About</Link>
                        </li>

                        <li>
                            <Link to="/service">Service</Link>
                        </li>

                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>

                    </ul>
                </div>

                <div className="color-mode">
                    <ul className="color-mode-desktop">
                        <label htmlFor="/">Dark Mode</label>
                    </ul>
                </div>

                <div className="hamburger-menu">
                    <Link to="#" onClick={()=> setShowMediaIcons(!ShowMediaIcons)}> <FaBars /> </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
