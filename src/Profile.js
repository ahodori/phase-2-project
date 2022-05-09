import React, { useState } from 'react';
import MiniCalendar from './MiniCalendar';
import EditProfile from './EditProfile';

function Profile ( { user }) {

const [isProfileEditFormVisible, setProfileEditFormVisible] = useState(false)

function handleEdit() {
    setProfileEditFormVisible(isProfileEditFormVisible => !isProfileEditFormVisible)
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
            <h2>Top 5 Albums</h2>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png"></img>
            </div>
            <div>
                <p><MiniCalendar /></p>
            </div>
        </div>
    </div>
  );
}



export default Profile