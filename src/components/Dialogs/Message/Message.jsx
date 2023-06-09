import React from "react";
import s from "./../Dialogs.module.css";



//component for messages 

const Message = (props)=>{
  return(
    <div className={s.message}>{props.message}</div>
  )
}


export default Message;
