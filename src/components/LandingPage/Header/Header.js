import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const handleScroll = () => {
    console.log("Here");
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 10) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }
  };

  useEffect(() => {}, [headerActive]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={headerActive ? "active" : ""}>
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
