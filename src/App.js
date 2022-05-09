import React from "react";
import {Route, Routes } from "react-router-dom";

import './App.css';
import Calendar from './Calendar';
import Profile from './Profile';
import Feed from './Feed';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Calendar/>}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
      </Routes>

    </div>
  );
}

export default App;
