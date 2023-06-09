import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";






const Dialogs = (props) => {

//objects with data


let dialogsElements = props.dialogs.map((dialog)=>{
  return (
    <div>
  <DialogItem name={dialog.name} id={dialog.id} />
  </div>
  ) 
})


let messagesElements = props.messagesData.map(message =><Message message = {message.message} /> )


  //return jsx
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        
          
        {dialogsElements}
       
 
      </div>
      <div className={s.messages}>
    
      {messagesElements}
    
          
      </div>
    </div>
  );
};

export default Dialogs;
