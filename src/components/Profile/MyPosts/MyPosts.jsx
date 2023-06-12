import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import ProfileInfo from "../ProfileInfo/ProfileInfo";


const MyPosts = (props) => {



console.log(props)

  let newPosts = props.posts.map(post => <Post message={post.message} like={post.likesCount} />);

  let newPostElement = React.createRef()

 let addPost = () =>{
  let text = newPostElement.current.value;
  props.addPost(text)

 }

 let onPostChange = () =>{
let text = newPostElement.current.value
props.updateNewPostText(text)
 }

  return (
    <div className={classes.content}>
      <ProfileInfo />
      <div className={classes.dialogs}>
        My Posts
        <div>
          <textarea name="" id="" onChange={onPostChange} ref ={newPostElement} value={props.newPostText} cols="40" rows="5"></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
        <div>New Posts</div>
    
      {newPosts}
     
      </div>
    </div>
  );
};

export default MyPosts;
