import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {

    return (
        <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light shadow_nav">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 mul">
        <li className="nav-item">
        <Link className='nav-link active ' to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link active' to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link active' to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link active' to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
</div>
     
    </div>
  </div>
</nav>

         </>     
  
    )
}

export default Navbar




















// import React, { useState } from 'react';
// import "./navbar.css";
// import { Link } from 'react-router-dom';
// import { FaBars } from "react-icons/fa";
// import './images/navbar.png';


// function Navbar() {
//     const [ShowMediaIcons, setShowMediaIcons] = useState(false);

//     return (
//         <div>
//             <nav classNameName="main-nav">

//                 <div classNameName="logo">
//                     <h2>Logo</h2>
//                 </div>

//                 <div classNameName={ShowMediaIcons ? "menu-link mobile-menu-link" : "menu-links"}>
//                     <ul>

//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>

//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>

//                         <li>
//                             <Link to="/service">Service</Link>
//                         </li>

//                         <li>
//                             <Link to="/projects">Projects</Link>
//                         </li>

//                         <li>
//                             <Link to="/Contact">Contact</Link>
//                         </li>

//                     </ul>
//                 </div>

//                 <div classNameName="color-mode">
//                     <ul classNameName="color-mode-desktop">
//                         <label htmlFor="/">Dark Mode</label>
//                     </ul>
//                 </div>

//                 <div classNameName="hamburger-menu">
//                     <Link to="#" onClick={() => setShowMediaIcons(!ShowMediaIcons)}> <FaBars /> </Link>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default Navbar
