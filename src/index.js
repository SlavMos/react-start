import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
let postData = [
  { id: 1, message: "Hi,how are you?", likesCount: 10 },
  { id: 2, message: "My firs post", likesCount: 12 },
];
let dialogsData = [
  { id: 1, name: "Ed" },
  { id: 2, name: "Ash" },
  { id: 3, name: "Shot" },
  { id: 4, name: "Ars" },
  { id: 5, name: "Katya" },
];

let messagesData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Do you like me?" },
  { id: 4, message: "How much are you paying?" },
  { id: 5, message: "Che esor chem kyna dus qal" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      postData={postData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
