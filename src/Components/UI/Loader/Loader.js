import React from "react";
import classes from "./loader.module.css";

export default function Loader() {
  return (
    <div className={classes.loaderBlock}>
      <div className={classes.loader}></div>
      <div>Loading...</div>
    </div>
  );
}
