import React from 'react';
import AlbumCard from './AlbumCard';

function Feed() {








    return (
        <div>
            <div>
                <h1>Album List</h1>
                <button>Search Bar</button>
            </div>
            <div>
                <ul>
                <li><AlbumCard /></li>
                </ul>
            </div>
        </div>

    )
}

export default Feed;