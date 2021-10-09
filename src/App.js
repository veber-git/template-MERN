import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavigationVertical from "./Router/NavigationVertical.js";
import NavigationHorisontal from "./Router/NavigationHorisontal.js";
import Router from "./Router/Router.js";
import "./Style/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <div className="wrapperMain">
            <div className="header">
              <p>header</p>
              <NavigationHorisontal />
            </div>
          </div>
        </header>

        <main>
          <div className="wrapperMain">
            <h1 className="hidden">My app name</h1>
            <div className="contentBlock">
              <div className="sidebarBlock">
                <p>sidebar block</p>
                <NavigationVertical />
              </div>
              <div className="content">
                <p>main content block</p>
                <Router />
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <div className="wrapperMain">
            <div className="footer">
              <p>footer</p>
              <NavigationHorisontal />
            </div>
          </div>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
