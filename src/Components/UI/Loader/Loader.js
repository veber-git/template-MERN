import React from "react";
import classes from "./loader.module.css";

//Входные props
//props.title - появляющаяся надпись
export default function Loader(props) {
  return (
    <div className={classes.loaderBlock}>
      <div className={classes.loader}></div>
      <div>{props.title ? props.title : "Loading..."}</div>
    </div>
  );
}
