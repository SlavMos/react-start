import React from "react";
import s from "./Dialogs.module.css";

import Messages from "./Messages/Messages";
import DialogsItem from "./DIalogItem/DialogsItem";

const Dialogs = (props) => {
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

  let dialogsElements = dialogsData.map((dialog) => (
    <DialogsItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = messagesData.map((message) => (
    <Messages message={message.message} id={message.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElement}</div>
    </div>
  );
};

export default Dialogs;
