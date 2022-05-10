import React from 'react'
import AlbumCard from './AlbumCard'
import Search from './Search'

function Feed({albumEntries, filteredDeletedAlbum}) {

    const singleAlbum = albumEntries.map((albumEntry) => (
        <AlbumCard 
            key={albumEntry.id}
            id={albumEntry.id}
            title={albumEntry.title}
            artist={albumEntry.artist}
            dateAdded={albumEntry.dateAdded}
            image={albumEntry.image}
            rating={albumEntry.rating}
            comments={albumEntry.comments}
            filteredDeletedAlbum={filteredDeletedAlbum}
            />
    ))

    return (
        <div>
            <div>
                <h1>Your Music</h1>
                <Search />
            </div>
            <div>
                <ul className="albumfeedlist">
                    {singleAlbum}
                </ul>
            </div>
        </div>

    )
}

export default Feed;