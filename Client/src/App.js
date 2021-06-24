import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, useLocation } from "react-router";
import { AnimatedSwitch, spring } from "react-router-transition";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RedirectPage from "./pages/RedirectPage";
import PlayPage from "./pages/PlayPage/PlayPage";

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
  const [expiryTime, setExpiryTime] = useState("0");

  useEffect(() => {
    let expiryTime;
    try {
      expiryTime = JSON.parse(localStorage.getItem("expiry_time"));
    } catch (error) {
      expiryTime = "0";
    }
    setExpiryTime(expiryTime);
  }, []);

  const isValidSession = () => {
    const currentTime = new Date().getTime();
    const isSessionValid = currentTime < expiryTime;

    return isSessionValid;
  };
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
        <Route
          path="/redirect"
          render={(props) => (
            <RedirectPage
              isValidSession={isValidSession}
              setExpiryTime={setExpiryTime}
              {...props}
            />
          )}
        />
        <Route
          path="/home"
          render={(props) => (
            <HomePage isValidSession={isValidSession} {...props} />
          )}
        />
        <Route
          path="/search"
          render={(props) => (
            <SearchPage isValidSession={isValidSession} {...props} />
          )}
        />
        <Route
          path="/play"
          render={(props) => (
            <PlayPage isValidSession={isValidSession}{...props} /> 
          )}
        />
        <Route component={NotFoundPage} />
      </AnimatedSwitch>
    </React.Fragment>
  );
};

export default App;
