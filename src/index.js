import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost } from "./redux/state";
import { updatePostText } from "./redux/state";
const root = ReactDOM.createRoot(document.getElementById("root"));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatePostText={updatePostText} />
    </React.StrictMode>
  );
};

renderEntireTree(state);
subscribe(renderEntireTree);
