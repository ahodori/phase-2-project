import React, {useEffect, useState} from "react";
import {Route, Routes } from "react-router-dom";

import Calendar from './Calendar';
import Profile from './Profile';
import Feed from './Feed';
import Header from './Header';
import AddForm from "./AddForm";
import AlbumCard from "./AlbumCard";
import SingleCardDisplay from "./SingleCardDisplay";

import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

function App() {
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [albumEntries, setAlbumEntries] = useState([]);
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");
  const [sortMethod, setSortMethod] = useState("rating");

  useEffect(() => {
    fetch('http://localhost:3000/albumEntries')
      .then(res => res.json())
      .then(albums => setAlbumEntries(albums))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then(res => res.json())
      .then(user => setUser(user))
  }, [])


  const handleNewAlbum = (newAlbum) => {
    setAlbumEntries([...albumEntries, newAlbum])
  }

  const filteredDeletedAlbum = (id) => {
    setAlbumEntries(albumEntries.filter(albumEntry => albumEntry.id !== id))
  }

  const onUpdatedProfile = (updatedProfile) => {
    const newUpdatedProfile = user => {
      if (user.id === updatedProfile.id) {
        return updatedProfile
      } else {return user}
    }
    setUser(newUpdatedProfile)
  }

  const onUpdatedAlbum = (updatedAlbum) => {
    const newUpdatedAlbum = albumEntries.map(albumEntry => {
      if (albumEntry.id === updatedAlbum.id) {
        return updatedAlbum
      } else {return albumEntry}
    })
    setAlbumEntries(newUpdatedAlbum)
  }
    
  const handleSearch = (e) => {
    setSearch(e.target.value)
  } 

  const filteredAlbums = albumEntries.filter(albumEntry => albumEntry.artist.toLowerCase().includes(search.toLowerCase()))

  const handleSortAlphabeticalByArtist = () => {
    setSortMethod("alphabetical");
  } 

  const handleSortByRating = () => {
    setSortMethod("rating");
  } 


  //below function needs attention, trying to access comments key within each object of album entries array
  const handleNewCommentInEntries = (albumId, newlyAddedComment) => {
    const referredAlbum = albumEntries.filter((album) => album.id === albumId)[0];
    const unreferredAlbums = albumEntries.filter((album) => album.id !== albumId);

    const newComments = (referredAlbum.comments.length > 0) ? [ ...referredAlbum.comments, newlyAddedComment] : [newlyAddedComment];

    const newAlbum = {
                        ...referredAlbum,
                        comments: newComments
                      };

    fetch(`http://localhost:3000/albumEntries/${albumId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAlbum),
        })
        .then(res=>res.json())
        .then(json=>{
          console.log(json);
          setAlbumEntries([...unreferredAlbums, newAlbum]);
        })
  }


  return (
    <div className="App">
      <Header/>
        <Button onClick={() => setAddFormVisible(true)}>Add Entry</Button>
        <Modal show={isAddFormVisible} onHide={() => setAddFormVisible(false)}>
          <AddForm handleNewAlbum={handleNewAlbum} user={user}/> 
        </Modal>
      <Routes>
        <Route path="/" element={<Calendar filteredDeletedAlbum={filteredDeletedAlbum} albumEntries={albumEntries} onUpdatedAlbum={onUpdatedAlbum} handleNewCommentInEntries={handleNewCommentInEntries}/>}></Route>
        <Route path="/profile" element={<Profile user={user} albumEntries={albumEntries} onUpdatedProfile={onUpdatedProfile}/>}></Route>
        <Route path="/entries/" element={<Feed sortMethod={sortMethod}
                                               onUpdatedAlbum={onUpdatedAlbum}
                                               handleSortByRating={handleSortByRating}
                                               handleSearch={handleSearch}
                                               handleSortAlphabeticalByArtist={handleSortAlphabeticalByArtist}
                                               search={search}
                                               albumEntries={filteredAlbums}
                                               filteredDeletedAlbum={filteredDeletedAlbum}
                                               handleNewCommentInEntries={handleNewCommentInEntries}/>}></Route>
        <Route path="/entries/:entryId" element={<SingleCardDisplay albumEntries={albumEntries} filteredDeletedAlbum={filteredDeletedAlbum}/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
