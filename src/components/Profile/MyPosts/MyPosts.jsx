import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  console.log(props);

  let postELements = props.postData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));
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
      <div className={s.posts}>{postELements}</div>
    </div>
  );
};

export default MyPosts;
