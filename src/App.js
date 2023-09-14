import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&usqp=CAU  "
          alt=""
        />
      </header>
      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Message</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
        <div>
          <a href="">Setings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img
            src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png"
            alt=""
          />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>ava + description</div>
        <div>My posts</div>
        <div>New post</div>
        <div>
          <div>post1</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
