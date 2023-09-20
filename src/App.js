import React, { Profiler } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wraper-content">
          <Routes>
            <Route path="Profile" element={<Profile />} />
            <Route path="Dialogs" element={<Dialogs />} />
            <Route path="News" element={<News />} />
            <Route path="Music" element={<Music />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
