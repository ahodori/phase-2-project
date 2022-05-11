import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'
import AlbumCard from './AlbumCard'
import Search from './Search'
import "bootstrap/dist/css/bootstrap.min.css";

function Feed({ onUpdatedAlbum, handleSortByRating, albumEntries, filteredDeletedAlbum, handleSearch, handleSortAlphabeticalByArtist, search, handleNewCommentInEntries }) {
//state that says alphabathical, buttons to set to alphabetical
//one state that's the sort method
//useeffect might sort by a particular method when that is updated.





    const albums = albumEntries
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
                handleNewCommentInEntries={handleNewCommentInEntries}
                albumEntry={albumEntry}
                onUpdatedAlbum={onUpdatedAlbum}
                />
    ))

    return (
        <div>
            <div className="searchnsort">
                <h1>Your Music</h1>
                <Search handleSearch={handleSearch} search={search}/>
                <div className="sortbtns">
                    <button className="sort" onClick={handleSortAlphabeticalByArtist}>Sort A-Z by Artist</button>
                    <button className="sort" onClick={handleSortByRating}>Sort by Rating</button>
                </div>
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