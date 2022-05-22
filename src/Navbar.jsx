import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <div  className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">

            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <Link className="nav-link" to="/project1" >
                <i className="fas fa-tachometer-alt">
                </i>Project 1
              </Link>
            </li>

            <li className="nav-item" >
              <Link className="nav-link" to="/project2" >
                <i className="far fa-address-book">
                </i> Project 2
              </Link> 
            </li>

            <li className="nav-item" >
              <Link className="nav-link" to="/project3" >
                <i className="far fa-copy">
                </i>Project 3
              </Link>
            </li>
        </ul>
      </div>
    </nav>
  
</>
  )
}

export default Navbar