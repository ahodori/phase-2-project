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

  useEffect(() => {
    fetch('http://localhost:3000/albumEntries')
      .then(res => res.json())
      .then(albums => setAlbumEntries(albums))
  }, [])

  return (
    <div className="App">
      <Header/>
      {isAddFormVisible ? <AddForm/> : <></>}
      <Routes>
        <Route path="/" element={<Calendar/>}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/feed" element={<Feed albumEntries={albumEntries}/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
