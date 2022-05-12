import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {


return (
    <header className="header">
       
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#" > A U X </Navbar.Brand>
            <Nav  id="navbarmain" >

                <Nav.Link><Link to="/">HOME</Link></Nav.Link>
                <Nav.Link><Link to="/profile">PROFILE</Link></Nav.Link>
                <Nav.Link><Link to="/entries">FEED</Link></Nav.Link>


            </Nav>
            </Container>
        </Navbar>
        
    </header>
    
)
}

export default Header;


