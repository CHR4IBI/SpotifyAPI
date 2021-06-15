import "./App.css";
import React from "react";
import { Route, useLocation } from "react-router";
import { AnimatedSwitch, spring } from "react-router-transition";
import HomePage from "./pages/HomePage/HomePage";
import ArtistsPage from "./pages/ArtistsPage/ArtistsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RedirectPage from "./pages/RedirectPage";
import {get } from './utils/api'

const glide = (val) => {
  return spring(val, {
    stiffness: 174,
    damping: 24,
  });
};

const pageTransitions = {
  atEnter: {
    offset: 100,
  },
  atLeave: {
    offset: glide(-100),
  },
  atActive: {
    offset: glide(0),
  },
};

const App = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <AnimatedSwitch
        {...pageTransitions}
        runOnMount={location.pathname === "/"}
        mapStyles={(styles) => ({
          transform: `translateX(${styles.offset}%)`,
        })}
      >
        <Route path="/" exact component={LoginPage} />
        <Route path='/redirect' component={RedirectPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/artists" component={ArtistsPage} />
        <Route component={NotFoundPage} />
      </AnimatedSwitch>
    </React.Fragment>
  );
};

export default App;
