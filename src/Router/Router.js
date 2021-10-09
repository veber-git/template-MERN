import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../Pages/Home.js";
import Contacts from "../Pages/Contacts.js";
import About from "../Pages/About.js";
import Error from "../Pages/Error.js";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/error">
        <Error />
      </Route>

      <Redirect to="/error" />
    </Switch>
  );
}
