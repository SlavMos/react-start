import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.image}
          src="https://sun9-77.userapi.com/impg/tY4eGS5c8ZTLQwKFwhOlcMivqQMx1xDLQVPNDA/NqZRQo0B_Xo.jpg?size=607x1080&quality=95&sign=c620531f8e58d9de0145927323a10664&type=album"
          alt=""
        />
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
