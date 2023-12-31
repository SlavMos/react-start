import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-127-641a1d518802b.jpg?crop=0.813xw:0.721xh;0.0994xw,0.128xh&resize=1200:*"
        alt=""
      />
      {props.message}
      <div>
        <span likesCount="2">Like </span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
