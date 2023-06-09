import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import ProfileInfo from "../ProfileInfo/ProfileInfo";


const MyPosts = (props) => {



console.log(props)

  let newPosts = props.posts.map(post => <Post message={post.message} like={post.likesCount} />);



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
