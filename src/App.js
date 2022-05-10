import React, {useEffect, useState} from "react";
import {Route, Routes } from "react-router-dom";

import './App.css';
import Calendar from './Calendar';
import Profile from './Profile';
import Feed from './Feed';
import Header from './Header';
import AddForm from "./AddForm";

function App() {
  const [isAddFormVisible, setAddFormVisible] = useState(true);
  const [albumEntries, setAlbumEntries] = useState([]);
  const [user, setUser] = useState({})

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

  return (
    <div className="App">
      <Header/>
      {isAddFormVisible ? <AddForm handleNewAlbum={handleNewAlbum} user={user}/> : <></>}
      <Routes>
        <Route path="/" element={<Calendar albumEntries={albumEntries}/>}></Route>
        <Route path="/profile" element={<Profile user={user} albumEntries={albumEntries}/>}></Route>
        <Route path="/feed" element={<Feed albumEntries={albumEntries} filteredDeletedAlbum={filteredDeletedAlbum}/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
