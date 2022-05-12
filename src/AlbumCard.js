import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
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
        <Card style={{ width: '18rem' }}>

            <Card.Img src={image} alt="album list item" className="feedcardimg"/>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>{artist}</Card.Subtitle>
            
            <Card.Text>Rating: {rating}/10</Card.Text>
            {comments?.map((comment) => {
                return(<p key={comment.comment}><span>{comment.username}: </span>{comment.comment}</p>)
            })}
            <button onClick={handleDelete} className="albumcarddelete">Delete Album</button>
            <button onClick={handleAddingComment} className="albumcarddelete" >{isAddingComment ? "Cancel" : "Add Comment"}</button>
            {isAddingComment ? <Comments id={id} handleNewCommentInEntries={handleNewCommentInEntries}/> : <></>}
            <button onClick={handleEditingAlbum} className="albumcarddelete">{isEditingAlbum ? "Cancel" : "Edit Album"}</button>
            {isEditingAlbum ? <EditAlbum onUpdatedAlbum={onUpdatedAlbum} albumEntry={albumEntry} title={title} artist={artist} dateAdded={dateAdded} image={image} rating={rating} comments={comments}/> : <></>}
            <Card.Footer>Added {dateAdded}</Card.Footer>
        </Card>
    )
}

export default AlbumCard