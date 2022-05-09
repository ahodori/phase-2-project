import React from 'react'
import AlbumCard from './AlbumCard'
import Search from './Search'

function Feed({albumEntries = []}) {

    return (
        <div>
            <div>
                <h1>Your Music</h1>
                <Search />
            </div>
            <div>
                <ul className="albumfeedlist">
                    {albumEntries.map((albumEntry) => {
                        <AlbumCard key={albumEntry.id}
                                   title={albumEntry.title}
                                   artist={albumEntry.artist}
                                   dateAdded={albumEntry.dateAdded}
                                   image={albumEntry.image}
                                   rating={albumEntry.rating}
                                   comments={albumEntry.comments}
                                   />
                    })}
                </ul>
            </div>
        </div>

    )
}

export default Feed;