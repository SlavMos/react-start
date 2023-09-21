import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>Ed</div>
        <div className={s.dialog}>Ash</div>
        <div className={s.dialog}>Shot</div>
        <div className={s.dialog}>Ars</div>
        <div className={s.dialog}>Katya</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>Idk</div>
      </div>
    </div>
  );
};

export default Dialogs;
