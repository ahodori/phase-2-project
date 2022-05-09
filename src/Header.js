import React from 'react'

function Header() {









return (
    <header className="header">
        <img src="https://icon-library.com/images/small-music-note-icon/small-music-note-icon-14.jpg" className="logo" alt="logo"></img>
        <nav className="nav">
            <a href="/profile">Profile</a>
            <a href="/feed">Feed</a>
            <a href="/">Home</a>
        </nav>
    </header>
)
}

export default Header;