import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>
        <a href="https://google.ca">D2L</a>
      </h2>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/learningpage">Start Learning</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
