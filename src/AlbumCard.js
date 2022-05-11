import React, {useEffect, useState} from 'react';



function AlbumCard({title, artist, dateAdded, image, rating, comments, id, filteredDeletedAlbum, albumEntries}) {

    const handleDelete = () => {
        fetch(`http://localhost:3000/albumEntries/${id}`, {
            method:'DELETE',
        })
        filteredDeletedAlbum(id)
    }
    
    return (
        <div>
            <h1>{title}</h1>
            <h2>{artist}</h2>
            <img src={image} alt="album list item" className="feedcardimg"></img>
            <p>Added {dateAdded}</p>
            <p>Rating: {rating}/10</p>
            {comments?.map((comment) => {
                return(<p key={comment.comment}><span>{comment.username}: </span>{comment.comment}</p>)
            })}
            <button onClick={handleDelete} className="albumcarddelete">Delete Album</button>

        </div>
    )
}

export default AlbumCard