import React from "react";
import s from "./Dialogs.module.css";

import Messages from "./Messages/Messages";
import DialogsItem from "./DIalogItem/DialogsItem";

const Dialogs = (props) => {
  console.log(props);
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogsItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElement = props.messagesData.map((message) => (
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
