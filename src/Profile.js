import React, { useState } from 'react';
import MiniCalendar from './MiniCalendar';
import Calendar from './Calendar';
import EditProfile from './EditProfile';

function Profile ( { user, albumEntries}) {

    const [isProfileEditFormVisible, setProfileEditFormVisible] = useState(false)

    function handleEdit() {
        setProfileEditFormVisible(isProfileEditFormVisible => !isProfileEditFormVisible)
    }

    function displayTop5Albums(username) {
        let submittedAlbums = albumEntries.filter((albumEntry) => albumEntry.userAdded === username)
                                          .sort((a, b) => a.dateAdded < b.dateAdded ? 1 : -1);
        if (submittedAlbums.length > 5) {
            submittedAlbums = submittedAlbums.slice(-5);
        }

        return submittedAlbums.map((album) => {
            return <img src={album.image} style={{height:200}}></img>
        })
    }

    return (
        <div>
            <div className="profilecard">
                <h2>{user.username}</h2>
                <img alt="happy man" width="200" height="200" src={user.image}></img>
                <h4>Bio: </h4>
                <p>{user.bio}</p>
                <h4>Fav Genre: {user.favgenre}</h4>
                <button onClick={handleEdit}>{isProfileEditFormVisible ? "Nvm" : "Edit Profile"}</button>
                {isProfileEditFormVisible ? <EditProfile /> : <></>}
            </div>
            <div>
                <h2>Most Recent 5 Albums</h2>
                <div>
                    {displayTop5Albums(user.username)}
                </div>
                <div>
                    <Calendar albumEntries={albumEntries}/>
                </div>
            </div>
        </div>
    );
}



export default Profile