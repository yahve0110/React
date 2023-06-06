import React from "react";
import classes from"./Post.module.css"


const Post = (props) =>{
    return (
      
        <div className={classes.item}>
          <img src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=2000" alt="" />
          {props.message}

          <div>
            <button>Like</button>{props.like}</div>
        </div>
    )
}

export default Post