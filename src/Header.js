import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
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
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#" >Music App</Navbar.Brand>
            <Nav  id="navbarmain" >

                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
                <Nav.Link><Link to="/entries">Feed</Link></Nav.Link>


            </Nav>
            </Container>
        </Navbar>
        {/* <h1>Music App Title</h1> */}
        {/* <img src="https://icon-library.com/images/small-music-note-icon/small-music-note-icon-14.jpg" className="logo" alt="logo"></img> */}
    </header>
    
)
}

export default Header;


