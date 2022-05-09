import React from "react";

function AddForm() {
    return (
        <div>
            <form>
                <label>Album title:</label>   <input type="text" name="title"></input>
                <label>Artist name:</label>  <input type="text" name="artist"></input>
                <label>Rating:</label>       <input type="number" name="rating"></input>
                <label>Date added:</label>      <input type="date" name="dateAdded"></input>
                <button type="submit" onClick={(e) => e.preventDefault()}>Submit</button>
            </form>
        </div>
    )
}

export default AddForm;