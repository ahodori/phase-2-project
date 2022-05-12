import React, { useState } from 'react';


function EditAlbum ( { albumEntry, onUpdatedAlbum }) {
    const [title, setTitle] = useState(albumEntry.title);
    const [artist, setArtist] = useState(albumEntry.artist);
    const [date, setDate] = useState(albumEntry.dateAdded);
    const [rating, setRating] = useState(albumEntry.rating);
    const [image, setImage] = useState(albumEntry.image);
    const [comments, setComments] = useState(albumEntry.comments.comment);
    const [editAlbum, setEditAlbum] = useState("");

    const id = albumEntry.id;

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleArtist = (e) => {
        setArtist(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.value)
    }

    const handleRating = (e) => {
        setRating(e.target.value)
    }

    const handleComments = (e) => {
        setComments(e.target.value)
    }

    const handleAlbumEdit = (e) => {
        e.preventDefault()
       const updatedAlbum = {
            title: title,
            artist: artist,
            dateAdded: date,
            image: image,
            rating: rating,
            comments: comments
        }

        fetch(`http://localhost:3000/albumEntries/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedAlbum),
        })
            .then(res => res.json())
            .then(updatedAlbum => {
                setEditAlbum(updatedAlbum);
                onUpdatedAlbum(updatedAlbum);})


        
        
        setArtist("");
        setTitle("");
        setDate("");
        setImage("");
        setRating("");
        setComments("");
    }

    return (
        <div>
            <form onSubmit={handleAlbumEdit}>
                <label>Album Title: </label><input type="text" name="albumtitle" onChange={handleTitle} value={title}></input>
                <label>Artist: </label><input type="text" name="artist" onChange={handleArtist} value={artist}></input>
                <label>Date Added: </label><input type="date" name="date" onChange={handleDate} value={date}></input>
                <label>Image: </label><input type="text" name="image" onChange={handleImage} value={image}></input>
                <label>Rating: </label><input type="text" name="rating" onChange={handleRating} value={rating}></input>
                <label>Comments: </label><input type="text" name="comments" onChange={handleComments} value={comments}></input>
                <button type="completededit">Completed Edits</button>
            </form>
        </div>
    )
}


export default EditAlbum;