import React from "react";
import classes from "./Header.module.css"

const Header = () =>{
    return(
      <header className={classes.header}>
      <img className={classes.header_img}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJubXDaT-Vhu8oKFvEKsEipo58f-nWO2nHg&usqp=CAU" alt="" />
     </header>
    )
  }

 export  default  Header 