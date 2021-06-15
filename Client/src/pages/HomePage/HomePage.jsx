import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  
  return (
    <div className="landing-page">
      <Link to="/artists">
        <button>Discover artists</button>
      </Link>
    </div>
  );
};

export default HomePage;
