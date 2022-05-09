import React from "react";

function EditProfile() {
    return (
        <div>
            <form>
                <label>Name: </label><input type="text" name="name"></input>
                <label>Image: </label><input type="text" name="image"></input>
                <label>Bio: </label><input type="text" name="bio"></input>
                <label>Fav Genre: </label> <input type="text" name="favgenre"></input>
                <button type="completededit" onClick={(e) => e.preventDefault()}>Completed Edits</button>
            </form>
        </div>
    )
}

export default EditProfile;