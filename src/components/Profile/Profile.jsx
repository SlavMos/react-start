import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Post/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  console.log(props);
  return (
    <div className={s.Profile}>
      <ProfileInfo />
      <MyPosts postData={props.postData} />
    </div>
  );
};

export default Profile;
