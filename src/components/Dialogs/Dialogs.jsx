import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Messages = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogsItem name="Ed" id="1" />
        <DialogsItem name="Ash" id="2" />
        <DialogsItem name="Shot" id="3" />
        <DialogsItem name="Ars" id="4" />
        <DialogsItem name="Katya" id="5" />
      </div>
      <div className={s.messages}>
        <Messages message="Hello " />
        <Messages message="How are you? " />
        <Messages message="Do you like me? " />
        <Messages message="Bari Luys" />
        <Messages message="Che,esor chem kyna" />
      </div>
    </div>
  );
};

export default Dialogs;
