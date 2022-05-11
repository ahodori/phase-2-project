import React, { useState } from 'react';
import Comments from './Comments';
import { Card, ListGroup } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"


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
        <Card style={{width: '20rem' }}>
            <Card.Img src={image} alt="album list item" className="feedcardimg" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle>{artist}</Card.Subtitle>
                <Card.Text>Added {dateAdded}</Card.Text>
                <Card.Text>Rating: {rating}/10</Card.Text>
                <ListGroup>
                {comments?.map((comment) => {
                    return(<ListGroup.Item key={comment.comment}><span>{comment.username}: </span>{comment.comment}</ListGroup.Item>)
                })}
                </ListGroup>

                <button onClick={handleDelete} className="albumcarddelete">Delete Album</button>
                <button onClick={handleAddingComment} className="albumcarddelete" >{isAddingComment ? <></> : "Add Comment"}</button>
                {isAddingComment ? <Comments /> : <></>}
            </Card.Body>

        </Card>
    )
}

export default AlbumCard