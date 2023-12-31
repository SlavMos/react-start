import React, { Profiler } from "react";
import "./App.css";
import "./Resset.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { addPost } from "./redux/state";

const App = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header first="123123" second={12321321} third={[1, 2, 3, 4]} />
        <Nav />
        <div className="app-wraper-content">
          <Routes>
            <Route
              path="Profile"
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  addPost={props.addPost}
                  updatePostText={props.updatePostText}
                />
              }
            />
            <Route
              path="/"
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  addPost={props.addPost}
                  updatePostText={props.updatePostText}
                />
              }
            />
            <Route
              path="Dialogs/*"
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route path="news" element={<News />} />
            <Route path="Music" element={<Music />} />
            <Route path="Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
