import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {


return (
    <header className="header">
       
        {/* <Nav>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <Link to="/profile">Profile</Link>
                </li>
                <li class="nav-item">
                    <Link to="/entries">Feed</Link>
                </li>
                <li class="nav-item">
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </Nav> */}
        <Navbar>
            <nav class="navbar navbar-dark bg-dark" id="navbarmain" >
                <a class="navbar-brand" href="#">Music App</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/entries">Feed</Link>
                    </li>
                     <li class="nav-item">
                        <Link to="/">Home</Link>
                     </li>
                </ul>
            </div>
            </nav>
        </Navbar>
        {/* <h1>Music App Title</h1> */}
        {/* <img src="https://icon-library.com/images/small-music-note-icon/small-music-note-icon-14.jpg" className="logo" alt="logo"></img> */}
    </header>
    
)
}

export default Header;


