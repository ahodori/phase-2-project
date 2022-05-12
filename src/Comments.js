import React, { useState } from 'react'

function Comments( {handleNewCommentInEntries, id}) {
    const [newComment, setNewComment] = useState('');
    const [newUsername, setNewUsername] = useState('');

    const handleUsername = (e) => {
        setNewUsername(e.target.value)
    }
    const handleComment = (e) => {
        setNewComment(e.target.value)
    }


    //submit function for adding a new comment
    const handleNewComment = (e) => {
        e.preventDefault();

        const newlyAddedComment = {
            username: newUsername,
            comment: newComment
        }

        handleNewCommentInEntries(id, newlyAddedComment)
    }


    return(
        <div>
            <form onSubmit={handleNewComment}>
                <label>Username: </label><input type="text" name="username" onChange={handleUsername} value={newUsername}></input>
                <label>Comment:</label><input type="text" name="comment" onChange={handleComment} value={newComment}></input>
               
               
                <button type="completededit">Completed Edits</button>
            </form>
        </div>
    )
}

export default Comments;