import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";

function AddForm( { handleNewAlbum, user } ) {
    const [albumName, setAlbumName] = useState("");
    const [artistName, setArtistName] = useState("");
    const [rating, setRating] = useState("");
    const [date, setDate] = useState("");
    const [image, setImage] = useState("");
    const [comments, setComments] = useState("");

    const handleAlbum = (e) => {
        setAlbumName(e.target.value)
    }

    const handleArtist = (e) => {
        setArtistName(e.target.value)
    }

    const handleRating = (e) => {
        setRating(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.value)
    }

    const handleComments = (e) => {
        setComments(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const newAlbum = {
            title: albumName,
            artist: artistName,
            dateAdded: date,
            userAdded: user.username,
            image: image,
            rating: rating,
            comments: [{username: user.username, comment: comments}]
        }

        fetch("http://localhost:3000/albumEntries", {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newAlbum)
        })
            .then(res => res.json())
            .then(newAlbum => handleNewAlbum(newAlbum))

        handleNewAlbum(newAlbum)

        setAlbumName("");
        setArtistName("");
        setComments("");
        setDate("");
        setRating("");
        setImage("");
    }


    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Form onSubmit={handleSubmit} style={{width: "30rem"}}>
                <Form.Group>
                    <Form.Label>Album title:</Form.Label>
                    <Form.Control type="text" name="title" placeholder="" onChange={handleAlbum} value={albumName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Artist name:</Form.Label>
                    <Form.Control type="text" name="artist" placeholder="" onChange={handleArtist} value={artistName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Rating:</Form.Label>
                    <Form.Control type="text" name="rating" placeholder="" onChange={handleRating} value={rating}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date added:</Form.Label>
                    <Form.Control type="date" name="dateAdded" placeholder="" onChange={handleDate} value={date}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image URL:</Form.Label>
                    <Form.Control type="text" name="image" placeholder="" onChange={handleImage} value={image}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Comment:</Form.Label>
                    <Form.Control type="text" name="comments" placeholder="" onChange={handleComments} value={comments}/>                   
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default AddForm;