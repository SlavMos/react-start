import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={s.MyPosts}>
      My posts
      <div>
        <textarea className={s.textarea}></textarea>
        <div className={s.buttonPost}>
          <button className={s.button}>Add Post</button>
        </div>
      </div>
      <div>New post</div>
      <div className={s.posts}>
        <Post message="Hi,how are you?" />
        <Post message="My firs post" />
      </div>
    </div>
  );
};

export default MyPosts;
