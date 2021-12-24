import React from "react";
import Button from "./Button";
import classes from "./Header.module.css";
import { Routes, Route, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  console.log(props);
  const location = useLocation();
  console.log(location.pathname);

  const isHomePage = location.pathname === "/";

  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <Logo />
        </div>
        <h1>Winter Internship</h1>
        <div className={classes.btnJoinUs}>
          <Link to="/form">
            {isHomePage && (
              <button renderAs="button" className={classes.button}>
                <span> Join Us </span>
              </button>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
