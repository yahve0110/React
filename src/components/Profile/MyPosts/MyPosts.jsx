import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.content}>
      <div>
      <img
          src="https://www.shutterstock.com/image-vector/new-post-neon-text-vector-260nw-1370808899.jpg"
          alt=""
        />
      </div>
      <div>
        My Posts
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add Post</button>
        </div>
        <div>New Posts</div>
        <Post message = 'Hi how are you?' like = '14' />
        <Post message = 'It is my first post'like = '15'  />
        <Post message = 'second'like = '15' />
        <Post message = 'third' like = '25'/>
     
      </div>
    </div>
  );
};

export default MyPosts;
