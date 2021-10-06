import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to='/about'>About</Link>
            <Link to="/portfolio">Portfolio</Link>
        </div>
    )
}

export default Navbar
