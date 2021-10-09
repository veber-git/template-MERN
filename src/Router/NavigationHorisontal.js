import React from "react";
import { Link } from "react-router-dom";

import classes from "./navigation.module.css";

export default function NavigationHorisontal() {
  return (
    <div>
      <ul className={classes.horisontalList}>
        <li className={classes.horisontalItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={classes.horisontalItem}>
          <Link to="/contacts">Contacts</Link>
        </li>
        <li className={classes.horisontalItem}>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
