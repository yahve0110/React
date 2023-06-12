import React from "react";
import MyPosts from "./MyPosts/MyPosts";



const Profile = (props) => {

 

  return (
    <div >
      <div>
      <img src="https://news.store.rambler.ru/img/8216a3fa1bdcc02143a78295811e74ac?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen" alt="" />
      </div>
      <MyPosts posts = {props.posts} addPost = {props.addPost} newPostText= {props.newPostText} updateNewPostText = {props.updateNewPostText}/>
    </div>
  );
}

export default Profile;
