import React from 'react'
import { Link } from 'react-router-dom';

function Header() {


return (
    <header className="header">
        <h1>Music App Title</h1>
        <img src="https://icon-library.com/images/small-music-note-icon/small-music-note-icon-14.jpg" className="logo" alt="logo"></img>
        <nav className="nav">
            <ul className="headerlinks">
                <li className="headerli"><Link to="/profile">Profile</Link></li>
                <li className="headerli"><Link to="/feed">Feed</Link></li>
                <li className="headerli"><Link to="/">Home</Link></li>
            </ul>
        </nav>
    </header>
)
}

export default Header;