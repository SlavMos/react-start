import React from "react";
import s from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.links}>
        <NavLink
          to="/Profile"
          className={(navData) =>
            `${navData.isActive ? s.active : ""} ${s.item}`
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={s.links}>
        <NavLink
          className={
            (navData) =>
              `${navData.isActive ? s.active : ""} ${
                s.item
              }` /* если работает актив то будут применины стили актива.а item всегда будет работать*/
          }
          to="/Dialogs"
        >
          Message
        </NavLink>
      </div>
      <div className={s.links}>
        <NavLink
          className={(navData) =>
            `${navData.isActive ? s.active : ""} ${s.item}`
          }
          to="/News"
        >
          News
        </NavLink>
      </div>
      <div className={s.links}>
        <NavLink
          className={(navData) =>
            `${navData.isActive ? s.active : ""} ${s.item}`
          }
          to="/Music"
        >
          Music
        </NavLink>
      </div>
      <div className={s.links}>
        <NavLink
          className={(navData) =>
            `${navData.isActive ? s.active : ""} ${s.item}`
          }
          to="/Settings"
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
