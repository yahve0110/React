import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

//Component for Name of dialog
const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return <NavLink to={path}>{props.name}</NavLink>;
};


//component for messages 

const Message = (props)=>{
  return(
    <div className={s.message}>{props.message}</div>
  )
}


const Dialogs = (props) => {

//objects with data
let dialogsData = [
  {
    id: 1,
    name:"Ilyas"
  },
  {
    id: 2,
    name:"Iris"
  },
  {
    id: 3,
    name:"Gogis"
  },
  {
    id: 4,
    name:"Valeris"
  }
]

let dialogsElements = dialogsData.map((dialog)=>{
  return (
    <div>
  <DialogItem name={dialog.name} id={dialog.id} />
  </div>
  ) 
})

let messagesData = [
  {id:1,message:"Hi"},
  {id:2,message:"How are u"},
  {id:3,message:"Yo"},
  {id:4,message:"dai money"},
]

let messagesElements = messagesData.map(message =><Message message = {message.message} /> )


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
