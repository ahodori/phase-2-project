import React, { useState } from "react";

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>Album title:</label><input type="text" name="title" onChange={handleAlbum} value={albumName}></input>
                <label>Artist name:</label><input type="text" name="artist" onChange={handleArtist} value={artistName}></input>
                <label>Rating:</label><input type="number" name="rating" onChange={handleRating} value={rating}></input>
                <label>Date added:</label><input type="date" name="dateAdded" onChange={handleDate} value={date}></input>
                <label>Image: </label><input type="text" name="image" onChange={handleImage} value={image}></input>
                <label>Comments:</label><input type="text" name="comments" onChange={handleComments} value={comments}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddForm;