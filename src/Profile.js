import React, { useState } from 'react';
import MiniCalendar from './MiniCalendar';
import Calendar from './Calendar';
import EditProfile from './EditProfile';
import { Col, Container, Row } from 'react-bootstrap';

function Profile ( { user, albumEntries, onUpdatedProfile }) {

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
        <Container>
            <Row>
                <Col>
                    <div className="profilecard">
                        <img alt="happy man" src={user.image} id="profileimg"></img>
                        <div className="profilecolumn">
                            <hr></hr>
                            <h2>{user.username}</h2>
                            <h4>Bio: </h4>
                            <p>{user.bio}</p>
                            <h4>Fav Genre: {user.favgenre}</h4>
                            <button onClick={handleEdit} className="profileeditbtn">{isProfileEditFormVisible ? "Nvm" : "Edit Profile"}</button>
                            {isProfileEditFormVisible ? <EditProfile user={user} onUpdatedProfile={(updatedProfile) => {setProfileEditFormVisible(false); return onUpdatedProfile(updatedProfile);}} /> : <></>}
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
                        <Calendar albumEntries={albumEntries}/>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div>
                        <h2>Most Recent 5 Albums</h2>
                        <div>
                            {displayTop5Albums(user.username)}
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
)}



export default Profile