import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const MyPosts = () => {

  let postsData = [
    {id:1,message:"Hi how are you?",likesCount:12,},
    {id:2,message:"It is my first post",likesCount:15,},
    {id:3,message:"second",likesCount:22,},
    {id:4,message:" third",likesCount:5,},
  ]
  
let newPosts = postsData.map(post => <Post message = {post.message} like = {post.likesCount} /> )


  return (
    <div className={classes.content}>
      <ProfileInfo />
      <div className={classes.dialogs}>
        My Posts
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
        <div>New Posts</div>
    
      {newPosts}
     
      </div>
    </div>
  );
};

export default MyPosts;
