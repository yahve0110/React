import React from "react";
import classes from"./Post.module.css"


const Post = () =>{
    return (
      
        <div className={classes.item}>
          <img src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=2000" alt="" />
          Post 1

         <div><button>Like</button></div>
        </div>
    )
}

export default Post