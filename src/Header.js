import React from 'react'
import { Link } from 'react-router-dom';

function Header() {









return (
    <header className="header">
        <nav className="nav">
        <img src="https://icon-library.com/images/small-music-note-icon/small-music-note-icon-14.jpg" className="logo" alt="logo"></img>
            <Link to="/profile">Profile</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/">Home</Link>
        </nav>
    </header>
)
}

export default Header;