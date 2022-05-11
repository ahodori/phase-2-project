import React, { useState } from 'react';
import Comments from './Comments';


function AlbumCard({title, artist, dateAdded, image, rating, comments, id, filteredDeletedAlbum, handleNewCommentInEntries}) {
    const [isAddingComment, setIsAddingComment] = useState(false)

    const handleDelete = () => {
        fetch(`http://localhost:3000/albumEntries/${id}`, {
            method:'DELETE',
        })
        filteredDeletedAlbum(id)
    }

    const handleAddingComment = () => {
        setIsAddingComment(isAddingComment => !isAddingComment)
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
            <button onClick={handleAddingComment} className="albumcarddelete" >{isAddingComment ? <></> : "Add Comment"}</button>
            {isAddingComment ? <Comments /> : <></>}
        </div>
    )
}

export default AlbumCard