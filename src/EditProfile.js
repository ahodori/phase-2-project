import React, { useState } from "react";

function EditProfile( { user, onUpdatedProfile } ) {
   
    const [userName, setName] = useState(user.username);
    const [image, setImage] = useState(user.image);
    const [bio, setBio] = useState(user.bio);
    const [favGenre, setFavGenre] = useState(user.favgenre);
    const [editProfileForm, setEditProfile] = useState({
        name: "",
        image: "",
        bio: "",
        favgenre: ""
    });

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleImage = (e) => {
        setImage(e.target.value)
    }
    const handleBio = (e) => {
        setBio(e.target.value)
    }
    const handleFavGenre = (e) => {
        setFavGenre(e.target.value)
    }

    const handleChange = (e) => {
        e.preventDefault()
       const updatedProfile = {
            username: userName,
            image: image,
            bio: bio,
            favgenre: favGenre
        }

        fetch('http://localhost:3000/user', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProfile),
        })
            .then(res => res.json())
            .then(updatedProfile => setEditProfile(updatedProfile))


        onUpdatedProfile(updatedProfile)
        
        setName("");
        setImage("");
        setBio("");
        setFavGenre("");
    }


    return (
        <div>
            <form onSubmit={handleChange} className="profileedit">
                <label>Name: </label><input type="text" name="name" onChange={handleName} value={userName}></input>
                <label>Image: </label><input type="text" name="image" onChange={handleImage} value={image}></input>
                <label>Bio: </label><input type="text" name="bio" onChange={handleBio} value={bio}></input>
                <label>Fav Genre: </label><input type="text" name="favgenre" onChange={handleFavGenre} value={favGenre}></input>
                <button className="profileeditbtn" type="completededit">Completed Edits</button>
            </form>
        </div>
    )
}

export default EditProfile;