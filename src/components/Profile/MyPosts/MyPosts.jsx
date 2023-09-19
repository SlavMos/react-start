import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
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
