import React from 'react';


function AlbumCard({title, artist, dateAdded, image, rating, comments}) {




    return (
        <div>
            <h1>{title}</h1>
            <h2>{artist}</h2>
            <img src={image} alt="album list item"></img>
            <p>Added {dateAdded}</p>
            <p>Rating: {rating}/10</p>
            {comments.map((comment) => {
                <p><span>{comment.username}: </span>{comment.comment}</p>
            })}
        </div>
    )
}

export default AlbumCard