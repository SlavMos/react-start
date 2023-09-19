import React from "react";
import s from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a className={`${s.active} ${s.link}`} href="/profile">
          Profile
        </a>
      </div>
      <div className={s.item}>
        <a className={s.link} href="/dialogs">
          Message
        </a>
      </div>
      <div className={s.item}>
        <a className={s.link} href="">
          News
        </a>
      </div>
      <div className={s.item}>
        <a className={s.link} href="">
          Music
        </a>
      </div>
      <div className={s.item}>
        <a className={s.link} href="">
          Setings
        </a>
      </div>
    </nav>
  );
};

export default Nav;
