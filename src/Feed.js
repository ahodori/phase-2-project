import React from 'react'
import AlbumCard from './AlbumCard'
import Search from './Search'

function Feed() {








    return (
        <div>
            <div>
                <h1>Your Music</h1>
                <Search />
            </div>
            <div>
                <ul className="albumfeedlist">
                <li><AlbumCard /></li>
                </ul>
            </div>
        </div>

    )
}

export default Feed;