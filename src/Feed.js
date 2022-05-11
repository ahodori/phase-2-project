import React from 'react'
import AlbumCard from './AlbumCard'
import Search from './Search'

function Feed({ albumEntries, filteredDeletedAlbum, handleSearch, search }) {

    const albums = albumEntries.sort((a,b) => a.dateAdded > b.dateAdded ? 1 : -1)
                               .map((albumEntry) => (
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
                <Search handleSearch={handleSearch} search={search} />
            </div>
            <div>
                <ul className="albumfeedlist">
                    {albums}
                </ul>
            </div>
        </div>

    )
}

export default Feed;