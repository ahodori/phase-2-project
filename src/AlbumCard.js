import React, { useState } from 'react';
import Comments from './Comments';
import EditAlbum from './EditAlbum';


function AlbumCard({ onUpdatedAlbum, albumEntry, title, artist, dateAdded, image, rating, comments, id, filteredDeletedAlbum, handleNewCommentInEntries}) {
    const [isAddingComment, setIsAddingComment] = useState(false);
    const [isEditingAlbum, setEditAlbum] = useState(false);

    const handleDelete = () => {
        fetch(`http://localhost:3000/albumEntries/${id}`, {
            method:'DELETE',
        }).then(res=>res.json())
        .then(json=>console.log(json));
        filteredDeletedAlbum(id)
    }

    const handleAddingComment = () => {
        setIsAddingComment(isAddingComment => !isAddingComment)
    }

    const handleEditingAlbum = () => {
        setEditAlbum(isEditingAlbum => !isEditingAlbum)
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
            <button onClick={handleEditingAlbum} className="albumcarddelete">{isEditingAlbum ? <></> : "Edit Album"}</button>
            {isEditingAlbum ? <EditAlbum onUpdatedAlbum={onUpdatedAlbum} albumEntry={albumEntry} title={title} artist={artist} dateAdded={dateAdded} image={image} rating={rating} comments={comments}/> : <></>}
        </div>
    )
}

export default AlbumCard