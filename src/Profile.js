import React from 'react';
import MiniCalendar from './MiniCalendar';

function Profile () {




return (
    <div>
        <div className="profilecard">
            <h2>John Smith</h2>
            <img alt="happy man" width="200" height="200" src="https://image.shutterstock.com/shutterstock/photos/190821629/display_1500/stock-photo-happy-man-with-white-teeth-smiling-with-thumbs-up-isolated-on-a-white-background-190821629.jpg"></img>
            <h4>Bio</h4>
            <p>Hey my name is John and I like pretty much all types of music, I'm very cool</p>
            <h4>Fav Genre: Guitar</h4>
            <button>Edit Profile</button>
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