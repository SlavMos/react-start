import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  console.log(props);

  let postELements = props.postData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
    props.updatePostText("");
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
  };

  return (
    <div className={s.MyPosts}>
      My posts
      <div>
        <textarea
          ref={newPostElement}
          className={s.textarea}
          value={props.newPostText}
          onChange={onPostChange}
        ></textarea>
        <div className={s.buttonPost}>
          <button onClick={addPost} className={s.button}>
            Add Post
          </button>
        </div>
      </div>
      <div>New post</div>
      <div className={s.posts}>{postELements}</div>
    </div>
  );
};

export default MyPosts;
