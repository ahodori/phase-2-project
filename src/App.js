import React, {useEffect, useState} from "react";
import {Route, Routes } from "react-router-dom";

import Calendar from './Calendar';
import Profile from './Profile';
import Feed from './Feed';
import Header from './Header';
import AddForm from "./AddForm";
import AlbumCard from "./AlbumCard";
import SingleCardDisplay from "./SingleCardDisplay";

function App() {
  const [isAddFormVisible, setAddFormVisible] = useState(true);
  const [albumEntries, setAlbumEntries] = useState([]);
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");

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

  const handleSearch = (e) => {
    setSearch(e.target.value)
  } 

  const filteredAlbums = albumEntries.filter(albumEntry => albumEntry.artist.toLowerCase().includes(search.toLowerCase()))

  const handleSortAlphabeticalByArtist = () => {
    const sortedByAlpha = [...albumEntries].sort((a,b) => {
      return a.artist.localeCompare(b.artist)
    })
    setAlbumEntries(sortedByAlpha)
  } 

  const handleSortByRating = () => {
    const sortedByRating = [...albumEntries].sort((a,b) => {
      return b.rating - a.rating
    })
    setAlbumEntries(sortedByRating)
  } 


  //below function needs attention, trying to access comments key within each object of album entries array
  const handleNewCommentInEntries = (newlyAddedComment) => {
    setAlbumEntries.comments([...albumEntries, newlyAddedComment])
  }


  return (
    <div className="App">
      <Header/>
      {isAddFormVisible ? <AddForm handleNewAlbum={handleNewAlbum} user={user}/> : <></>}
      <Routes>
        <Route path="/" element={<Calendar filteredDeletedAlbum={filteredDeletedAlbum} albumEntries={albumEntries}/>}></Route>
        <Route path="/profile" element={<Profile user={user} albumEntries={albumEntries} onUpdatedProfile={onUpdatedProfile}/>}></Route>
        <Route path="/entries/" element={<Feed handleSortByRating={handleSortByRating} handleSearch={handleSearch} handleSortAlphabeticalByArtist={handleSortAlphabeticalByArtist} search={search} albumEntries={filteredAlbums} filteredDeletedAlbum={filteredDeletedAlbum}/>}></Route>
        <Route path="/entries/:entryId" element={<SingleCardDisplay albumEntries={albumEntries} filteredDeletedAlbum={filteredDeletedAlbum}/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
